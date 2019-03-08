import React, { Component } from 'react';

import './App.css';

import Jokes from './jokes/ThatsTheJokes'
import { Route, NavLink, withRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route path='/' component={Jokes}/>
      </div>
    );
  }
}

export default App;
