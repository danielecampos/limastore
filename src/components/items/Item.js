// custom componets
import ItemCount from './ItemCount.js';
import FavoriteItem from './FavoriteItem.js';
import './item.css';

// external components
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';

function Item({ id, title, price, image, payment_method, stock }) {
  return (
    <Card>
      <Link to={`product/detail/${id}`}>
        <CardActionArea>
          <img src={image} alt={title} />

          <CardContent>
            <div className='title'>{title}</div>
            <p className='price'>R$ {price}</p>
            <small>{payment_method}</small>
          </CardContent>
        </CardActionArea>
      </Link>

      <ItemCount stock={stock} />

      <ButtonGroup className='addToCart' variant='outlined' aria-label='outlined button group'>
        <Button>Adicionar ao carrinho</Button>
        <FavoriteItem />
      </ButtonGroup>

      <div>
        <small>Quantidade em estoque: {stock}</small>
      </div>
    </Card>
  );
}

export default Item;
