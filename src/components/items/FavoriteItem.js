// custom componets
import './ItemCount.css'

// external components
import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';

function FavoriteItem() {
  return (
    <Tooltip title='Favoritar este produto'>
      <Button>
        <FavoriteBorderIcon />
      </Button>
    </Tooltip>
  );
}

export default FavoriteItem;
