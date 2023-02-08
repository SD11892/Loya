import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
  Grid,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Paper,
  Avatar,
  Drawer,
  Tooltip,
  ToggleButton,
  ToggleButtonGroup,
  Rating,
  Card,
  ButtonGroup,
  Button,
  ButtonBase,
  TextField,
} from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import VideoImageThumbnail from 'react-video-thumbnail-image';
import AWS from 'aws-sdk';
import Input from '../uielements/form/FormInput';
import DefaultButton from '../uielements/buttons/defaultButton';

import { Pencil as PencilIcon } from '../../icons/pencil';
import { Delete as DeleteIcon } from '../../icons/delete';
import { Image as ImageIcon } from '../../icons/image';
import { Close as CloseIcon } from '../../icons/close';
import { Thanknote as ThanknoteIcon } from '../../icons/thanknote';

import UploadButton from '../uielements/buttons/uploadButton';
import StatusButton from '../../components/uielements/buttons/statusButton';
import EmbedButton from '../../components/uielements/buttons/embedButton';
import { Embed } from '../../icons/embed';

import {
  updateTestimonial,
  deleteTestimonial,
} from '../../actions/testimonial';
import { createForm } from '../../actions/testimonialForm';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAll } from '../../actions/testimonial';
import PageTitle from '../uielements/pageTitle';
import FormLabel from '../uielements/form/FormLabel';
import FormGrid from '../uielements/form/FormGrid';
import ReactPlayer from 'react-player';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const TestTable = ({ testimonials, limit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const upgrade = localStorage.getItem('upgrade');
  const [status, setStatus] = useState(0);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [id, setId] = useState(0);
  const [key, setKey] = useState([]);
  const [value, setValue] = useState([]);
  const [drawerState, setDrawerState] = useState(false);
  const [editState, setEditState] = useState(false);
  const [avatarState, setAvatarState] = useState('');
  const [contentState, setContentState] = useState('');
  const [url, setUrl] = useState('');
  const [date, setDate] = useState('');
  const [rateState, setRateState] = useState(null);
  const [video, setVideo] = useState(null);
  const [videoURL, setVideoURL] = useState('');
  const hiddenFileInput = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  const privateStyle = { background: '#F59E0B33', color: '#D97706 ' };
  const publicStyle = { background: '#10B98133', color: '#059689' };

  const inf = {
    id: 0,
    status: 0,
    key: [],
    content: '',
    name: '',
    rating: 0,
    type: '',
    updatedAt: '',
    url: '',
    value: [],
  };

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

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handleClose = () => {
    setEditState(false);
  };

  useEffect(() => {}, [
    key,
    value,
    status,
    avatarState,
    editState,
    selectedImage,
    limit,
  ]);
  useEffect(() => {
    // dispatch(getAll()).then((res) => {
    //  if (upgrade === 'free') {
    //     setLimit(10);
    //   } else {
    //     setLimit(res.data.testimonials.length);
    //   }
    // });
  }, []);

  return (
    <div>
      <TableContainer style={{ boxShadow: 'unset' }} component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  padding: '0.875rem 1rem 0.5rem',
                  textAlign: 'left',
                  fontSize: '0.75rem',
                  fontWeight: '400',
                  color: 'rgb(107,114,128)',
                }}
              >
                Person
              </TableCell>
              <TableCell
                style={{
                  padding: '0.875rem 1rem 0.5rem',
                  textAlign: 'left',
                  fontSize: '0.75rem',
                  fontWeight: '400',
                  color: 'rgb(107,114,128)',
                }}
                align="left"
              >
                Testimonials
              </TableCell>
              <TableCell
                style={{
                  padding: '0.875rem 1rem 0.5rem',
                  textAlign: 'left',
                  fontSize: '0.75rem',
                  fontWeight: '400',
                  color: 'rgb(107,114,128)',
                }}
                align="left"
              >
                Date
              </TableCell>
              <TableCell
                style={{
                  padding: '0.875rem 1rem 0.5rem',
                  textAlign: 'left',
                  fontSize: '0.75rem',
                  fontWeight: '400',
                  color: 'rgb(107,114,128)',
                }}
                align="left"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testimonials.slice(0, limit).map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  '&:last-child td, &:last-child th': {
                    border: 0,
                    verticalAlign: 'top',
                  },
                }}
                onClick={(e) => {
                  if (row.data !== null) {
                    setAvatarState(
                      `data:image/png;base64,${btoa(
                        String.fromCharCode(...new Uint8Array(row.data.data))
                      )}`
                    );
                    setId(row.id);
                    setStatus(Number(row.status));
                    setKey(row.key.split(','));
                    setValue(row.value.split(','));
                    setUrl(row.url);
                    setContentState(row.content);
                    setRateState(row.rating);
                    setDrawerState(true);
                    setDate(row.date);
                    setName(`Widget for ${row.value[0]}`);
                    setVideo(row.video);
                  } else {
                    setId(row.id);
                    setName(`Widget for ${row.value[0]}`);
                    setAvatarState('');
                    setStatus(Number(row.status));
                    setKey(row.key.split(','));
                    setValue(row.value.split(','));
                    setUrl(row.url);
                    setContentState(row.content);
                    setRateState(row.rating);
                    setDrawerState(true);
                    setDate(row.date);
                    setVideo(row.video);
                  }
                  var params = { Bucket: 'loya-bucket', Key: video };
                  var url = s3.getSignedUrl('getObject', params);
                  console.log('The URL is', url);
                  setVideoURL(url);
                }}
              >
                <TableCell
                  style={{
                    padding: '1rem',
                    fontSize: '0.8rem',
                    lineHeight: '1.25rem',
                    color: 'rgb(107,114,128)',
                  }}
                  component="th"
                  scope="row"
                >
                  <Grid container spacing={2} style={{ gap: '0.5rem' }}>
                    <Grid item>
                      {row.data !== null ? (
                        <Avatar
                          style={{
                            width: '48px',
                            height: '48px',
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
                          }}
                        >
                          {row.value[0].slice(0, 2)}
                        </Avatar>
                      )}
                    </Grid>
                    <Grid
                      item
                      style={{
                        overFlow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        color: '#000',
                      }}
                    >
                      <div>{row.value.split(',').slice(0, 1)}</div>
                      <div>
                        {row.key.split(',').indexOf('Headline') ===
                        -1 ? null : (
                          <span>
                            {
                              row.value.split(',')[
                                row.key.split(',').indexOf('Headline')
                              ]
                            }
                          </span>
                        )}
                      </div>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell
                  tyle={{
                    padding: '1rem',
                    fontSize: '0.8rem',
                    lineHeight: '1.25rem',
                  }}
                  align="left"
                >
                  {row.video ? (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '2rem',
                      }}
                    >
                      <ReactPlayer
                        className="react-player"
                        url={s3.getSignedUrl('getObject', {
                          Bucket: 'loya-bucket',
                          Key: row.video,
                        })}
                      />
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div
                          style={{
                            color: 'rgb(107,114,128)',
                            maxWidth: '28rem',
                          }}
                        >
                          {row.rating === null || row.rating === 0 ? null : (
                            <div>
                              <Rating
                                value={row.rating}
                                readOnly
                                style={{ fontSize: '1.5rem' }}
                              />
                            </div>
                          )}
                        </div>
                        <div
                          style={{
                            color: 'rgb(107,114,128)',
                            maxWidth: '28rem',
                          }}
                        >
                          {row.content}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div
                        style={{ color: 'rgb(107,114,128)', maxWidth: '28rem' }}
                      >
                        {row.rating === null || row.rating === 0 ? null : (
                          <div>
                            <Rating
                              value={row.rating}
                              readOnly
                              style={{ fontSize: '1.5rem' }}
                            />
                          </div>
                        )}
                      </div>
                      <div
                        style={{ color: 'rgb(107,114,128)', maxWidth: '28rem' }}
                      >
                        {row.content}
                      </div>
                    </div>
                  )}
                </TableCell>
                <TableCell
                  style={{
                    padding: '1rem',
                    fontSize: '0.8rem',
                    lineHeight: '1.25rem',
                    verticalAlign: 'top',
                  }}
                  align="left"
                >
                  <div style={{ color: 'rgb(17,24,39)' }}>
                    {moment(row.updatedAt).format('LL')}
                  </div>
                </TableCell>
                <TableCell
                  tyle={{
                    padding: '1rem',
                    fontSize: '0.8rem',
                    lineHeight: '1.25rem',
                    color: 'rgb(107,114,128)',
                    verticalAlign: 'top',
                  }}
                  align="left"
                >
                  <StatusButton
                    style={
                      row.status === '1'
                        ? { ...publicStyle }
                        : { ...privateStyle }
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      inf.id = row.id;
                      inf.status = 1 - Number(row.status);
                      inf.key = row.key;
                      inf.content = row.content;
                      inf.name = row.name;
                      inf.rating = row.rating;
                      inf.type = row.type;
                      inf.updatedAt = row.updatedAt;
                      inf.url = row.url;
                      inf.value = row.value;
                      updateTestimonial(inf, selectedImage).then(() => {
                        dispatch(getAll());
                      });
                    }}
                  >
                    {row.status === '1' ? 'public' : 'private'}
                  </StatusButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Drawer
        anchor="right"
        open={drawerState}
        key="drawer2"
        onClose={() => {
          setDrawerState(false);
        }}
      >
        <div style={{ display: editState === true ? 'none' : 'block' }}>
          <Grid
            container
            spacing={1}
            style={{
              padding: '1rem',
              width: '512px',
              height: '140px',
              backgroundColor: '#EDF3F9',
            }}
          >
            <Grid item xs={7.75}></Grid>
            <Grid item xs={2.25} style={{ gap: '0.5rem' }}>
              <Tooltip
                title={
                  <p style={{ fontSize: '0.85rem' }}>
                    Published reviews will show up on your widgets & wall of
                    love.
                  </p>
                }
                arrow
              >
                <Button
                  variant="outlined"
                  style={{
                    color: status === 1 ? '#059689' : '#D97706',
                    textTransform: 'unset',
                    fontSize: '1rem',
                  }}
                  onClick={(e) => {
                    inf.id = id;
                    inf.status = 1 - status;
                    inf.key = key;
                    inf.content = contentState;
                    inf.name = name;
                    inf.rating = rateState;
                    inf.type = type;
                    inf.updatedAt = date;
                    inf.url = url;
                    inf.value = value;
                    updateTestimonial(inf, selectedImage).then(() => {
                      setStatus(1 - status);
                      dispatch(getAll());
                      console.log('Status changed');
                    });
                  }}
                >
                  {status === 1 ? 'public' : 'private'}
                </Button>
              </Tooltip>
            </Grid>
            <Grid item xs={2}>
              <ToggleButtonGroup size="small" aria-label="Small sizes">
                <ToggleButton
                  value="pencil"
                  key="pencil"
                  onClick={() => {
                    setEditState(true);
                  }}
                >
                  <PencilIcon />
                </ToggleButton>
                <ToggleButton
                  value="delete"
                  key="delete"
                  onClick={() => {
                    console.log('here');
                    deleteTestimonial(id).then(() => {
                      setDrawerState(false);
                      dispatch(getAll());
                    });
                  }}
                >
                  <DeleteIcon fill="white" stroke="red" />
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
          <div
            style={{
              paddingLeft: '2rem',
              position: 'relative',
              top: '-1.75rem',
            }}
          >
            {selectedImage !== null ? (
              <Avatar
                style={{
                  borderRadius: '50%',
                  border: '1px solid #ddd',
                }}
              >
                <img
                  src={URL.createObjectURL(selectedImage)}
                  width={'48px'}
                  alt="not found"
                />
              </Avatar>
            ) : selectedImage === null && avatarState !== '' ? (
              <Avatar
                style={{
                  borderRadius: '50%',
                  border: '1px solid #ddd',
                  borderColor: 'rgb(237, 243, 249)',
                  borderWidth: '4px',
                }}
                sx={{ width: 56, height: 56 }}
              >
                <img src={avatarState} width={'60px'} />
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
                {value[0] === undefined ? null : value[0].slice(0, 2)}
              </Avatar>
            )}
          </div>
          <div style={{ paddingLeft: '2rem' }}>
            <p style={{ fontSize: '1.2rem' }}>
              <b>{value[0]}</b>
            </p>
            <p style={{ whiteSpace: 'normal', maxWidth: '28rem' }}>
              {contentState}
            </p>
            {rateState ? (
              <Rating
                name="read-only"
                value={rateState}
                style={{ fontSize: '2rem' }}
                readOnly
              />
            ) : (
              <></>
            )}
            {video ? (
              <ReactPlayer
                className="react-player-big"
                url={s3.getSignedUrl('getObject', {
                  Bucket: 'loya-bucket',
                  Key: video,
                })}
                controls={true}
              />
            ) : (
              <></>
            )}
            <div
              style={{
                marginRight: '2rem',
                borderRadius: '0.5rem',
                backgroundColor: '#EDF3F9',
                padding: '1rem',
              }}
            >
              {key.map((val) =>
                val !== 'Your Name' ? (
                  <p>
                    {val}:{value[key.indexOf(val)]}
                  </p>
                ) : null
              )}
              <p></p>
              <p>Date:{moment(date).format('LL')}</p>
            </div>

            <br />
            <EmbedButton
              variant="contained"
              onClick={() => {
                createForm(name, id).then((result) => {
                  localStorage.setItem('widgetUrl', result.data.data.url);
                  localStorage.setItem('testimonialId', id);
                  navigate('/only_one_widget');
                });
              }}
            >
              <Embed />
              Embed on your website
            </EmbedButton>
          </div>
        </div>
        <div style={{ display: editState === true ? 'block' : 'none' }}>
          <Grid
            container
            spacing={1}
            style={{
              padding: '1rem',
              width: '512px',
              height: '140px',
              marginLeft: 'unset',
              backgroundColor: '#EDF3F9',
            }}
          >
            <Grid item>
              <Button
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: '#444',
                }}
                style={{ justifyContent: 'flex-end', minWidth: 'unset' }}
              >
                <CloseIcon />
              </Button>
            </Grid>
            <Grid item style={{ display: 'flex', alignSelf: 'flex-end' }}>
              <PageTitle>Edit Testimonial</PageTitle>
            </Grid>
          </Grid>
          <Grid container style={{ width: '512px' }}>
            <FormGrid>
              <FormLabel>Your Name</FormLabel>
              <Input value={value[0]} />
            </FormGrid>
            <FormGrid>
              <FormLabel>Tagline</FormLabel>
              <Input
                value={
                  key.indexOf('Headline') === -1
                    ? null
                    : value[key.indexOf('Headline')]
                }
                onChange={(e) => {
                  if (key.indexOf('Headline') === -1) {
                    value[value.length] = e.target.value;
                    setValue([...value]);
                    setKey([...key, 'Headline']);
                  } else {
                    value[key.indexOf('Headline')] = e.target.value;
                    setValue([...value]);
                  }
                }}
              />
            </FormGrid>
            <FormGrid>
              <FormLabel>Avatar</FormLabel>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {selectedImage !== null ? (
                  <Avatar
                    style={{
                      borderRadius: '50%',
                      border: '1px solid #ddd',
                    }}
                  >
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      width={'48px'}
                      alt="not found"
                    />
                  </Avatar>
                ) : selectedImage === null && avatarState !== '' ? (
                  <Avatar
                    style={{
                      borderRadius: '50%',
                      border: '1px solid #ddd',
                    }}
                  >
                    <img src={avatarState} width={'48px'} />
                  </Avatar>
                ) : (
                  <Avatar
                    style={{
                      borderRadius: '50%',
                      border: '1px solid #ddd',
                    }}
                  >
                    <img src={`../user.png`} alt="" width={'48px'} />
                  </Avatar>
                )}
                <UploadButton
                  htmlFor="icon-button-file"
                  onClick={() => {
                    hiddenFileInput.current.click();
                  }}
                >
                  Pick an image
                </UploadButton>
                <ButtonBase
                  style={{ display: selectedImage === null ? 'none' : 'flex' }}
                  onClick={() => {
                    setSelectedImage(null);
                  }}
                >
                  <CloseIcon />
                </ButtonBase>
              </div>
              <input
                ref={hiddenFileInput}
                type="file"
                multiple=""
                accept="image/png,image/jpg,image/gif,image/jpeg,image/webp"
                autoComplete="off"
                style={{ display: 'none' }}
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setSelectedImage(e.target.files[0]);
                }}
              />
            </FormGrid>
            <FormGrid>
              <FormLabel>Website URL</FormLabel>
              <Input
                value={
                  key.indexOf('Your Website') === -1
                    ? null
                    : value[key.indexOf('Your Website')]
                }
                onChange={(e) => {
                  if (key.indexOf('Your Website') === -1) {
                    value[value.length] = e.target.value;
                    setValue([...value]);
                    setKey([...key, 'Your Website']);
                  } else {
                    value[key.indexOf('Your Website')] = e.target.value;
                    setValue([...value]);
                  }
                }}
              />
            </FormGrid>
            <FormGrid>
              <FormLabel>Content</FormLabel>
              <TextField
                multiline
                rows={4}
                placeholder="Write something nice ✨"
                style={{ width: '100%' }}
                value={contentState}
                onChange={(e) => {
                  setContentState(e.target.value);
                }}
              />
            </FormGrid>
            <FormGrid>
              <FormLabel>Rating</FormLabel>
              <Rating
                value={rateState}
                onChange={(event, newValue) => {
                  setRateState(newValue);
                }}
              />
            </FormGrid>
            <FormGrid>
              <FormLabel>Date</FormLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label=""
                  value={moment(date).format('L').replace(/\//g, '-')}
                  onChange={(newValue) => {
                    console.log(newValue);
                    setDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </FormGrid>
            <FormGrid>
              <DefaultButton
                onClick={() => {
                  inf.id = id;
                  inf.status = status;
                  inf.key = key;
                  inf.content = contentState;
                  inf.name = name;
                  inf.rating = rateState;
                  inf.type = type;
                  inf.updatedAt = date;
                  inf.url = url;
                  inf.value = value;
                  updateTestimonial(inf, selectedImage).then((e) => {
                    dispatch(getAll());
                    setOpen(true);
                    setEditState(false);
                  });
                }}
              >
                Save
              </DefaultButton>
            </FormGrid>
          </Grid>
        </div>
      </Drawer>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
      >
        <Alert
          onClose={handleCloseSnack}
          severity="success"
          sx={{ width: '100%' }}
        >
          Save Changed
        </Alert>
      </Snackbar>
    </div>
  );
};

export default TestTable;
