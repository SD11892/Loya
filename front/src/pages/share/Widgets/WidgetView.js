import * as React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../../actions/testimonial';
import { getByFormUrl } from '../../../actions/testimonialForm';
import WidgetCard from '../../../components/uielements/widgetCard';
import WidgetBubble from '../../../components/widgets/widgetBubble';
import { Card, Grid, Avatar, Rating } from '@mui/material';

export default function WidgetView() {
  const testimonials = useSelector((state) => state.testimonial.testimonial);
  const dispatch = useDispatch();
  const url = window.location.pathname.slice(-6);
  const projectId = window.location.pathname.slice(
    window.location.pathname.indexOf('-') + 1,
    -7
  );
  const userId = window.location.pathname.slice(
    11,
    window.location.pathname.indexOf('-')
  );

  const [theme, setTheme] = React.useState('');
  const [blColor, setBlColor] = React.useState('');
  const [bfColor, setBfColor] = React.useState('');
  const [fgColor, setFgColor] = React.useState('');
  const [bgColor, setBgColor] = React.useState('');
  const [txtColor, setTxtColor] = React.useState('');
  const [ratingColor, setRatingColor] = React.useState('');
  const [space, setSpace] = React.useState('');
  const [shadow, setShadow] = React.useState('');
  const [radius, setRadius] = React.useState('');
  const [checked, setChecked] = React.useState([]);
  const [itemList, setItemList] = React.useState([]);
  const [ifText, setIfText] = React.useState(0);

  React.useEffect(async () => {
    await localStorage.setItem('userId', userId);
    await localStorage.setItem('projectId', projectId);
    await dispatch(getAll());
    await getByFormUrl(url)
      .then((res) => {
        const result = res.data.data.data;
        console.log(result.shadow);
        setSpace(result.spacing);
        setShadow(result.shadow);
        setRadius(result.border);
        setBgColor(result.bgColor);
        setTxtColor(result.txtColor);
        setRatingColor(result.ratingColor);
        setTheme(result.theme);
        setBlColor(result.blColor);
        setBfColor(result.bfColor);
        setFgColor(result.fgColor);
        setChecked(result.checked.split(','));
        setIfText(result.public);
      })
      .catch((err) => {
        alert('Invalid Form');
      });
    await setItemList(testimonials);
  }, []);
  React.useEffect(() => {
    setItemList(testimonials);
  }, [testimonials]);
  React.useEffect(() => {}, [
    space,
    shadow,
    radius,
    ratingColor,
    txtColor,
    bgColor,
    fgColor,
    blColor,
    itemList,
    bfColor,
    theme,
    testimonials,
  ]);

  return (
    <div
      style={{
        width: '100%',
        height: 'min-content',
        background: 'transparent',
      }}
    >
      <div
        style={{
          float: 'grid',
          gridTemplateColumns: 'repeat(auto-fill,350px)',
          gap:
            space === 'small'
              ? '0.5rem'
              : space === 'medium'
              ? '1rem'
              : space === 'large'
              ? '1.5rem'
              : space === 'extra large'
              ? '2rem'
              : 'unset',
          padding: '2rem',
          display: 'grid',
          height: 'min-content',
        }}
      >
        {checked.map((row, index) => {
          if (checked[index] === 'true') {
            console.log('check=', checked);
            return testimonials[index] !== null &&
              theme === 1 &&
              (testimonials[index].status === 1 ||
                testimonials[index].status === ifText) ? (
              <WidgetCard
                bgColor={bgColor}
                txtColor={txtColor}
                radius={radius}
                shadow={shadow}
              >
                <Grid
                  container
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Grid
                    item
                    style={{
                      marginTop: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    {testimonials[index].data !== null ? (
                      <Avatar
                        style={{
                          borderRadius: '50%',
                          border: '1px solid #ddd',
                          borderColor: 'rgb(237, 243, 249)',
                          borderWidth: '4px',
                        }}
                        sx={{ width: 56, height: 56 }}
                      >
                        <img
                          src={`data:image/png;base64,${btoa(
                            String.fromCharCode(
                              ...new Uint8Array(testimonials[index].data.data)
                            )
                          )}`}
                          width={'60px'}
                        />
                      </Avatar>
                    ) : item.data === null && item.imageUrl !== '' ? (
                      <Avatar
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          border: '1px solid #ddd',
                          background: '#000',
                          color: '#fff',
                          fontSize: '0.8rem',
                        }}
                        alt={`Avatar n°${item + 1}`}
                      >
                        <img src={item.imageUrl} width="48px" height="48px" />
                      </Avatar>
                    ) : (
                      <Avatar
                        style={{
                          borderRadius: '50%',
                          border: '1px solid #ddd',
                          borderColor: 'rgb(237, 243, 249)',
                          borderWidth: '4px',
                        }}
                        sx={{ width: 56, height: 56 }}
                      >
                        <img src={`../../../../../user.png`} width={'60px'} />
                      </Avatar>
                    )}

                    <div>
                      <div>{testimonials[index].value.split(',')[0]}</div>
                      <div>
                        {testimonials[index].key.indexOf('Headline') !== -1
                          ? testimonials[index].value.split(',')[
                              testimonials[index].key
                                .split(',')
                                .indexOf('Headline')
                            ]
                          : null}
                      </div>
                    </div>
                  </Grid>
                  <Grid item style={{ marginTop: '0.5rem' }}>
                    <Rating
                      readOnly
                      value={testimonials[index].rating}
                      style={{
                        color: ratingColor,
                      }}
                    />
                  </Grid>
                  <Grid item style={{ marginTop: '0.5rem' }}>
                    {testimonials[index].content}
                  </Grid>
                  <Grid item style={{ marginTop: '0.5rem' }}>
                    {moment(testimonials[index].date).format('ll')}
                  </Grid>
                </Grid>
              </WidgetCard>
            ) : testimonials[index] !== null && theme === 2 ? (
              <WidgetBubble
                fgColor={fgColor}
                bgColor={bgColor}
                ratingColor={ratingColor}
                content={testimonials[index].content}
                rating={testimonials[index].rating}
                bfColor={bfColor}
                blColor={blColor}
                name={testimonials[index].value.split(',')[0]}
                txtColor={txtColor}
                headline={
                  testimonials[index].key.indexOf('Headline') !== -1
                    ? testimonials[index].value.split(',')[
                        testimonials[index].key.split(',').indexOf('Headline')
                      ]
                    : null
                }
                data={
                  testimonials[index].data !== null
                    ? testimonials[index].data.data
                    : null
                }
              />
            ) : null;
          }
        })}
      </div>
    </div>
  );
}
