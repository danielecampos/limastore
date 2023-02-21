// custom componets
import './footer.css'
import ImageCartoes from './barra-pay.png';

// external components
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RedeemIcon from '@mui/icons-material/Redeem';
import HistoryIcon from '@mui/icons-material/History';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {

  return (
    <div className='Footer' position='static'>
      <Container maxWidth='xl'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <h3>NOSSOS SERVIÇOS</h3>

              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FavoriteBorderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Todos os produtos são selecionados por nós' />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <RedeemIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Cuidado e segurança na entrega' />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <HistoryIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Devolução em até 7 dias' />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={4}>
              <h3>PAGAMENTO SEGURO</h3>

              <p><small>Nós garantimos um ambiente seguro para suas compras.</small></p>

              <p><small>Parcelamos suas compras em até <b>10x sem juros</b>.</small></p>

              <img src={ImageCartoes} alt='A imagem mostra as bandeiras dos cartões aceitos' />
            </Grid>

            <Grid item xs={4}>
              <h3>ATENDIMENTO AO CLIENTE</h3>

              <p><small>Fale conosco e tire suas dúvidas!</small></p>

              <p><small>Seg-sex das 9:00 às 18:00h (exceto feriados)</small></p>

              <p><small>Telefones: +55 47 0000-0000</small></p>

              <p>
                <small>Siga-nos:</small>
                <InstagramIcon />
              </p>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Footer;
