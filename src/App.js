import './App.css';
import * as React from 'react';
import TopBar from './components/topbar/TopBar.js'
import NavBar from './components/navbar/NavBar.js'

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <NavBar></NavBar>
    </div>
  );
}

export default App;
