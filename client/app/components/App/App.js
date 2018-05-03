import React, { Component } from 'react';

import Header from '../Header/Header';
import Home from '../Home/Home';

class App extends Component{

  render(){
    return(
      <div  className='responsive-page homepage'>
          <Header/>
          <Home/>
      </div>
    );
  }
}

export default App;
