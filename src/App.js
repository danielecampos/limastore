import './App.css';
import * as React from 'react';
import TopBar from './components/topbar/TopBar.js'
import NavBar from './components/navbar/NavBar.js'
import ItemsListContainer from './components/items/ItemListContainer.js';
import ItemDetailContainer from './components/items/ItemDetailContainer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import { CartProvider } from './context/cartContext';
import { useState } from 'react';
// import LoadingSpinner from "./components/loading/LoadingSpinner";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleFetch = () => {
    setIsLoading(true);
    // setIsLoading(false);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <TopBar />
        <NavBar />

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

        <button onClick={handleFetch}>Fetch Users</button>

        <button onClick={handleFetch} disabled={isLoading}>
          Fetch Users
        </button>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
