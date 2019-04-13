import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class Menu extends Component {
  render() {
    return (
      <>
        SOy MENU
        <button><Link to='/search'>Search</Link></button>
        <button><Link to='/add'>Add</Link></button>
        <button><Link to='/category'>Top 10</Link></button>
        
      </>
    );
  }
}

export default Menu;