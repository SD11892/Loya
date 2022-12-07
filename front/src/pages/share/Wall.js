import * as React from 'react';
import { Grid } from '@mui/material';
import { Pane } from '../../components/wall/Pane';
import Site from '../../components/wall/Site';

const Wall = () => {
  return (
    <Grid container justifyContent="space-between">
      <Grid
        item
        style={{
          background: '#fff',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          borderRight: '1px solid #e5e7eb',
          width: '24rem',
          overflow: 'auto',
        }}
      >
        <Pane />
      </Grid>
      <Grid
        item
        style={{
          width: 'calc(100% - 24rem)',
          overflow: 'scroll',
        }}
      >
        <Site />
      </Grid>
    </Grid>
  );
};

export default Wall;
