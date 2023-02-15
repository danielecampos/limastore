import './App.css';
import * as React from 'react';
import TopBar from './components/topbar/TopBar.js'
import NavBar from './components/navbar/NavBar.js'
import ItemsListContainer from './components/items/ItemListContainer.js';
import ItemDetailContainer from './components/items/ItemDetailContainer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <TopBar></TopBar>
      <NavBar></NavBar>

      <div className='App'>
        <Routes>
          <Route exact path='/' element={<ItemsListContainer category='all'/>} />
          <Route exact path='/decoracao' element={<ItemsListContainer category='decoracao'/>} />
          <Route exact path='/cozinha' element={<ItemsListContainer category='cozinha'/>} />
          <Route exact path='/mesa-posta' element={<ItemsListContainer category='mesa-posta'/>} />
          <Route exact path='/jardim' element={<ItemsListContainer category='jardim'/>} />
          <Route exact path='/product/detail/:product_id' element={<ItemDetailContainer/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
