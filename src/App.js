import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/board'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Welcome SalesLoft</h1>
      <h2>Click to Play Connect 4</h2>
      <Board/>
      </div>
    );
  }
}

export default App;
