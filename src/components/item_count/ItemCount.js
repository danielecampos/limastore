import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Tooltip from '@mui/material/Tooltip';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Card from '@mui/material/Card';

function ItemCount() {
  const [count, setCount] = useState(1);
  const [stock] = useState(10);

  useEffect(() => {
    const addItem = document.querySelector('.addItem');
    const removeItem = document.querySelector('.removeItem');

    if (count >= stock) {
      addItem.classList.add('Mui-disabled');
    } else if (count <= 0) {
      removeItem.classList.add('Mui-disabled');
    } else {
      addItem.classList.remove('Mui-disabled');
      removeItem.classList.remove('Mui-disabled');
    }
  }, [count, stock]);

  return (
    <Card variant='outlined'>
      <Box sx={{ flexGrow: 1, display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}>
        <ButtonGroup variant='outlined' aria-label='outlined button group'>
          <Tooltip title='Remover'>
            <Button className='removeItem' onClick={() => setCount(count - 1)}>
              <RemoveIcon />
            </Button>
          </Tooltip>

          <TextField
            id='outlined-number'
            label='Quantidade'
            type='number'
            value={count}
          />

          <Tooltip title='Adicionar'>
            <Button className='addItem' stock={stock} initial='1' onClick={() => setCount(count + 1)}>
              <AddIcon />
            </Button>
          </Tooltip>
        </ButtonGroup>

        <br />

        <ButtonGroup variant='outlined' aria-label='outlined button group'>
          <Button>Adicionar ao carrinho</Button>

          <Tooltip title='Favoritar este produto'>
            <Button>
              <FavoriteBorderIcon />
            </Button>
          </Tooltip>
        </ButtonGroup>
      </Box>
    </Card>
  );
}

export default ItemCount;
