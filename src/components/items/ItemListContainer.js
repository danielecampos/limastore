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

function ItemsListContainer ({category}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allItems = await mock(); 

      const filteredItems = category === 'all' ? allItems : allItems.filter(item => item.category === category)

      setItems(filteredItems);
    }
    fetchData();
  }, [category]);

  const result = items.length > 0 ? <ItemList items={items} /> : <p>Nenhum produto encontrado.</p>;

  return (
    <Container maxWidth='xl'>
      {result}
    </Container>
  );
}

export default ItemsListContainer;
