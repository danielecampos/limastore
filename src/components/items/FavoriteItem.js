import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function FavoriteItem() {
  return (
    <Box>
      <ButtonGroup variant='outlined' aria-label='outlined button group'>
        <Button>Adicionar ao carrinho</Button>

        <Tooltip title='Favoritar este produto'>
          <Button>
            <FavoriteBorderIcon />
          </Button>
        </Tooltip>
      </ButtonGroup>
    </Box>
  );
}

export default FavoriteItem;
