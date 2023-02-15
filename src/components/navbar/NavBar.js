// custom componets
import './Navbar.css';
import { pages } from '../../constants.js';

// external components
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';

function ResponsiveAppBar() {
  return (
    <div className='navBar'>
      <Grid container>
        <Grid item xs={6}>
          <Container maxWidth='xl'>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {
                pages.map((page) => (
                  <Link key={page.category} to={page.category}>{page.name}</Link>
                ))
              }
            </Box>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default ResponsiveAppBar;
