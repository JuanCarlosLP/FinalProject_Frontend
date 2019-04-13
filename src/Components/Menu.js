import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Paper } from "@material-ui/core";
import {Posts} from './Posts'

class Menu extends Component {
  render() {
    return (
      <Paper>
        <Posts/>
      </Paper>
    );
  }
}

export default Menu;