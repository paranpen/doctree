import React, { Component } from 'react';
import './App.css';
import DbList from './components/DbList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Document Tree & Change List</h2>
        </div>
        <p className="App-intro">
        </p>
        <DbList dbName="" />
      </div>
    );
  }
}

export default App;
