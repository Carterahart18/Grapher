import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header class="App-header">
          <h1 class="App-title">Grapher</h1>
        </header>
        <canvas id="canvas" width="500" height="500" scale="1"></canvas>
      </div>
    );
  }
}

export default App;
