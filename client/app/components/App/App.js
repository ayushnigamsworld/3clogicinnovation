import React, {Component} from 'react';
import Home from '../Home/Home';
import Welcome from '../Welcome/welcome';
import {Route, Switch} from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';

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
