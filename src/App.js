import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'; 
import { connect } from 'react-redux';

import './styles/global.scss'
import PrivateRoute from './components/Private/PrivateRoute';
import Admin from './components/Admin/Admin';
import Joke from './components/Joke/Joke';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NavBar from './components/NavBar/NavBar';
import { getUserInfo } from './store/actions/userAction';

function App({getUserInfo}) {

  const loggedIn = localStorage.getItem('token');

  useEffect(() => {
    if (loggedIn) {
      getUserInfo(loggedIn);
    }
  }, [loggedIn, getUserInfo])


  return (
    <>
      <NavBar />
      <Switch>
        <PrivateRoute path='/admin'>
          <Admin />
        </PrivateRoute>
        <Route path='/joke' component={Joke} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route component={Joke} />
      </Switch>
    </>
  );
}


const mapStateToProps = state =>{
  return {
      
  };
}

export default connect(mapStateToProps, {getUserInfo})(App);

