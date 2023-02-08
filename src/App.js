import './App.css';
import * as React from 'react';
import TopBar from './components/topbar/TopBar.js'
import NavBar from './components/navbar/NavBar.js'
import ItemsListContainer from './components/items/ItemListContainer.js';

function App() {
  return (
    <div className='App'>
      <TopBar></TopBar>
      <NavBar></NavBar>
      <ItemsListContainer greeting='Olá, seja bem-vindo!'/>
    </div>
  );
}

export default App;
