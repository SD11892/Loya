import React, { useEffect } from 'react';

import {
  RecordWebcam,
  useRecordWebcam,
  CAMERA_STATUS,
} from 'react-record-webcam';
// import { default as ReactVideoRecorder } from 'react-video-recorder';
// import S3 from 'react-aws-s3';
import AWS from 'aws-sdk';
import { uploadFile } from 'react-s3';
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

// window.Buffer = window.Buffer || require('buffer').Buffer;

const SESConfig = {
  accessKeyId: process.env.REACT_APP_ACCESS,
  secretAccessKey: process.env.REACT_APP_SECRET,
};

const config = {
  bucketName: process.env.REACT_APP_BUCKET_NAME,
  region: process.env.REACT_APP_REGION,
  accessKeyId: process.env.REACT_APP_ACCESS,
  secretAccessKey: process.env.REACT_APP_SECRET,
};

AWS.config.update(SESConfig);

AWS.config.update({
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:246744e6-804e-4715-81c1-df7f63ad969a',
  }),
});

// AWS.config.apiVersions = {
//   s3: '2012-10-17',
// };

var s3 = new AWS.S3({
  params: {
    Bucket: 'loya-bucket',
  },
  region: process.env.REACT_APP_REGION,
});

export default function VideoRecorder(props) {
  const recordWebcam = useRecordWebcam(OPTIONS);
  const getRecordingFileHooks = async () => {
    const file = await recordWebcam.getRecording();
    console.log({ file });

    // setVisible(5);
    // const file = await recordWebcam.getRecording();

    testimonialService
      .uploadVideo({ url: window.location.href.slice(-6), name: '' }, file)
      .then((res) => {
        console.log(res);
      });

    s3.putObject(
      {
        Key: 'video.mp4',
        Body: file,
        ContentType: 'video/mp4',
        ACL: 'public-read',
        Bucket: 'loya-bucket',
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

    uploadFile(file, config)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));

    props.onClick();

    // const ReactS3Bucket = new S3(config);
    // https://loya-bucket.eu-west-1.amazonaws.com/video.mp4

    // ReactS3Bucket.uploadFile(file, file.name)
    //   .then((data) => console.log(data.location))
    //   .catch((err) => console.error(err));
  };

  const getRecordingFileRenderProp = async (blob) => {
    console.log({ blob });
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
          {/* <ReactVideoRecorder
          onRecordingComplete={(videoBlob) => {
            // Do something with the video...
            console.log('videoBlob', videoBlob);
          }}
        /> */}
          <div>
            <p>Camera status: {recordWebcam.status}</p>
            {/* <div>
            <button
              disabled={
                recordWebcam.status === CAMERA_STATUS.OPEN ||
                recordWebcam.status === CAMERA_STATUS.RECORDING ||
                recordWebcam.status === CAMERA_STATUS.PREVIEW
              }
              onClick={recordWebcam.open}
            >
              Open camera
            </button>
            <button
              disabled={
                recordWebcam.status === CAMERA_STATUS.CLOSED ||
                recordWebcam.status === CAMERA_STATUS.PREVIEW
              }
              onClick={recordWebcam.close}
            >
              Close camera
            </button>
            <button
              disabled={
                recordWebcam.status === CAMERA_STATUS.CLOSED ||
                recordWebcam.status === CAMERA_STATUS.RECORDING ||
                recordWebcam.status === CAMERA_STATUS.PREVIEW
              }
              onClick={recordWebcam.start}
            >
              Start recording
            </button>
            <button
              disabled={recordWebcam.status !== CAMERA_STATUS.RECORDING}
              onClick={recordWebcam.stop}
            >
              Stop recording
            </button>
            <button
              disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
              onClick={recordWebcam.retake}
            >
              Retake
            </button>
            <button
              disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
              onClick={recordWebcam.download}
            >
              Download
            </button>
            <button
              disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
              onClick={getRecordingFileHooks}
            >
              Get recording
            </button>
          </div> */}

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
        <DefaultButton
          onClick={getRecordingFileHooks}
          // onClick={async () => {
          //   // setVisible(5);
          //   const file = await recordWebcam.getRecording();

          //   testimonialService.uploadVideo(
          //     { url: window.location.href.slice(-6), name: '' },
          //     file
          //   );
          //   const ReactS3Bucket = new S3(config);

          //   ReactS3Bucket.uploadFile(file, file.name)
          //     .then((data) => console.log(data.location))
          //     .catch((err) => console.error(err));
          // }}
          primary={props.priColor}
        >
          <CameraIcon />
          Submit
        </DefaultButton>
      </Grid>
    </>
  );
}
