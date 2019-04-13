import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'


class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <Main/>
      </>
    );
  }
}

export default App;