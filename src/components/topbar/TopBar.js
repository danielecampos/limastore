// Custom assets
import Logo from './logo-branca.png';
import AvatarImage from './avatar.jpg';
import './TopBar.css';

// Bibliotecas externas
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

function ResponsiveAppBar() {
  const pages = ['Minha conta', 'Ajuda'];

  return (
    <header className="topBar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box className="logo">
            <img src={Logo} alt="Logo da loja LimaStore"/>
          </Box>

          <Box className="topBarItems">
            {pages.map((page) => (
              <Button key={page}> {page} </Button>
            ))}
          </Box>

          <Box className="accountOptions">
            <Tooltip title="Editar perfil">
              <IconButton>
                <Avatar alt="Avatar de Daniele Campos" src={AvatarImage} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </header>
  );
}

export default ResponsiveAppBar;