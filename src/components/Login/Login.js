
import React from "react";
import { connect } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import { TextField } from "formik-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import { loginUser } from '../../store/actions/userAction';
// import { isReferenced } from "@babel/types";
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
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
    loginfield:{
        backgroundColor: 'white',
        borderRadius: 25,
        height: 40,
        borderStyle: 'none',
        marginLeft: '-4%',
        marginBottom: 15,
        border: '1px solid #dededf',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
        border: 'none',
        borderRadius: 5,
        boxShadow: '0 3px 5px 2px #5E5987',
        outline: 'none',
        color: 'black',
        backgroundColor: '#D2D1DF',
        height: 20,
        width: 200,
        padding: '5px 5px',
        marginLeft: 15,
        fontFamily: 'Inconsolata, monospace'
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
    registerlink:{
        color: '#34377F',
        fontSize: 15
    }
})


const LoginUserForm = ({ values, status, isAuthenticating, loggedIn, authenticationError }) => {
  const classes = useStyles();
  const history = useHistory();

  if (isAuthenticating) {
      return (
          <>
          {/* While loading page code here */}
          </>
      )
  }

  if (loggedIn) {
      history.push('/');
  }

  return (
   <div className={classes.background}> 
        <div className={classes.container}>
            <h1 className={classes.title}>What do you call a skinny ghost?</h1>
            <Form className="form-cont">
                <div className={classes.loginfield}>
                    <i className="fas fa-user"></i>
                    <Field 
                        className={classes.input}
                        type="text" 
                        name="username" 
                        placeholder="Enter your username." 
                        component={TextField}
                    />
                </div>
                <div className={classes.loginfield}>
                    <i className="fas fa-lock"></i>
                    <Field 
                        className={classes.input}
                        type="password" 
                        name="password" 
                        placeholder="Enter your password." 
                        component={TextField}
                    />
                </div>
                <div className="buttCont">
                    <button className={classes.button}>Log back in to the fatherhood.</button>
                </div>
                {authenticationError && (
                    <p>{authenticationError}</p>
                )}
            </Form>
            <h1 className={classes.title}>A BOOlean.</h1>
            <p className={classes.reroute}>
                If you don't have an account,{" "}
                <Link to="/register" className={classes.registerlink}>
                    {" "}click here to register
                </Link>
                .
            </p>
        </div>
    </div>  
  );
};

const FormikForm = withFormik({
    mapPropsToValues({ username, password }) {
      return {
        username: username || "",
        password: password || ""
      };
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
          .min(5, "Your username must be at least 5 characters long.")
          .required("Enter a username, papa bear!"),
      password: Yup.string()
          .min(8, "Password must be 8 characters or longer.")
          .required("Enter your password. Do not make me ask again.")
    }),
    handleSubmit(values, { props }) {
      props.loginUser({
          email: values.username,
          password: values.password
    })
    }
})(LoginUserForm);

const mapStateToProps = state => {
    return {
      isAuthenticating: state.isAuthenticating,
      loggedIn: state.loggedIn,
      authenticationError: state.authenticationError
    };
  };

export default connect( mapStateToProps, { loginUser })(FormikForm);
