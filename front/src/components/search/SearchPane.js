import * as React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BackwardButton from '../uielements/buttons/backwardButton';
import SiderText from '../uielements/siderText';
import { Close as CloseIcon } from '../../icons/close';
import Description from '../../components/uielements/description';
import MainButton from '../../components/uielements/buttons/mainButton';
import { search_getAll, createTag } from '../../actions/tag';
import { isEmpty } from '../../util/isEmpty';
import {
  Grid,
  InputBase,
  Button,
  FormLabel,
  Rating,
  Fade,
  Box,
  Modal,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import PageTitle from '../uielements/pageTitle';
import { Googlesm } from '../../icons/google_sm';
import { Facebooksm } from '../../icons/facebook_sm';
import FormInput from '../uielements/form/FormInput';
import { getAll } from '../../actions/testimonial';
import { Pencil } from '../../icons/pencil';
import { Camera } from '../../icons/camera';

export const SearchPane = () => {
  const navigate = useNavigate();
  const [rating, setRating] = React.useState(null);
  const [searchVal, setSearchVal] = React.useState('');
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tag.payload);
  const [checked, setChecked] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [tagName, setTagName] = React.useState('');
  const [text, setText] = React.useState('');
  const onChange = (event, newValue) => {
    setRating(newValue);
    dispatch(getAll(`rating===${newValue}`));
  };
  React.useEffect(() => {
    setTagName(text);
  }, [text]);
  React.useEffect(() => {}, [rating]);
  React.useEffect(() => {
    dispatch(search_getAll(searchVal));
  }, [searchVal]);

  React.useEffect(() => {
    dispatch(getAll(searchVal));
  }, [searchVal]);

  const handleCreate = () => {
    createTag(tagName)
      .then((res) => {
        dispatch(search_getAll()).then((result) => {
          handleClose();
        });
        return {
          CODE: 200,
          message: 'success',
          data: res,
        };
      })
      .catch((err) => {
        console.log('createErr=', err);
      });
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: '10px',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pl: 4,
    pt: 0,
    pr: 4,
    pb: 4,
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <Grid container pt={'2rem'}>
        <BackwardButton
          onClick={() => {
            navigate('/testimonials');
          }}
        >
          <SiderText>← Testimonials</SiderText>
        </BackwardButton>
        <Grid item xs={12} style={{ marginBottom: '1rem' }}>
          <PageTitle>Search</PageTitle>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            marginBottom: '1rem',
          }}
        >
          <FormInput
            placeholder="Search for a name,a job title or an name"
            onChange={(e) => {
              setSearchVal(e.target.value);
            }}
            value={searchVal}
          />
        </Grid>
        <Grid item xs={12} style={{ marginBottom: '1rem' }}>
          <FormLabel>Filter By Name</FormLabel>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            marginBottom: '1rem',
            color: '#52525b',
            fontSize: '0.7rem',
            fontWeight: '600',
          }}
        >
          <Button
            style={{
              textDecoration: 'unset',
              color: '#52525b',
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '0px 2px',
              margin: '2px',
              textTransform: 'unset',
              gap: '0.5rem',
            }}
            onClick={() => {
              dispatch(getAll('google'));
            }}
          >
            <Googlesm />
            Google
          </Button>
          <Button
            style={{
              textDecoration: 'unset',
              color: '#52525b',
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '0px 2px',
              margin: '2px',
              textTransform: 'unset',
              gap: '2px',
            }}
            onClick={() => {
              dispatch(getAll('facebook'));
            }}
          >
            <Facebooksm />
            Facebook
          </Button>
          <Button
            style={{
              textDecoration: 'unset',
              color: '#52525b',
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '0px 2px',
              margin: '2px',
              textTransform: 'unset',
              gap: '2px',
            }}
            onClick={() => {
              dispatch(getAll('text'));
            }}
          >
            <Pencil />
            Text
          </Button>
          <Button
            style={{
              textDecoration: 'unset',
              color: '#52525b',
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '0px 2px',
              margin: '2px',
              textTransform: 'unset',
              gap: '2px',
            }}
            onClick={() => {
              dispatch(getAll('video'));
            }}
          >
            <Camera />
            Video
          </Button>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: '1rem' }}>
          <FormLabel>Filter By Rating</FormLabel>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: '1rem' }}>
          <Rating value={rating} onChange={onChange} />
        </Grid>
        {/* <Grid item xs={12} style={{ marginBottom: '1rem' }}>
          <div style={{ marginTop: '1rem', fontWeight: '500' }}>
            Filter By Tag
          </div>
        </Grid>
        <Grid item xs={2} style={{ marginBottom: '1rem' }}>
          <Button
            style={{
              borderRadius: '1rem',
              background: '#000',
              color: '#fff',
              width: '100%',
              fontSize: '0.7rem',
            }}
            onClick={handleOpen}
          >
            Create tag
          </Button>
        </Grid>
        <Grid item xs={12}>
          {isEmpty(tags) ? (
            <div>No Tags</div>
          ) : (
            tags.map((value, index) => {
              return (
                <Grid item xs={2} key={index}>
                  <Button
                    style={{
                      borderRadius: '1rem',
                      background: '#00f',
                      color: '#fff',
                      width: '100%',
                      fontSize: '0.7rem',
                    }}
                    key={index}
                    onClick={() => setSearchVal(value.tag_name)}
                  >
                    {value.tag_name}
                  </Button>
                </Grid>
              );
            })
          )}
        </Grid>
        <Grid item xs={12} style={{ marginBottom: '1rem' }}>
          <div style={{ marginTop: '1rem', fontWeight: '500' }}>
            By Job Title
          </div>
        </Grid>
        <Grid item xs={2} style={{ marginBottom: '1rem' }}>
          <Button
            style={{
              borderRadius: '1rem',
              background: '#fff',
              color: '#000',
              width: '100%',
              fontSize: '0.7rem',
            }}
          >
            Founder 2
          </Button>
        </Grid> */}
      </Grid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        style={{ borderRadius: '2rem' }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <PageTitle>Create a Tag</PageTitle>
            <Button
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: '#444',
              }}
            >
              <CloseIcon />
            </Button>
            <Description style={{ fontSize: '1rem' }}>
              Use tags to organize your testimonials.
            </Description>
            <div style={{ marginTop: '2rem' }}>
              <div
                style={{
                  marginBottom: '0.5rem',
                  alignItems: 'center',
                  display: 'flex',
                  gap: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                }}
              ></div>
              <InputBase
                style={{
                  width: '100%',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  paddingLeft: '5px',
                }}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                value={text}
                placeholder="new tag"
              ></InputBase>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <MainButton
                onClick={handleCreate}
                style={{ width: '100%', marginLeft: 'unset' }}
              >
                Create Tag
              </MainButton>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
