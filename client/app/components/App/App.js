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
import {NotificationContainer, NotificationManager} from 'react-notifications';

class App extends Component{

  render(){
    return(
        <>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/welcome" component={Welcome}/>
            </Switch>
            <NotificationContainer/>
        </>
    );
  }
}

export default App;
