
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import "../Register/Register.scss";

const useStyles = makeStyles({
    background:{
        backgroundColor: '#A8D0E6',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%'
    },
    container:{
        backgroundColor: 'white',
        padding: '50px',
        borderRadius: 25,
        width: '100%',
        margin: 50,
        minHeight: 400,
        maxWidth: 1000,
        height: 'fit-content',
        boxShadow: '0 15px 60px 0 #374785'
    },
    title:{
        fontWeight: 700,
        color: '#24305E',
        fontFamily: 'Roboto, sans-serif',
        textAlign: 'center',
        fontSize: "2.5rem"
    },
    joke:{
        fontWeight: 700,
        color: '#24305E',
        fontFamily: 'Roboto, sans-serif',
        textAlign: 'center',
        fontSize: '1.75rem',
        margin: '3% auto'
    },
    formcont:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    formwrapper:{
        display: 'flex',
        flexDirection: 'column'
    },
    fieldlabel:{
        color: '#555555',
        fontWeight: 500,
        marginTop: '3%',
        fontFamily: 'Roboto, sans-serif'
    },
    input:{
        backgroundColor: 'white',
        borderRadius: 25,
        height: 40,
        paddingLeft: 25,
        width: '96%',
        margin: '1%',
        border: '1px solid #dededf',
        fontFamily: 'Roboto, sans-serif'
    },
    image:{
        marginTop: 10,
        marginBottom: 30
    },
    sel:{
        fontFamily: 'Roboto, sans-serif',
        fontSize: 15,
        margin: 20
    },
    robotbox:{
        fontFamily: 'Roboto, sans-serif',
        color: '#555555'
    },
    notes:{
        fontFamily: 'Roboto, sans-serif',
        margin: 20
    },
    card:{
        minWidth: 400,
        maxWidth: 400,
        maxHeight: 400,
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: "ghostwhite",
        boxShadow: '0 3px 5px 2px #5F685C',
        marginTop: 10
    },
    buttcont:{
        display: 'flex',
        justifyContent: 'center'
    },
    button:{
        margin: '2% auto',
        borderRadius: 25,
        backgroundColor: '#f76C6C',
        color: 'white',
        fontWeight: 500,
        letterSpacing: 1,
        height: 40,
        width: '40%',
        cursor: 'pointer'
    },
    reroute:{
        paddingTop: 20,
        fontFamily: 'Roboto, sans-serif',
        textAlign: 'center',
        color: '#555555'
    },
    loginlink:{
        color: '#34377F',
        fontSize: 15,
        fontFamily: 'Roboto, sans-serif'
    },
    error:{
        color: 'red'
    }
})


const RegisterUserForm = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);

  return (
   <div className={classes.background}> 
        <div className={classes.container}>
            <h1 className={classes.title}>Why don't bachelors like Git?</h1>
            <h2 className={classes.joke}>Are you a self-proclaimed connoisseur of dad jokes? Then, you must join our blessed fellowship of like-minded dads who have the best dang kneeslappers.</h2>
            <Form className={classes.formcont}>
                <div className={classes.formwrapper}>
                    <div>
                        <label className={classes.fieldlabel}>
                            First Name *{" "}
                            {touched.name && errors.name && (
                            <p className={classes.error}>{errors.name}</p>
                            )}
                            <Field 
                                className={classes.input}
                                type="text" 
                                name="name" 
                                placeholder="Your full name." 
                                value={values.name}
                            />
                        </label>
                    </div>
                    <div>
                        <label className={classes.fieldlabel}>
                            Email *{" "}
                            {touched.email && errors.email && (
                                <p className={classes.error}>{errors.email}</p>
                            )}
                            <Field 
                                className={classes.input}
                                type="text" 
                                name="email" 
                                placeholder="Your email." 
                                value={values.email}
                            />
                        </label>
                    </div>
                    <div>
                        <label className={classes.fieldlabel}>
                            Username *{" "}
                            {touched.username && errors.username && (
                                <p className={classes.error}>{errors.username}</p>
                            )}
                            <Field 
                                className={classes.input} 
                                type="text" 
                                name="username" 
                                placeholder="Create your username." 
                                value={values.username} 
                            />
                        </label>
                    </div>
                    <div>
                        <label className={classes.fieldlabel}>
                            Password *{" "}
                            {touched.password && errors.password && (
                                <p className={classes.error}>{errors.password}</p>
                            )}
                            <Field 
                                className={classes.input}
                                type="password" 
                                name="password" 
                                placeholder="Password." 
                                value={values.password}
                            />
                        </label>
                    </div>
                    <div>
                        <label className={classes.fieldlabel}>
                            Confirm Password *{" "}
                            {touched.confirm && errors.confirm && (
                                <p className={classes.error}>{errors.confirm}</p>
                            )}
                            <Field 
                                className={classes.input}
                                type="password" 
                                name="confirm" 
                                placeholder="Confirm password." 
                                value={values.confirm}
                            />
                        </label>
                    </div>
                    <div>
                        <label className={classes.fieldlabel}>
                            Avatar URL (not required) {" "}
                            <Field 
                                className={classes.input} 
                                type="url" 
                                name="profimage" 
                                placeholder="Image URL for avatar." 
                                value={values.image}
                            />
                        </label>
                    </div>  
                    <label className="checkbox-container">
                    <span className={classes.robotbox}>I am not a robot; I may however be an AI entity:   </span>
                    <Field
                        className={classes.robotbox}
                        type="checkbox"
                        name="robotbox"
                        checked={values.robotbox}
                    />
                    <span className="checkmark" />
                    </label>
                    <div className={classes.buttcont} type="submit">
                        <button className={classes.button}>Join the fatherhood.</button>
                    </div>
                </div>
            </Form>
            <h1 className={classes.joke}>Because they don't like to commit.</h1>
            <p className={classes.reroute}>
                If you don't have an account,{" "}
                <Link to="/login" className={classes.loginlink}>
                    {" "}click here to sign in
                </Link>
                .
            </p>
        </div>
        {users.map(user => (
        <Card className={classes.card}>
            <CardContent>
                <div key={user.id}>
                <Typography variant="subtitle" component="h2">Name: {user.name}</Typography>
                <Typography variant="subtitle" component="h3">Email: {user.email}</Typography>
                <Typography variant="subtitle" component="h3">Password: {user.password}</Typography>
                <Typography variant="subtitle" component="h3">Username: {user.username}</Typography>
                <Typography variant="subtitle" component="h4">Is not a robot: {user.robotbox ? 'yes' : 'no'}</Typography>
                <CardMedia className="cardmedia" image={user.image} title="User Avatar" />
                </div>
            </CardContent>
        </Card>
      ))}
    </div>  
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ name, email, username, password, confirm, image, robotbox }) {
    return {
      name: name || "",
      email: email || "",
      username: username || "",
      password: password || "",
      confirm: confirm || "",
      image: image || "",
      robotbox: robotbox || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
        .min(2, "Your name must be at least 2 characters long.")
        .required("Name is required."),
    email: Yup.string()
        .email("This is an invalid email.")
        .required("Email is a required field."),
    username: Yup.string()
        .min(5, "Your username must be at least 5 characters long.")
        .required("Enter a username."),
    password: Yup.string()
        .min(8, "Password must be 8 characters or longer.")
        .required("Enter your password. Do not make me ask again."),
    confrim: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match!")
        .required("Please enter the same password again!"),
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
})(RegisterUserForm);

export default FormikForm;
