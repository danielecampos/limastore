// Custom componets
import './Navbar.css';
import { pages } from './constants.js';

// Libraries externas
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function ResponsiveAppBar() {
  return (
    <div className='navBar'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {
              pages.map((page) => (
                <Button key={page} sx={{ my: 2, color: 'white', display: 'block' }}> {page} </Button>
              ))
            }
          </Box>
        </Toolbar>
      </Container>
    </div>
  );
}

export default ResponsiveAppBar;
