import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { TextField } from "formik-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
    sel:{
        fontFamily: 'Inconsolata, monospace',
        fontSize: 15,
        margin: 20
    },
    robotbox:{
        fontFamily: 'Inconsolata, monospace'
    },
    notes:{
        fontFamily: 'Inconsolata, monospace',
        margin: 20
    },
    card:{
        minWidth: 400,
        maxWidth: 400,
        fontFamily: 'Inconsolata, monospace',
        backgroundColor: "ghostwhite",
        boxShadow: '0 3px 5px 2px #5F685C',
        marginTop: 10
    }
})


const RegisterUserForm = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);

  return (
   <div className="bigboy"> 
        <div className="user-form">
            <h1>Why don't bachelors like Git?</h1>
            <h2>Are you ready to join our blessed fatherhood?</h2>
            <Form className="form-cont">
                <div>
                    <Field 
                        className={classes.input}
                        type="text" 
                        name="firstname" 
                        placeholder="Your first name." 
                        component={TextField}
                    />
                </div>
                <div>
                    <Field 
                        className={classes.input} 
                        type="text" 
                        name="lastname" 
                        placeholder="Your last name." 
                        component={TextField} 
                    />
                </div>
                <div>
                    <Field 
                        className={classes.input}
                        type="text" 
                        name="email" 
                        placeholder="Your email." 
                        component={TextField}
                    />
                </div>
                <div>
                    <Field 
                        className={classes.input} 
                        type="text" 
                        name="username" 
                        placeholder="Create your username." 
                        component={TextField} 
                    />
                </div>  
                <div>
                    <Field 
                        className={classes.input}
                        type="password" 
                        name="password" 
                        placeholder="Password." 
                        component={TextField}
                    />
                </div>
                <div>
                    <Field className={classes.sel} as="select" name="age">
                    <option>Please choose an option in the following age ranges.</option>
                    <option value="dad-in-training">18 and Below (I am jealous of your youth.)</option>
                    <option value="young-dad">19-29</option>
                    <option value="established-dad">30-40</option>
                    <option value="mid-life-crisis-dad">40-55</option>
                    <option value="hugh-hefner-dad">56-666</option>
                    </Field>
                    {touched.age && errors.age && (
                    <p className="errors">{errors.age}</p>
                    )}
                </div>
                <div>
                    <Field className={classes.sel} as="select" name="subject">
                        <option>Choose your subject of interest, Pops.</option>
                        <option value="sports">Sports</option>
                        <option value="videogames">Video Games</option>
                        <option value="philo">Existentialist Quandaries</option>
                        <option value="pop-cult">Pop Culture</option>
                        <option value="science">Science</option>
                        <option value="maths">Mathematics</option>
                        <option value="coding">Coders/Hackers Unite!</option>
                        <option value="anime">Anime + 2D Waifus</option>
                    </Field>
                    {touched.subject && errors.subject && (
                    <p className="errors">{errors.subject}</p>
                    )}
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
                <div>
                    <Field
                        className={classes.notes} 
                        as="textarea" 
                        type="type" 
                        name="notes" 
                        placeholder="Special Notes." 
                        component={TextField} 
                    />
                </div>
                <div className="butt-cont" type="submit">
                    <button>Join the fatherhood.</button>
                </div>
            </Form>
            <h1>Because they don't like to commit.</h1>
        </div>
        {users.map(user => (
        <Card className={classes.card}>
            <CardContent>
                <div key={user.id}>
                <Typography variant="subtitle" component="h2">Name: {user.firstname} {user.lastname}</Typography>
                <Typography variant="subtitle" component="h3">Email: {user.email}</Typography>
                <Typography variant="subtitle" component="h3">Password: {user.password}</Typography>
                <Typography variant="subtitle" component="h3">Username: {user.username}</Typography>
                <Typography variant="subtitle" component="h4">Age Group: {user.age}</Typography>
                <Typography variant="subtitle" component="h4">Is not a robot: {user.robotbox ? 'yes' : 'no'}</Typography>
                <Typography variant="subtitle" component="h4">Special Notes: {user.notes}</Typography>
                </div>
            </CardContent>
        </Card>
      ))}
    </div>  
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ firstname, lastname, email, username, password, age, subject, robotbox, notes }) {
    return {
      firstname: firstname || "",
      lastname: lastname || "",
      email: email || "",
      username: username || "",
      password: password || "",
      age: age || "",
      subject: subject || "",
      notes: notes || "",
      robotbox: robotbox || false
    };
  },
  validationSchema: Yup.object().shape({
    firstname: Yup.string()
        .min(2, "Your first name must be at least 2 characters long.")
        .required("Enter a first name."),
    lastname: Yup.string()
        .min(2, "Last name must be at least 2 characters long.")
        .required("Enter a last name!!!"),
    email: Yup.string()
        .email("This is an invalid email.")
        .required("Email is a required field."),
    username: Yup.string()
        .min(5, "Your username must be at least 5 characters long.")
        .required("Enter a username, papa bear!"),
    password: Yup.string()
        .min(8, "Password must be 8 characters or longer.")
        .required("Enter your password. Do not make me ask again."),
    notes: Yup.string(),
    age: Yup.string().required("Choose your age, YOU IMBECILE!"),
    subject: Yup.string().required("Choose your favorite subject."),
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