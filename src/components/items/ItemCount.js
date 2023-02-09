import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Tooltip from '@mui/material/Tooltip';
import OutlinedInput from '@mui/material/OutlinedInput';

function ItemCount({stock}) {
  const [count, setCount] = useState(1);
  const addCountButton = useRef(null);
  const removeCountButton = useRef(null);

  useEffect(() => {
    if (count >= stock) {
      addCountButton.current?.classList.add('Mui-disabled');
    } else if (count <= 0) {
      removeCountButton.current?.classList.add('Mui-disabled');
    } else {
      addCountButton.current?.classList.remove('Mui-disabled');
      removeCountButton.current?.classList.remove('Mui-disabled');
    }
  }, [count, stock]);

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
          <Button ref={addCountButton} className='addItem' stock={stock} initial='1' onClick={() => setCount(count + 1)}>
            <AddIcon />
          </Button>
        </Tooltip>
      </ButtonGroup>
    </Box>
  );
}

export default ItemCount;
