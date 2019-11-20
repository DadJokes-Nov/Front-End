import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const NavDiv = styled.div`
  background-color: #374785;
  height: 5vh;
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

const NavBar = () => {

  const classes= useStyles();

  return (
    <NavDiv>
      <div>
        <Link className={classes.a} to='/home'>Home</Link>
      </div>
      {/* register and login should not appear on navbar when loggedin */}
      <div>
        <Link className={classes.a} to='/register'>Register</Link>
      </div>
      <div>
        <Link className={classes.a} to='/login'>Login</Link>
      </div>
      <div>
        <Link className={classes.a} to='/joke'>Joke</Link>
      </div>
      
      <div>
        {/* this route should eventually check if user is admin to be visible. */}
        <Link className={classes.a} to='/admin'>Admin</Link>
      </div>
    </NavDiv>
  );
};

export default NavBar;