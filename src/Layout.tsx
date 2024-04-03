import * as React from 'react';
import Grid from '@mui/material/Grid';
import {Box} from "@mui/material";


function Layout() {
  return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box>TOD</Box>
        </Grid>
      </Grid>
  );
}

export default Layout;
