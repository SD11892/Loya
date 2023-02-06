import React from 'react';

import { Grid } from '@mui/material';

import { TextWhite as TextWhiteIcon } from '../../icons/textWhite';
import { Sound as SoundIcon } from '../../icons/sound';

import RecordButton from '../uielements/buttons/recordButton';
import NoteButton from '../uielements/buttons/noteButton';

const VideoReview = () => {
  return (
    <Grid
      container
      style={{
        backgroundColor: 'black',
        borderRadius: '1rem',
        color: 'white',
      }}
    >
      <Grid
        container
        style={{
          borderRadius: '1rem',
        }}
      >
        <img
          src={'/aspect.png'}
          style={{ borderRadius: '1rem' }}
          width={'100%'}
        />
      </Grid>
      <Grid
        container
        style={{
          color: 'rgb(255 255 255)',
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          justifyContent: 'space-between',
        }}
      >
        <Grid
          item
          style={{
            opacity: '0.9',
            fontWeight: '500',
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
          }}
        >
          00:00
        </Grid>
        <Grid item>
          <RecordButton></RecordButton>
        </Grid>
        <Grid item>
          <NoteButton>
            <TextWhiteIcon />
          </NoteButton>
          <SoundIcon />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VideoReview;
