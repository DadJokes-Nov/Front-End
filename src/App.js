import React, { useState } from 'react';
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
import WelcomePage from './components/Register/WelcomePage';
import RegisterUserForm from "./components/Register/Register";
import LoginUserForm from "./components/Login/Login";
import FormJoke from "./components/Joke/FormJoke";
import dummyData from "./dummyData";



function App() {
  const [jokeList, setTeamList] = useState(dummyData);
  const addNewJoke = form => {
    setTeamList([...jokeList, form]);
  };
  return (
    <>
      <NavBar />
      <Switch>
        <PrivateRoute path='/admin'>
          <Admin />
        </PrivateRoute>
        <Route path='/home' component={Home} />
        <Route path='/joke' render={ () =><FormJoke addNewJoke={addNewJoke} />, <Joke joke={jokeList} />} />
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

