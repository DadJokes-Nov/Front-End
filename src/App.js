import React from 'react';
import { Route, Switch } from 'react-router-dom'; 

import PrivateRoute from './components/Private/PrivateRoute';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import Joke from './components/Joke/Joke';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NavBar from './components/NavBar/NavBar';
import WelcomePage from './components/Register/WelcomePage';
import RegisterUserForm from "./components/Register/Register";
import LoginUserForm from "./components/Login/Login";


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

export default App;
