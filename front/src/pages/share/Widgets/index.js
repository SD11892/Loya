import React, { useEffect } from 'react';
import {
  Grid,
  Modal,
  Fade,
  Box,
  Button,
  InputBase,
  IconButton,
} from '@mui/material';
import moment from 'moment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '../../../components/uielements/buttons/listItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import PlusButton from '../../../components/uielements/buttons/plusButton';
import PageTitle from '../../../components/uielements/pageTitle';
import Description from '../../../components/uielements/description';
import IconContainer from '../../../components/uielements/iconContainer';
import { Plus as PlusIcon } from '../../../icons/plus';
import { Qmark } from '../../../icons/qmark';
import { Close as CloseIcon } from '../../../icons/close';
import { Delete as DeleteIcon } from '../../../icons/delete';
import MainButton from '../../../components/uielements/buttons/mainButton';
import DeleteButton from '../../../components/uielements/buttons/deleteButton';
import {
  getAll,
  createForm,
  deleteForm,
} from '../../../actions/testimonialForm';
import { isEmpty } from '../../../util/isEmpty';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CopyUrl } from '../../../icons/copyUrl';
import { Edit } from '../../../icons/edit';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import toastr from 'toastr';

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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Widgets = () => {
  const dispatch = useDispatch();
  const testimonialForms = useSelector(
    (state) => state.testimonialForm.payload
  );
  const [checked, setChecked] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [formName, setFormName] = React.useState('New Widget');
  const [text, setText] = React.useState('New Widget');
  const [openSnack, setOpenSnack] = React.useState(false);

  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const copyContent = async (info) => {
    let text = window.location.href + `/p/${info.url}`;

    try {
      var inputc = document.body.appendChild(document.createElement('input'));
      inputc.value = text;
      inputc.select();
      document.execCommand('copy');
      inputc.parentNode.removeChild(inputc);
      setOpenSnack(true);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleCreate = () => {
    if (isEmpty(testimonialForms)) {
      createForm(formName, 1)
        .then((res) => {
          dispatch(getAll()).then((result) => {
            console.log(result);
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
    } else {
      let upgrade = localStorage.getItem('upgrade');
      if (upgrade === 'free') {
        if (testimonialForms.length >= 1) {
          toastr.error('Please upgrade your plan for more forms');
        } else {
          createForm(formName, 1)
            .then((res) => {
              dispatch(getAll()).then((res) => {
                console.log(res);
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
        }
      } else {
        createForm(formName, 1)
          .then((res) => {
            dispatch(getAll()).then((res) => {
              console.log(res);
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
      }
    }
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  useEffect(() => {
    setFormName(text);
  }, [text]);
  useEffect(() => {
    dispatch(getAll());
  }, []);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleDelete = () => {
    const deleteIds = [];
    checked.map((row) => deleteIds.push(row.id));
    deleteForm(deleteIds).then((res) => {
      dispatch(getAll());
    });
    setChecked([]);
  };

  return (
    <div>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        style={{
          width: '100%',
          lineHeight: '0.8rem',
          marginLeft: '2rem',
          alignItems: 'center',
        }}
      >
        <Grid item>
          <PageTitle>Your Widgets</PageTitle>
          <Description>
            Embed testimonials on your website, without code.
          </Description>
        </Grid>
        <Grid item>
          {isEmpty(checked) === true ? null : (
            <DeleteButton onClick={handleDelete}>
              <DeleteIcon fill="white" stroke="red" />
              <span style={{ marginLeft: '1rem' }}>Delete</span>
            </DeleteButton>
          )}

          <PlusButton onClick={handleOpen}>
            <PlusIcon fill="#923AFE" stroke="white" />
            Create New
          </PlusButton>
        </Grid>
      </Grid>
      <div
        style={{
          width: '100%',
          lineHeight: '0.8rem',
          marginLeft: '2rem',
          marginTop: '2rem',
        }}
      >
        {isEmpty(testimonialForms) ? (
          <div>No Widgets Created Here</div>
        ) : (
          <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {testimonialForms.map((value) => {
              const labelId = `checkbox-list-secondary-label-${value}`;

              return (
                <ListItem key={value.id} style={{ marginTop: '1rem' }}>
                  <ListItemButton
                    onClick={(e) => {
                      if (isEmpty(e.target.id)) {
                        if (value.single === 1) {
                          navigate(`/testimonialforms/${value.url}`);
                        } else {
                          localStorage.setItem('testimonialId', value.single);
                          localStorage.setItem('widgetUrl', value.url);
                          navigate('/only_one_widget');
                        }
                      }
                    }}
                  >
                    <Checkbox
                      id={`check[${value.Id}]`}
                      style={{
                        marginRight: '5px',
                        color: '#ddd',
                        borderRadius: '10px',
                      }}
                      edge="end"
                      onChange={handleToggle(value)}
                      checked={checked.indexOf(value) !== -1}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                    <ListItemAvatar>
                      <Avatar
                        style={{
                          width: '15px',
                          paddingLeft: '5px',
                          paddingRight: '5px',
                          height: '30px',
                          borderRadius: '20%',
                          border: '1px solid #ddd',
                        }}
                        alt={`Avatar n°${value + 1}`}
                        src={'./item.svg'}
                      />
                    </ListItemAvatar>
                    <ListItemText style={{ letterSpacing: '1px' }}>
                      <div style={{ fontSize: '1rem', fontWeight: '600' }}>
                        {value.name}
                      </div>
                      <div>
                        created on {moment(value.createdAt).format('LL')}
                      </div>
                    </ListItemText>
                    <IconContainer>
                      <IconButton
                        id={`url[${value.id}]`}
                        onClick={(eve) => {
                          eve.stopPropagation();
                          copyContent(value);
                        }}
                      >
                        <CopyUrl />
                      </IconButton>
                    </IconContainer>
                    <IconContainer>
                      <IconButton
                        onClick={(ev) => {
                          ev.stopPropagation();
                          createForm(value.name + ' copy', 1).then((res) => {
                            dispatch(getAll());
                          });
                        }}
                      >
                        <FileCopyOutlinedIcon />
                      </IconButton>
                    </IconContainer>
                    <IconContainer>
                      <IconButton
                        onClick={(event) => {
                          event.stopPropagation();
                          let id = [];
                          id.push(value.id);
                          deleteForm(id).then(() => {
                            dispatch(getAll());
                          });
                        }}
                      >
                        <DeleteIcon fill="white" stroke="red" />
                      </IconButton>
                    </IconContainer>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        )}
      </div>
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
            <PageTitle>Create a tetimonial form</PageTitle>
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
              You can create different testimonial forms to collect make
              beautiful testimonials.
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
              >
                Testimonial Form Name <Qmark />
              </div>
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
              ></InputBase>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <MainButton
                onClick={handleCreate}
                style={{ width: '100%', marginLeft: 'unset' }}
              >
                Create form
              </MainButton>
            </div>
          </Box>
        </Fade>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
      >
        <Alert
          onClose={handleCloseSnack}
          severity="success"
          sx={{ width: '100%' }}
        >
          Copied to Clipboard
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Widgets;
