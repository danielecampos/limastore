// custom componets
import './ItemCount.css'

// external components
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Tooltip from '@mui/material/Tooltip';
import OutlinedInput from '@mui/material/OutlinedInput';
import { cartContext } from '../../context/cartContext.js';
import { useContext } from 'react';

function ItemCount({ item }) {
  const context = useContext(cartContext)
  const [count, setCount] = useState(1);
  const addCountButton = useRef(null);
  const removeCountButton = useRef(null);

  useEffect(() => {
    if (count >= item.stock) {
      addCountButton.current?.classList.add('Mui-disabled');
    } else if (count <= 0) {
      removeCountButton.current?.classList.add('Mui-disabled');
    } else {
      addCountButton.current?.classList.remove('Mui-disabled');
      removeCountButton.current?.classList.remove('Mui-disabled');
    }
  }, [count, item.stock]);

  return (
    <Box>
      <ButtonGroup variant='outlined' aria-label='outlined button group'>
        <Tooltip title='Remover'>
          <Button ref={removeCountButton} className='removeItem' onClick={() => setCount(count - 1)}>
            <RemoveIcon />
          </Button>
        </Tooltip>

        <OutlinedInput
          endAdornment={<small position="end">unidade(s)</small>}
          value={count}
        />

        <Tooltip title='Adicionar'>
          <Button ref={addCountButton} className='addItem' stock={item.stock} initial='1' onClick={() => setCount(count + 1)}>
            <AddIcon />
          </Button>
        </Tooltip>
      </ButtonGroup>

      <ButtonGroup className='addToCart' variant='outlined' aria-label='outlined button group'>
        <Button onClick={ () => context.addItem(item, count) }>Adicionar ao carrinho</Button>
        {/* <FavoriteItem /> */}
      </ButtonGroup>

    </Box>
  );
}

export default ItemCount;
