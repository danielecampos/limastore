// custom componets
import ItemCount from '../item_count/ItemCount';

// external components
import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function ItemsListContainer ( props ) {
  const [open, setOpen] = React.useState(true);

  return (
    <Container maxWidth='xl'>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton aria-label='close' color='inherit' size='small' onClick={() => { setOpen(false); }}>
                    <CloseIcon fontSize='inherit' />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                { props.greeting }
              </Alert>
            </Collapse>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <ItemCount />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ItemsListContainer;