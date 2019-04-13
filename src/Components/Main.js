import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Menu from './Menu'
import Add from './Add'
import Search from './Search'
import Results from './Results';
import Category from './Category';
import Detail from './Detail';

class Main extends Component {
  render() {

    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/menu' component={Menu}/>
          <Route path='/add' component={Add}/>
          <Route path='/search' component={Search}/>
          <Route path='/results' component={Results}/>
          <Route path='/category' component={Category}/>
          <Route path='/detail' component={Detail}/>
        </Switch>
      </main>
    );
  }
}

export default Main;