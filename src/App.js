import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import { connect } from 'react-redux';

import './styles/global.scss'
import PrivateRoute from './components/Private/PrivateRoute';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import Joke from './components/Joke/Joke';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <PrivateRoute path='/admin'>
          <Admin />
        </PrivateRoute>
        <Route path='/home' component={Home} />
        <Route path='/joke' component={Joke} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route component={Home} />
      </Switch>
    </>
  );
}



const mapStateToProps = state =>{
  return {
      
  };
}

export default connect(mapStateToProps, {})(App);

