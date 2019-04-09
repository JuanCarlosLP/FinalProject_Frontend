import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Menu from './Menu'
import { Link } from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <>
        SOy LOGIN
        <Switch>

          <Route path='/menu' component={Menu}/>
          <button><Link to='/menu'>Login</Link></button>
          
        </Switch>
      </>
    );
  }
}

export default Login;