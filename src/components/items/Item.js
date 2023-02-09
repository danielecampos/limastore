// custom componets
import ImageProduct from './iphone.png';
import ItemCount from './ItemCount.js';
import FavoriteItem from './FavoriteItem.js';
import './item.css';

// external components
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

function Item({ title, price, payment_method, stock }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component='img' image={ImageProduct} alt={title}/>

        <CardContent>
          <div className='title'>{ title }</div>

          <p className='price'>R$ { price }</p>

          <small>{ payment_method }</small>
        </CardContent>
      </CardActionArea>

      <ItemCount stock={stock} />
      <FavoriteItem />

      <small>Quantidade em estoque: {stock}</small>
    </Card>
  );
}

export default Item;
