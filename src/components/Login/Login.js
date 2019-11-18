import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { TextField } from "formik-material-ui";
import { makeStyles } from "@material-ui/core/styles";
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';

//What has been removed since we are utilizing Formik:
//state
//handleSubmit
//onChange

const useStyles = makeStyles({
    input:{
        border: 5,
        borderRadius: 5,
        boxShadow: '0 3px 5px 2px #5E5987',
        color: 'black',
        backgroundColor: '#D2D1DF',
        height: 20,
        width: 200,
        padding: '5px 5px',
        margin: 30,
        fontFamily: 'Inconsolata, monospace'
    },
    robotbox:{
        fontFamily: 'Inconsolata, monospace'
    }
})


const LoginUserForm = ({ values, status }) => {
  const [users, setUsers] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);

  return (
   <div className="bigboy"> 
        <div className="user-form">
            <h1>What do you call a skinny ghost?</h1>
            <h2>Are you ready to join our blessed fatherhood?</h2>
            <Form className="form-cont">
                <div>
                    <Field 
                        className={classes.input}
                        type="text" 
                        name="username" 
                        placeholder="Enter your username." 
                        component={TextField}
                    />
                </div>
                <div>
                    <Field 
                        className={classes.input}
                        type="password" 
                        name="password" 
                        placeholder="Enter your password." 
                        component={TextField}
                    />
                </div>
                <label className="checkbox-container">
                <span className="robot">I am not a robot; I may however be an AI entity:   </span>
                <Field
                    className={classes.robotbox}
                    type="checkbox"
                    name="robotbox"
                    checked={values.robotbox}
                    component={TextField}
                />
                <span className="checkmark" />
                </label>
                <div className="butt-cont">
                    <button>Log back in to the fatherhood.</button>
                </div>
            </Form>
            <h1>A BOOlean.</h1>
        </div>
    </div>  
  );
};

const FormikForm = withFormik({
    mapPropsToValues({ username, password, robotbox }) {
      return {
        username: username || "",
        password: password || "",
        robotbox: robotbox || false
      };
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
          .min(5, "Your username must be at least 5 characters long.")
          .required("Enter a username, papa bear!"),
      password: Yup.string()
          .min(8, "Password must be 8 characters or longer.")
          .required("Enter your password. Do not make me ask again."),
      robotbox: Yup.bool().oneOf([true], "Error. Please check this box to let us know that you are an omniscient being - AI and the inferior human.")
    }),
    handleSubmit(values, { setStatus, resetForm }) {
      //values is our object with all our data on it
  
      //this is a placeholder until backend creates an api to connect to
      axios
        .post("https://reqres.in/api/users/", values)
        .then(res => {
          setStatus(res.data);
          console.log(res);
          resetForm();
        })
        .catch(error => console.log(error.response));
    }
})(LoginUserForm);

export default FormikForm;