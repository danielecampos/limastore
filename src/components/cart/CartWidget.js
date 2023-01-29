// Custom componets
import './CartWidget.css';

// Libraries externas
import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';

function CartWidget() {
  return (
    <Box className='shoppingCart'>
      <Tooltip title='Carrinho de compras'>
        <IconButton>
          <Badge badgeContent={4} color='primary'>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default CartWidget;