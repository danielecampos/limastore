// custom componets
import FavoriteItem from './FavoriteItem.js';

// external components
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

 function ItemDetail({ item }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <img src={item.image} alt={item.title} />
      </Grid>

      <Grid item xs={3}>
        <div className='title'>{item.title}</div>
        <p className='price'>R$ {item.price}</p>
        <p>{item.description}</p>

        <Stack spacing={1}>
          <Rating name="size-large" defaultValue={4} size="large" />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default ItemDetail;
