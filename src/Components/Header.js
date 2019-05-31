import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Search from './Search';

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <nav>
            
              <Search/>
              
            
          </nav>
        </header>
      </>
    );
  }
}

export default Header;