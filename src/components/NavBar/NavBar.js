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

const LogOut = styled.div`
  background-color: #374785;
  color: white;
  fontFamily: Roboto, sans-serif;
  fontSize: 20;
  textDecoration: none;
  cursor: pointer;
`


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
  
  //DO NOT REMOVE - onclick needed for MVP for Lexie

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   props.history.push("/login");
  // };

  return (
    <NavDiv>

      <div>
        <a href='https://dadjokes-nov.github.io/Marketing-page/index.html' className={classes.a}>Home</a>
      </div>

      <div>
        <Link className={classes.a} to='/joke'>Jokes</Link>
      </div>

      
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

      {loggedIn && (
        <>
        <div>
        <Link className={classes.a} to='/admin'>Admin</Link>
      </div>

       {/* <Avatar src={user.img_url} className={classes.avatar} /> for when we look into using a image  */}
       <LogOut onClick={logout}>
         Logout <span role='img' aria-label='cry'>😭</span>
       </LogOut>


      {/* DO NOT DELETE - onClick needed for Lexie's Friday MVP // onClick will call the logout function declared at the top*/}
       {/* <button className="navlinkButt" onClick={handleLogout}>
          Logout
        </button> */}
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