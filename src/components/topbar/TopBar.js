// Custom componets
import Logo from './logo-branca.png';
import './TopBar.css';

// Libraries externas
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CartWidget from '../cart/CartWidget.js';
import AccountOptions from '../account/accountOptions.js';
import Divider from '@mui/material/Divider';

function ResponsiveAppBar() {
  return (
    <header className='topBar' position='static'>
      <Container maxWidth='xl'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <Box className='logo'>
                <img src={Logo} alt='Logo da loja LimaStore'/>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <div className='rightItems'>
                <CartWidget />
                <Divider className='dividerLine' orientation='vertical' flexItem />
                <AccountOptions />
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </header>
  );
}

export default ResponsiveAppBar;
