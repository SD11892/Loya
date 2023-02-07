import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Grid, Avatar, Rating } from '@mui/material';
import moment from 'moment';
import DefaultButton from '../uielements/buttons/defaultButton';
import LinkButton from '../uielements/buttons/linkButton';
// import { Heart as HeartIcon } from '../../icons/heart';
import { Bright as BrightIcon } from '../../icons/bright';
import PageTitle from '../uielements/pageTitle';
import { Link } from 'react-router-dom';
import { isEmpty } from '../../util/isEmpty';

const Site = ({
  testimonials,
  keys,
  values,
  pTitle,
  subTitle,
  ctaTitle,
  ctaUrl,
  checked,
}) => {
  const navigate = useNavigate();
  const color = [
    '#e8a189',
    '#eb98c0',
    '#80dae0',
    '#f5c187',
    '#76c0e3',
    '#80dae0',
  ];
  React.useEffect(() => {}, [keys, values]);
  return (
    <div style={{ height: '100%' }}>
      <div
        style={{
          rotate: '12deg',
          position: 'absolute',
          right: '-120px',
          top: '-180px',
        }}
      >
        <BrightIcon width={100} height={100} />
      </div>
      <div
        style={{
          display: 'flex',
          padding: '1rem 2rem',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        {/* <HeartIcon /> */}
        <PageTitle style={{ fontSize: '28.8px' }}>Loya</PageTitle>
        {keys.map((row, index) => {
          return <Link to={values[index]}>{row}</Link>;
        })}
      </div>
      <div
        style={{
          paddingTop: '6rem',
          paddingLeft: '2rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ fontSize: '3rem', color: '#000' }}>{pTitle}</div>
        <h3 style={{ color: '#333' }}>{subTitle}</h3>
      </div>
      <div
        style={{
          paddingLeft: '2rem',
          paddingBottom: '6rem',
          display: 'flex',
          borderBottom: '1px solid rgb(212 212 216)',
        }}
      >
        <LinkButton
          style={{ background: '#000', color: 'white', borderRadius: 'unset' }}
          onClick={() => {
            window.location.replace(`${ctaUrl}`);
          }}
        >
          {ctaTitle}
        </LinkButton>
      </div>
      <div
        style={{
          gridTemplateColumns: 'repeat(auto-fill,350px)',
          display: 'grid',
          gap: '1rem',
          padding: '1rem',
          justifyContent: 'center',
        }}
      >
        {testimonials.map((row, index) => {
          if (!isEmpty(checked) && !isEmpty(testimonials)) {
            if (checked[index] === 'true') {
              return (
                <Card
                  style={{
                    width: '20rem',
                    padding: '1rem',
                    height: 'min-content',
                    background: color[index % 6],
                    color: '#374151',
                    borderRadius: 'unset',
                    boxShadow: '0 1px 2px 0 rgb(0, 0, 0 / 0.05)',
                  }}
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
                      {row.data !== null ? (
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
                                ...new Uint8Array(row.data.data)
                              )
                            )}`}
                            width={'60px'}
                          />
                        </Avatar>
                      ) : row.data === null && row.imageUrl !== '' ? (
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
                          alt={`Avatar n°${row + 1}`}
                        >
                          <img src={row.imageUrl} width="48px" height="48px" />
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
                          <img src={`../../user.png`} width={'60px'} />
                        </Avatar>
                      )}

                      <div>
                        <div>{row.value.split(',')[0]}</div>
                        <div>
                          {row.key.indexOf('Headline') !== -1
                            ? row.value.split(',')[
                                row.key.split(',').indexOf('Headline')
                              ]
                            : null}
                        </div>
                      </div>
                    </Grid>
                    <Grid item style={{ marginTop: '0.5rem' }}>
                      <Rating
                        readOnly
                        value={row.rating}
                        style={{
                          color: '#fbbf24',
                        }}
                      />
                    </Grid>
                    <Grid item style={{ marginTop: '0.5rem' }}>
                      {row.content}
                    </Grid>
                    <Grid item style={{ marginTop: '0.5rem' }}>
                      {moment(row.date).format('ll')}
                    </Grid>
                  </Grid>
                </Card>
              );
            }
          }
        })}
      </div>
    </div>
  );
};

export default Site;
