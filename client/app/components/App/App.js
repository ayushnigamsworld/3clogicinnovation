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
      <div className='responsive-page homepage'>
          <section className="first-section" style={{'paddingTop': 10}}>
            <Header/>
            
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/welcome" component={Welcome}/>
                <Route component={NotFound}/>
              </Switch>
          </section>
      </div>
    );
  }
}

export default App;
