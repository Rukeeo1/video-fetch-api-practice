import React from 'react';
import logo from './logo.svg';
import Youtube from './Youtube';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </header>
      <Youtube className="youtube" />
    </div>
  );
}

export default App;
