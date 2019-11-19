
import React from "react";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosInstance } from "../../utils/axiosInstance";
import axios from 'axios';

import { TextField } from "formik-material-ui";
import { makeStyles } from "@material-ui/core/styles";
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';

//What has been removed since we are utilizing Formik:
//state
//handleSubmit
//onChange

const useStyles = makeStyles({
    background:{
        backgroundColor: '#4183AF',
        display: 'flex',
        justifyContent: 'center',
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
        maxWidth: 800,
        height: 'fit-content',
        boxShadow: '0 15px 60px 0 #B8D1E2'
    },
    title:{
        fontWeight: 700,
        color: '#0B3754',
        fontFamily: 'Inconsolata, monospace'
    },
    input:{
        border: 5,
        borderRadius: 5,
        boxShadow: '0 3px 5px 2px #5E5987',
        color: 'black',
        backgroundColor: '#D2D1DF',
        height: 20,
        width: 200,
        padding: '5px 5px',
        margin: 25,
        fontFamily: 'Inconsolata, monospace'
    },
    image:{
        marginTop: 10,
        marginBottom: 30
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
        maxHeight: 400,
        fontFamily: 'Inconsolata, monospace',
        backgroundColor: "ghostwhite",
        boxShadow: '0 3px 5px 2px #5F685C',
        marginTop: 10
    },
    button:{
        margin: 20,
        borderRadius: 50,
        backgroundColor: '#0B3754',
        color: 'white',
        fontWeight: 500,
        letterSpacing: 1,
        height: 40,
        width: '100',
        cursor: 'pointer'
    },
    reroute:{
        paddingTop: 20
    },
    loginlink:{
        color: '#34377F',
        fontSize: 15
    }
})


const RegisterUserForm = ({ values, errors, touched, status }) => {
    // const [users, setUsers] = useState([]); possibly unnecessary code
    const classes = useStyles();

    // useEffect(() => { possibly unnecessary code
    // status && setUsers(users => [...users, status]);
    // }, [status]);

  return (
   <div className={classes.background}> 
        <div className={classes.container}>
            <h1 className={classes.title}>Why don't bachelors like Git?</h1>
            <h2 className={classes.title}>Are you ready to join our blessed fellowship of like-minded dads who have the best dang kneeslappers?</h2>
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
                    <Field 
                        className={classes.image} 
                        type="url" 
                        name="profimage" 
                        placeholder="Image URL for avatar." 
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
                <div className="butt-cont" type="submit">
                    <button className={classes.button}>Join the fatherhood.</button>
                </div>
            </Form>
            <h1 className={classes.title}>Because they don't like to commit.</h1>
            <p className={classes.reroute}>
                If you don't have an account,{" "}
                <Link to="/login" className={classes.loginlink}>
                    {" "}click here to sign in
                </Link>
                .
            </p>
        </div>
        {/* Not sure what this code is suppose to be doing? vvv */}
        {/* {users.map(user => (
        <Card className={classes.card}>
            <CardContent>
                <div key={user.id}>
                <Typography variant="subtitle" component="h2">Name: {user.firstname} {user.lastname}</Typography>
                <Typography variant="subtitle" component="h3">Email: {user.email}</Typography>
                <Typography variant="subtitle" component="h3">Password: {user.password}</Typography>
                <Typography variant="subtitle" component="h3">Username: {user.username}</Typography>
                <Typography variant="subtitle" component="h4">Is not a robot: {user.robotbox ? 'yes' : 'no'}</Typography>
                <CardMedia className="cardmedia" image={user.image} title="User Avatar" />
                </div>
            </CardContent>
        </Card>
      ))} */}
    </div>  
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ firstname, lastname, email, username, password, image, robotbox }) {
    return {
      firstname: firstname || "",
      lastname: lastname || "",
      email: email || "",
      username: username || "",
      password: password || "",
      image: image || "",
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
    robotbox: Yup.bool().oneOf([true], "Error. Please check this box to let us know that you are an omniscient being - AI and the inferior human.")
  }),
  handleSubmit(values, { setStatus, resetForm, props }) {
    //values is our object with all our data on it

    //this is a placeholder until backend creates an api to connect to
    console.log('submitting', axios);
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        console.log(res);
        // setStatus(res.data);
        // resetForm();
        // props.history.push('/login');
      })
    //   .catch(error => console.error(error));
  }
})(RegisterUserForm);

export default FormikForm;
