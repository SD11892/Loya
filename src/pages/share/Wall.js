import * as React from 'react';
import { Grid } from '@mui/material';
import { Pane } from '../../components/wall/Pane';
import Site from '../../components/wall/Site';

const Wall = () => {
  return (
    <Grid container justifyContent="space-between">
      <Grid
        item
        xs={3}
        style={{
          background: '#fff',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          borderRight: '1px solid #e5e7eb',
          maxWidth: '24rem',
        }}
      >
        <Pane />
      </Grid>
      <Grid
        item
        xs={9}
        style={{
          maxWidth: 'calc(100% - 24rem)',
        }}
      >
        <Site />
      </Grid>
    </Grid>
  );
};

export default Wall;
