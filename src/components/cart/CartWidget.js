// custom components
import './cart.css'

// external components
import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import { cartContext } from '../../context/cartContext';

function CartWidget() {
  const context = React.useContext(cartContext)
  console.log(context)
  const cartContent = Array.from(context.cart.values()) ?? []
  const itemsCount = cartContent.map( item => item.quantity ) ?? 0

  return (
    <Box className='shoppingCart'>
      <Tooltip title='Carrinho de compras'>
        <IconButton>
          <Badge className='cart-count' badgeContent={itemsCount}>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default CartWidget;
