// custom componets
import Item from './Item.js';

// external components
import Grid from '@mui/material/Grid';

 function ItemList({ items }) {
  return (
    <Grid container spacing={2}>
      {
        items.map((item) => (
          <Grid key={item.id} item xs={4}>
            <Item {...item} />
          </Grid>
        ))
      }
    </Grid>
  );
}

export default ItemList;
