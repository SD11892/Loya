import * as React from 'react';
import { Grid } from '@mui/material';
import { SearchPane } from '../../components/search/SearchPane';
import TestTable from '../../components/testimonials/table';

const Search = () => {
  return (
    <Grid container justifyContent="space-between">
      <Grid
        item
        xs={3}
        style={{
          background: 'rgb(250,250,250)',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          overflowY: 'auto',
        }}
      >
        <SearchPane />
      </Grid>
      <Grid item xs={9}>
        <div style={{ overflowY: 'auto', height: '100vh' }}>
          <TestTable />
        </div>
      </Grid>
    </Grid>
  );
};

export default Search;
