import * as React from 'react';
import Site from '../../components/wall/Site';
import Sitetwo from '../../components/wall/Sitetwo';
import { getAll } from '../../actions/testimonial';
import { useDispatch, useSelector } from 'react-redux';
import { getByWallUrl, saveWall } from '../../actions/wall';
import BackwardButton from '../../components/uielements/buttons/backwardButton';
import { Grid, IconButton, Input } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from '../../util/isEmpty';

const WallView = () => {
  const testimonials = useSelector((state) => state.testimonial.testimonial);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = React.useState('');
  const [theme, setTheme] = React.useState(0);
  const [pColor, setPColor] = React.useState('');
  const [key, setKey] = React.useState([]);
  const [value, setValue] = React.useState([]);
  const [pTitle, setPTitle] = React.useState('');
  const [subTitle, setSubTitle] = React.useState('');
  const [ctaTitle, setCtaTitle] = React.useState('');
  const [ctaUrl, setCtaUrl] = React.useState('');
  const [checked, setChecked] = React.useState([]);
  const [data, setData] = React.useState(null);
  const [array, setArray] = React.useState([]);
  const [fileName, setFileName] = React.useState('');
  const [type, setType] = React.useState('');

  const url = window.location.pathname.slice(-6);
  const userId = window.location.pathname.slice(
    9,
    window.location.pathname.indexOf('-')
  );
  const projectId = window.location.pathname.slice(
    window.location.pathname.indexOf('-') + 1,
    window.location.pathname.indexOf('t') - 1
  );

  localStorage.setItem('userId', userId);
  localStorage.setItem('projectId', projectId);
  React.useEffect(() => {
    getByWallUrl(url)
      .then((res) => {
        const result = res.data.data.data;
        setName(result.name);
        setTheme(result.theme);
        setPColor(result.pColor);
        setPTitle(result.pTitle);
        setSubTitle(result.subTitle);
        setCtaTitle(result.ctaTitle);
        setCtaUrl(result.ctaUrl);
        setData(result.data);
        setFileName(result.fileName);
        setType(result.type);
        setKey(result.key.split(','));
        setValue(result.value.split(','));
        if (isEmpty(result.checked)) {
          setChecked(result.checked);
        } else {
          setChecked(result.checked.split(','));
        }
      })
      .catch((err) => {
        alert('Invalid Form');
      });
    dispatch(getAll()).then(async (res) => {
      console.log('result===========', res.data.testimonials);
      let test = res.data.testimonials;
      let temp = [];
      await test.map((row) => {
        temp.push(row);
      });
      console.log('temp===========', temp);
      setArray([...temp]);
    });
  }, []);

  React.useEffect(() => {}, [theme, pColor, key, value, array]);

  return (
    <Grid container justifyContent="space-between">
      <Grid
        item
        style={{
          width: '100%',
          height: '100vh',
          overflowY: 'scroll',
          overflowX: 'unset',
          background: theme === 1 ? 'unset' : ' rgb(240, 237, 230)',
        }}
      >
        {theme === 1 && !isEmpty(array) ? (
          <Site
            testimonials={array}
            pColor={pColor}
            keys={key}
            values={value}
            pTitle={pTitle}
            subTitle={subTitle}
            ctaTitle={ctaTitle}
            ctaUrl={ctaUrl}
            checked={checked}
          />
        ) : theme === 2 && !isEmpty(array) ? (
          <Sitetwo
            testimonials={array}
            keys={key}
            values={value}
            pTitle={pTitle}
            subTitle={subTitle}
            ctaTitle={ctaTitle}
            ctaUrl={ctaUrl}
            checked={checked}
          />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default WallView;
