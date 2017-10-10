import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Pubarazzi from './containers/Pubarazzi';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pubarazzi</h1>
        </header>

        <Pubarazzi />

      </div>
    );
  }
}

export default App;
