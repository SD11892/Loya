import React, { useEffect } from 'react';

import { useRecordWebcam, CAMERA_STATUS } from 'react-record-webcam';
import AWS from 'aws-sdk';
import { Grid } from '@mui/material';

import { TextWhite as TextWhiteIcon } from '../../../icons/textWhite';
import { Sound as SoundIcon } from '../../../icons/sound';
import { Camera as CameraIcon } from '../../../icons/camera';

import RecordButton from '../../uielements/buttons/recordButton';
import NoteButton from '../../uielements/buttons/noteButton';
import RecordStopButton from '../buttons/recordStopButton';
import DefaultButton from '../buttons/defaultButton';

import testimonialService from '../../../services/testimonial.service';

const OPTIONS = {
  filename: 'test-filename',
  fileType: 'mp4',
  width: 1920,
  height: 1080,
};

window.Buffer = window.Buffer || require('buffer').Buffer;

export default function VideoRecorder(props) {
  console.log(process.env);

  const SESConfig = {
    accessKeyId: process.env.REACT_APP_ACCESS,
    secretAccessKey: process.env.REACT_APP_SECRET,
    region: process.env.REACT_APP_REGION,
  };

  AWS.config.update(SESConfig);

  var s3 = new AWS.S3({
    params: {
      Bucket: 'loya-bucket',
    },
    region: process.env.REACT_APP_REGION,
  });

  const recordWebcam = useRecordWebcam(OPTIONS);
  const getRecordingFileHooks = async () => {
    const file = await recordWebcam.getRecording();
    const fileName = Date.now() + '-loya.mp4';
    console.log({ file });

    // testimonialService
    //   .uploadVideo(
    //     { url: window.location.href.slice(-6), name: fileName },
    //     file
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   });

    s3.putObject(
      {
        Key: fileName,
        Body: file,
        ContentType: 'video/mp4',
        ACL: 'public-read',
        Bucket: 'loya-bucket',
        ServerSideEncryption: 'AES256',
      },
      (err) => {
        console.log(err);
        if (err) {
          // On Error
        } else {
          // On Success
        }
      }
    );

    props.onClick(fileName);
  };

  useEffect(() => {
    recordWebcam.open();
  }, []);

  return (
    <>
      <Grid
        container
        style={{
          backgroundColor: 'black',
          borderRadius: '1rem',
        }}
      >
        <Grid
          container
          style={{
            borderRadius: '1rem',
          }}
        >
          <div>
            <p>Camera status: {recordWebcam.status}</p>

            <video
              ref={recordWebcam.webcamRef}
              style={{
                width: '100%',
                display: `${
                  recordWebcam.status === CAMERA_STATUS.OPEN ||
                  recordWebcam.status === CAMERA_STATUS.RECORDING
                    ? 'block'
                    : 'none'
                }`,
              }}
              autoPlay
              muted
            />
            <video
              ref={recordWebcam.previewRef}
              style={{
                width: '100%',
                display: `${
                  recordWebcam.status === CAMERA_STATUS.PREVIEW
                    ? 'block'
                    : 'none'
                }`,
              }}
              controls
            />
          </div>
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
            <RecordButton
              style={{
                display: `${
                  recordWebcam.status === CAMERA_STATUS.CLOSED ||
                  recordWebcam.status === CAMERA_STATUS.RECORDING ||
                  recordWebcam.status === CAMERA_STATUS.PREVIEW
                    ? 'none'
                    : 'block'
                }`,
              }}
              onClick={recordWebcam.start}
            ></RecordButton>
            <RecordStopButton
              style={{
                display: `${
                  recordWebcam.status !== CAMERA_STATUS.RECORDING
                    ? 'none'
                    : 'block'
                }`,
              }}
              onClick={recordWebcam.stop}
            ></RecordStopButton>
          </Grid>
          <Grid item>
            <NoteButton>
              <TextWhiteIcon />
            </NoteButton>
            <SoundIcon />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          marginBottom: '0.5rem',
          display:
            recordWebcam.status === CAMERA_STATUS.PREVIEW ? 'flex' : 'none',
        }}
      >
        <DefaultButton onClick={getRecordingFileHooks} primary={props.priColor}>
          <CameraIcon />
          Submit
        </DefaultButton>
      </Grid>
    </>
  );
}
