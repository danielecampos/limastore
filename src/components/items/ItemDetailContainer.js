// custom componets
import ItemDetail from './ItemDetail.js';

// external components
import * as React from 'react';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

async function mock() {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const response = await fetch('/items.json');

  const result = await response.json();

  return result;
}

function ItemDetailContainer () {
  const [item, setItem] = useState([]);
  const { product_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const item = (await mock()).filter(item => item.id === parseInt(product_id))[0];

      setItem(item);
    }

    fetchData();
  }, [product_id]);


  return (
    <Container maxWidth='xl'>
      <ItemDetail item={item}/>
    </Container>
  );
}

export default ItemDetailContainer;
