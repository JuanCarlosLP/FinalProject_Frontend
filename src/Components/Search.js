import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Search extends Component {
  render() {
    return (
      <>
        SOY Search. ¿Quieres recetas? Click abajo!
        

        <button><Link to='/results'>Recetas Ya</Link></button>
      </>
    );
  }
}

export default Search;