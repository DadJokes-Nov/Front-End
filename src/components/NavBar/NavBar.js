import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import { logoutUser } from '../../store/actions/userAction';

const NavDiv = styled.div`
  background-color: #374785;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  position: fixed;
`;


const useStyles = makeStyles({
  a:{
    fontFamily: 'Roboto, sans-serif',
    color: 'white',
    fontSize: 20,
    textDecoration: 'none'
  }
});

const NavBar = ({ loggedIn, logoutUser }) => {

  const classes= useStyles();

  const logout = e => {
    e.preventDefault();
    logoutUser();
  }

  return (
    <NavDiv>
      {/* register and login should not appear on navbar when loggedin */}
      {!loggedIn && (
        <>
      <div>
        <Link className={classes.a} to='/register'>Register</Link>
      </div>
      <div>
        <Link className={classes.a} to='/login'>Login</Link>
      </div>
      </>
      )}
      <div>
        <Link className={classes.a} to='/joke'>Joke</Link>
      </div>
      
      {loggedIn && (
        <>
        <div>
        <Link className={classes.a} to='/admin'>Admin</Link>
      </div>

       {/* <Avatar src={user.img_url} className={classes.avatar} /> */}
       <button
        //  className={navbar.logout}
         onClick={logout}
       >
         Logout
       </button>
      </>
      )}
      
      {/* this is where we will create drop down menu for a user to logout or update user settings */}
    </NavDiv>
  );
};

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, { logoutUser })(NavBar)