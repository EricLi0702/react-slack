import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <h1>Slack Clone site </h1>
      <Header></Header>
      <div className="app__body">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
