import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import WelcomePage from './components/Register/WelcomePage';
import RegisterUserForm from "./components/Register/Register";
import LoginUserForm from "./components/Login/Login";
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/login" component={LoginUserForm} />
        <Route exact path="/register" component={RegisterUserForm} />
      </div>
    </Router>
  );
}

export default App;
