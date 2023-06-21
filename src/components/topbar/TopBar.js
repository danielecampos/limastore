// custom componets
import Logo from './limastore-logo.png';
import './TopBar.css';
import { secondary_pages } from '../../constants.js';

// external components
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CartWidget from '../cart/CartWidget.js';
import AccountOptions from '../account/accountOptions.js';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

function ResponsiveAppBar() {
  return (
    <header className='topBar' position='static'>
      <Container maxWidth='xl'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Box className='logo'>
                <Link to='/'>
                  <img src={Logo} alt='Logo da loja LimaStore'/>
                </Link>
              </Box>
            </Grid>

            <Grid item xs={4}>
              {
                secondary_pages.map((page) => (
                  <Link key={page.name} to={page.category}>{page.name}</Link>
                ))
              }
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
