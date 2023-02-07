import {
  List,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  Avatar,
  ListItemText,
  Rating,
} from '@mui/material';
import * as React from 'react';
import PageTitle from '../uielements/pageTitle';
import { ReactSVG } from 'react-svg';
import Description from '../../components/uielements/description';
import moment from 'moment';
import { isEmpty } from '../../util/isEmpty';
import VideoImageThumbnail from 'react-video-thumbnail-image';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import AWS from 'aws-sdk';
import ReactPlayer from 'react-player';

const SESConfig = {
  accessKeyId: process.env.REACT_APP_ACCESS,
  secretAccessKey: process.env.REACT_APP_SECRET,
  region: process.env.REACT_APP_REGION,
};

AWS.config.update(SESConfig);

const s3 = new AWS.S3({
  params: {
    Bucket: 'loya-bucket',
  },
  region: process.env.REACT_APP_REGION,
});
export const ImportHistory = (props) => {
  return (
    <div
      style={{
        overflowY: 'auto',
      }}
    >
      <Grid container pt={'1rem'}>
        <Grid item xs={12} style={{ marginBottom: '1rem' }}>
          <PageTitle>Import History</PageTitle>
        </Grid>
        {isEmpty(props.imports) ? (
          <Grid
            container
            style={{ paddingTop: '1rem', borderTop: '1px solid #ddd' }}
          >
            <Grid item xs={2}>
              <ReactSVG src="history.svg" style={{ color: '#000' }} />
            </Grid>
            <Grid item xs={10}>
              <Description style={{ fontWeight: 'bold' }}>
                No testimonials imported yet.
              </Description>
              <Description style={{ fontSize: '1rem' }}>
                Pick a testimonial source from the sidebar to get started.
              </Description>
            </Grid>
          </Grid>
        ) : (
          <List
            dense
            sx={{
              width: '100%',
              background: 'transparent',
            }}
          >
            {props.imports.map((row) => {
              return (
                <ListItem
                  key={row.id}
                  style={{
                    marginTop: '1rem',
                    borderTop: '1px solid #ddd',
                    width: '100%',
                  }}
                >
                  <ListItemButton style={{ flexDirection: 'column' }}>
                    <div
                      style={{
                        justifyContent: 'space-between',
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          width: '100%',
                        }}
                      >
                        <ListItemAvatar>
                          {row.data !== null ? (
                            <Avatar
                              style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                border: '1px solid #ddd',
                              }}
                              alt={`Avatar n°${row + 1}`}
                              src={`data:image/png;base64,${btoa(
                                String.fromCharCode(
                                  ...new Uint8Array(row.data.data)
                                )
                              )}`}
                            />
                          ) : row.data === null && row.imageUrl !== '' ? (
                            <Avatar
                              style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                border: '1px solid #ddd',
                                background: '#000',
                                color: '#fff',
                                fontSize: '0.8rem',
                              }}
                              alt={`Avatar n°${row + 1}`}
                            >
                              <img
                                src={row.imageUrl}
                                width="24px"
                                height="24px"
                              />
                            </Avatar>
                          ) : (
                            <Avatar
                              style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                border: '1px solid #ddd',
                                background: '#000',
                                color: '#fff',
                                fontSize: '0.8rem',
                              }}
                              alt={`Avatar n°${row + 1}`}
                            >
                              UN
                            </Avatar>
                          )}
                        </ListItemAvatar>
                        <ListItemText style={{ letterSpacing: '1px' }}>
                          <div
                            style={{ fontSize: '0.8rem', fontWeight: '500' }}
                          >
                            {row.value.split(',')[0]}
                          </div>
                          <div
                            style={{ fontSize: '0.8rem', fontWeight: '200' }}
                          >
                            {row.value.split(',')[1]}
                          </div>
                        </ListItemText>
                      </div>
                      <div style={{ fontSize: '16px', color: '#333' }}>
                        {row.importDate !== ''
                          ? row.importDate
                          : moment(row.updatedAt).format('ll')}
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                      }}
                    >
                      {row.video ? (
                        <LazyLoadComponent>
                          <ReactPlayer
                            className="react-player"
                            url={s3.getSignedUrl('getObject', {
                              Bucket: 'loya-bucket',
                              Key: row.video,
                            })}
                            alt="my test video"
                            controls={true}
                            height="10rem"
                            width="10rem"
                          />
                        </LazyLoadComponent>
                      ) : null}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                      }}
                    >
                      <div>{row.content}</div>
                      <div>
                        <Rating value={row.rating} readOnly />
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        )}
      </Grid>
    </div>
  );
};
