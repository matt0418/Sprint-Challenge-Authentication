import React, { Component } from 'react';

import './App.css';

import { Route, NavLink, withRouter } from 'react-router-dom'

import Jokes from './jokes/ThatsTheJokes'
import Register from './register/Register'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/register'>Register</NavLink>
        </nav>
        <div className="App">
          <Route exact path='/' component={Jokes}/>
          <Route path ='/register' component={Register}/>
        </div>
      </div>
      
    );
  }
}

export default App;
