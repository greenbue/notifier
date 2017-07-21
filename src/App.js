import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React-Electron</h2>
        </div>
        <p className="App-intro">
          This was created using create-react-app and has Electron dependencies so that it can easily be transferred to Electron later.
        </p>
      </div>
    );
  }
}

export default App;
