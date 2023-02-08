// custom componets
import AvatarImage from './avatar.jpg';
import './accountOptions.css';

// external components
import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

function accountOptions() {
  return (
    <Box className="accountOptions">
      <Tooltip title="Editar perfil">
        <IconButton>
          <Avatar alt="Avatar de Daniele Campos" src={AvatarImage} />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default accountOptions;
