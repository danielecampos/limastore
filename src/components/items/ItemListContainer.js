// custom componets
import ItemList from './ItemList.js';
import './ItemListContainer.css'

// external components
import * as React from 'react';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';

async function mock() {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const response = await fetch('items.json');

  return await response.json();
}

function ItemsListContainer () {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => setItems(await mock());
    fetchData();
  }, []);
  
  return (
    <Container maxWidth='xl'>
      <ItemList items={items} />
    </Container>
  );
}

export default ItemsListContainer;
