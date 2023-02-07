import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ImportChannel } from '../../components/import/importChannel';
import { ImportSelection } from '../../components/import/importSelection';
import { Grid } from '@mui/material';
import { ImportHistory } from '../../components/import/importHistory';
import { getAll, getImport } from '../../actions/testimonial';
import withWidth from '@material-ui/core/withWidth';
import toRenderProps from 'recompose/toRenderProps';

const ImportTest = () => {
  const location = useLocation();
  const [select, setSelect] = React.useState('text');
  const testimonials = useSelector((state) => state.testimonial.testimonial);
  const imports = useSelector((state) => state.testimonial.imports);
  const WithWidth = toRenderProps(withWidth());
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAll());
    dispatch(getImport());
    location.state ? setSelect(location.state) : setSelect('text');
  }, []);
  React.useEffect(() => {}, [select]);
  return (
    <WithWidth>
      {({ width }) =>
        width === 'lg' || width === 'xl' ? (
          <div
            style={{
              paddingTop: '1rem',
              background: 'rgb(250,250,250)',
              height: '100vh',
              display: 'flex',
            }}
          >
            <Grid
              item
              style={{
                background: 'rgb(250,250,250)',
                paddingLeft: '2rem',
                paddingRight: '2rem',
                minWidth: '20rem',
                height: '100%',
              }}
            >
              <ImportSelection setSelect={setSelect} select={select} />
            </Grid>
            <Grid item style={{ minWidth: '42rem', height: '100%' }}>
              <ImportChannel select={select} testimonials={testimonials} />
            </Grid>
            <Grid
              item
              style={{
                background: 'rgb(250,250,250)',
                paddingLeft: '2rem',
                paddingRight: '2rem',
                width: '100%',
                height: '100%',
                overflowY: 'scroll',
              }}
            >
              <ImportHistory imports={imports} />
            </Grid>
          </div>
        ) : (
          <div
            style={{
              paddingTop: '1rem',
              background: 'rgb(250,250,250)',
              height: '100vh',
              display: 'flex',
            }}
          >
            <Grid
              item
              style={{
                background: 'rgb(250,250,250)',
                paddingLeft: '2rem',
                paddingRight: '2rem',
                minWidth: '24rem',
                height: '100%',
              }}
            >
              <ImportSelection setSelect={setSelect} select={select} />
            </Grid>
            <Grid item style={{ maxWidth: '42rem', height: '100%' }}>
              <ImportChannel select={select} testimonials={testimonials} />
            </Grid>
          </div>
        )
      }
    </WithWidth>
  );
};

export default ImportTest;
