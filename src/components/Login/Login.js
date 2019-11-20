
import React from "react";
import { connect } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import "../Login/Login.scss";

import { makeStyles } from "@material-ui/core/styles";
import { loginUser } from '../../store/actions/userAction';
// import { isReferenced } from "@babel/types";
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';

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
    formwrapper:{
        display: 'flex',
        flexDirection: 'column'
    },
    fieldlabel:{
        color: '#555555',
        fontWeight: 500,
        marginBottom: '1%',
        fontFamily: 'Roboto, sans-serif'
    },
    loginfield:{
        backgroundColor: 'white',
        borderRadius: 25,
        height: 40,
        paddingLeft: 15,
        marginBottom: 30,
        border: '1px solid #dededf',
        display: 'flex',
        alignItems: 'center'
    },
    textfield:{
        border: 'none',
        outline: 'none',
        marginLeft: 15,
        fontFamily: 'Roboto, sans-serif'
    },
    errors:{
        marginBottom: 5,
        fontFamily: 'Roboto, sans-serif'
    },
    err:{
        color: 'red',
        fontSize: 18,
        fontFamily: 'Roboto, sans-serif'
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
    registerlink:{
        color: '#34377F',
        fontSize: 15,
        fontFamily: 'Roboto, sans-serif'
    },
    processing:{
        width: '100%',
        height: '80vh',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})



const LoginUserForm = ({ values, errors, touched, isAuthenticating, loggedIn, authenticationError, status }) => {

  const classes = useStyles();
  const history = useHistory();

  if (loggedIn) {
      history.push('/');
  }
  
  if (isAuthenticating){
      return (
        <div className={classes.processing}>
            <i className="fa fa-cookie fa-7x fa-spin"></i>
        </div>
      );
  }  

  return (
   <div className={classes.background}> 
        <div className={classes.container}>
            <h1 className={classes.joke}>What do you call a skinny ghost?</h1>
            <h2 className={classes.title}>Log-In</h2>
            <Form className={classes.formcont}>
                <div className={classes.formwrapper}>
                <div className={classes.errors}>
                    {touched.username && errors.username && (
                        <p className={classes.err}>{errors.username}</p>
                    )}
                </div>
                    <label className={classes.fieldlabel} htmlFor="username">
                        Username *{" "}
                    </label>
                    <div className={classes.loginfield}>
                        <i className="fas fa-user"></i>
                        <Field 
                            className={classes.textfield}
                            type="text" 
                            name="username"
                            id="username" 
                            placeholder="Enter your username." 
                        />
                    </div>
                    <div className={classes.errors}>
                    {touched.password && errors.password && (
                        <p className={classes.err}>{errors.password}</p>
                    )}
                </div>
                    <label className={classes.fieldlabel} htmlFor="password">
                        Password *{" "}
                    </label>
                    <div className={classes.loginfield}>
                        <i className="fas fa-lock"></i>
                        <Field 
                            className={classes.textfield}
                            type="password" 
                            name="password" 
                            id="password"
                            placeholder="Enter your password." 
                        />
                    </div>
                    <div className={classes.buttcont}>
                        <button className={classes.button}>Log back in to the fatherhood.</button>
                    </div>
                    {authenticationError && (
                        <p className={classes.err}>{authenticationError.data}</p>
                    )}
                </div>
                {authenticationError && (
                    <p>{authenticationError}</p>
                )}
            </Form>
            <h1 className={classes.joke}>A BOOlean.</h1>
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
          .required("Enter a username, good sir."),
      password: Yup.string()
          .min(8, "Password must be 8 characters or longer.")
          .required("Enter the magic word, wizard.")
    }),

    handleSubmit(values, { props }) {
      props.loginUser({
        //   vvv this is bypassing it eventually will need to either add this or remove it from back end 
          username: 'asdfasdfasdf',
          email: values.username,
          password: values.password
        //   more comments
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


