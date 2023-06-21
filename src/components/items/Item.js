// custom componets
import ItemCount from './ItemCount.js';
import './item.css';

// external components
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom';

function Item({ item }) {
  return (
    <Card>
      <Link to={`product/detail/${item.id}`}>
        <CardActionArea>
          <img src={item.image} alt={item.title} />

          <CardContent>
            <div className='title'>{item.title}</div>
            <p className='price'>R$ {item.price}</p>
            <small>{item.payment_method}</small>
          </CardContent>
        </CardActionArea>
      </Link>

      <ItemCount item={item} />

      <div>
        <small>Quantidade em estoque: {item.stock}</small>
      </div>
    </Card>
  );
}

export default Item;
