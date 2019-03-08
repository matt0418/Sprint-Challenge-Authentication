import React, { Component } from 'react';

import './App.css';

import { Route, NavLink, withRouter } from 'react-router-dom'
import styled from 'styled-components'

import Jokes from './jokes/ThatsTheJokes'
import Register from './register/Register'

const NavBar = styled.div`
  text-align: right;
  padding-top: 2.2%;
  padding-bottom: 2.2%;
  background: green;
`

const StyledLogout = styled.p`
  margin-right: 3%;
  color: white;
  text-decoration: none;
  font-size: 25px;
  font-weight: bold;
`


class App extends Component {

  logout = () => {
    localStorage.removeItem('jwt')
  }

  render() {
    return (
      <div>
        <NavBar className='naver'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/register'>Register</NavLink>
          {localStorage.getItem('jwt') ? <NavLink to='/' onClick={this.logout}>Logout</NavLink> : <div></div> }
        </NavBar>
        <div className="App">
          <Route exact path='/' component={Jokes}/>
          <Route path ='/register' component={Register}/>
        </div>
      </div>
      
    );
  }
}

export default withRouter(App);
