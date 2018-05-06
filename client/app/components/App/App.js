import React, { Component } from 'react';

import Header from '../Header/Header';
import Home from '../Home/Home';
import WelcomeHeader from '../Header/WelcomeHeader';
import Welcome from '../Welcome/welcome';
import NotFound from '../App/NotFound';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from 'react-router-dom';

class App extends Component{

  render(){
    return(
        <>
            <Header/>
            <Home/>
        </>
    );
  }
}

export default App;
