import React, { Component } from 'react';

import Header from '../Header/Header';
import Home from '../Home/Home';

class App extends Component{

  render(){
    return(
      <div className='responsive-page homepage'>
          <section className="first-section" style={{'padding-top': 10}}>
            <Header/>
            <Home/>
          </section>
      </div>
    );
  }
}

export default App;
