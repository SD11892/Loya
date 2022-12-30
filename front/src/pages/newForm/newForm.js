import React, { useEffect, useState } from 'react';
import { getByFormUrl, saveForm } from '../../actions/form';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { createColor } from 'material-ui-color';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  ButtonBase,
  Checkbox,
  Grid,
  IconButton,
  Input,
  NativeSelect,
  Rating,
  Switch,
  TextField,
  ToggleButtonGroup,
} from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { DownArrow } from '../../icons/downArrow';
import { Design as DesignIcon } from '../../icons/wall/design';
import { Share as ShareIcon } from '../../icons/wall/share';
import { WelcomePage as WelcomeIcon } from '../../icons/welcomePage';
import { Thank as ThankIcon } from '../../icons/thank';
import { Response as ResponseIcon } from '../../icons/response';
import { Attribution as AttributionIcon } from '../../icons/attribution';
import { Localization as LocalizationIcon } from '../../icons/localization';
import { Custom as CustomIcon } from '../../icons/custom';
import { Camera } from '../../icons/camera';
import { Delete as DeleteIcon } from '../../icons/delete';
import { Plus as PlusIcon } from '../../icons/plus';
import { Laptop as LaptopIcon } from '../../icons/laptop';
import { Mobile as MobileIcon } from '../../icons/mobile';

import Picker from '../../components/uielements/picker';
import PreviewContainer from '../../components/uielements/previewContainer';
import TopLinkContainer from '../../components/uielements/topLinkContainer';
import DefaultButton from '../../components/uielements/buttons/defaultButton';
import BackwardButton from '../../components/uielements/buttons/backwardButton';
import AddButton from '../../components/uielements/buttons/addButton';
import PageTitle from '../../components/uielements/pageTitle';
import SiderText from '../../components/uielements/siderText';
import FormLabel from '../../components/uielements/form/FormLabel';
import FormInput from '../../components/uielements/form/FormInput';
import FormGrid from '../../components/uielements/form/FormGrid';
import TabButton from '../../components/uielements/buttons/tabButton';
import UploadButton from '../../components/uielements/buttons/uploadButton';
import VideoReview from '../../components/testimonials/videoReview';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  borderBottom: '1px solid #e5e7eb',
  '&:not(:last-child)': {},
  '&:before': {},
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<DownArrow />} {...props} />
))(({ theme }) => ({
  backgroundColor: '#fff',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  overflow: 'visible',
  overflowX: 'auto',
}));

function NewForm() {
  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(1);
  const [formName, setFormName] = React.useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setData] = useState('');
  const [expanded, setExpanded] = React.useState('panel1');
  const [priColor, setPriColor] = React.useState('');
  const [bgColor, setBgColor] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [directUrl, setDirectUrl] = React.useState('');
  const [message, setMessage] = React.useState(``);
  const [prompt, setPrompt] = React.useState(``);
  const [thankTitle, setThankTitle] = React.useState(``);
  const [thankMessage, setThankMessage] = React.useState(``);
  const [mobile, setMobile] = React.useState('laptop');
  const [addingFields, setAddingFields] = React.useState([]);
  const [key, setKey] = React.useState([]);
  const [inputingFields, setInputingFields] = React.useState([
    'Your Name',
    'Email Address',
    'Headline',
    'Your Website',
  ]);
  const [toggled, setToggled] = React.useState([false, false, false]);
  const [checked, setChecked] = React.useState([]);
  const [rating, setRating] = React.useState(0);
  const hiddenFileInput = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const infor = {
    formName: '',
    formUrl: '',
    fileName: '',
    fileType: '',
    pColor: '',
    bColor: '',
    prompt: ``,
    checked: [],
    title: '',
    message: ``,
    thankTitle: '',
    thankMessage: ``,
    call: 0,
    textBtn: '',
    linkUrl: '',
    custom: 0,
    directUrl: '',
    key: [],
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handlepriColorChange = (value) => {
    setPriColor(value.css.backgroundColor);
  };
  const handlebgColorChange = (value) => {
    setBgColor(value.css.backgroundColor);
  };
  const handleChange = (panel) => (event, newExpanded) => {
    let len = 1;
    if (panel === 'panel1') {
      setVisible(1);
    } else if (panel === 'panel2') {
      setVisible(1);
    } else if (panel === 'panel3') {
      setVisible(2);
    } else if (panel === 'panel4') {
      setVisible(3);
    } else if (panel === 'panel5') {
      setVisible(4);
    }
    setExpanded(newExpanded ? panel : false);
  };

  const handleToggleChange = (event, newAlignment) => {
    console.log('newAlignment=', newAlignment);
    setMobile(newAlignment);
  };

  const onSave = () => {
    if (selectedImage) {
      infor.fileName = selectedImage.name;
      infor.fileType = selectedImage.type;
    }
    infor.formName = formName;
    infor.pColor = priColor;
    infor.bColor = bgColor;
    infor.prompt = prompt;
    infor.checked = checked;
    infor.title = title;
    infor.message = message;
    infor.thankTitle = thankTitle;
    infor.thankMessage = thankMessage;
    infor.directUrl = directUrl;
    infor.key = inputingFields.concat(addingFields);
    infor.formUrl = url;
    saveForm(infor, selectedImage).then(() => {
      setOpen(true);
    });
  };
  const url = window.location.pathname.slice(-6);

  useEffect(() => {
    getByFormUrl(url).then((res) => {
      const result = res.data.data.data;
      setPriColor(result.pColor);
      setBgColor(result.bColor);
      setMessage(`${result.message}`);
      setTitle(result.title);
      setPrompt(`${result.prompt}`);
      setThankTitle(`${result.thankTitle}`);
      setThankMessage(`${result.thankMessage}`);
      setKey(result.key.split(','));
      setFormName(result.formName);
      setChecked(result.checked);
      setData(
        btoa(
          String.fromCharCode(...new Uint8Array(res.data.data.data.data.data))
        )
      );
      var len = 0;
      if (result.key.split(',').indexOf('Email Address') !== -1) {
        toggled[0] = true;
        setToggled([...toggled]);
        len += 1;
      }
      if (result.key.split(',').indexOf('Headline') !== -1) {
        toggled[1] = true;
        setToggled([...toggled]);
        len += 1;
      }
      if (result.key.split(',').indexOf('Your Website') !== -1) {
        toggled[2] = true;
        setToggled([...toggled]);
        len += 1;
      }
      setAddingFields(key.slice(len, key.length));
    });
  }, []);
  useEffect(() => {}, [
    priColor,
    bgColor,
    message,
    title,
    prompt,
    thankTitle,
    thankMessage,
    visible,
    mobile,
    addingFields,
    toggled,
    selectedImage,
    inputingFields,
    key,
    formName,
    data,
    checked,
  ]);

  const TextReviews = (
    <>
      <Grid
        container
        style={{
          marginTop: '1rem',
          whiteSpace: 'pre-wrap',
        }}
      >
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          placeholder="Write something nice ✨"
          style={{ width: '100%' }}
        />
      </Grid>
      <Grid container style={{ marginTop: '1rem' }}>
        <DefaultButton primary={priColor}>Submit</DefaultButton>
      </Grid>
    </>
  );

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <Grid container style={{ width: 'unset' }}>
        <Grid
          item
          style={{
            background: '#fff',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            borderRight: '1px solid #e5e7eb',
            width: '40rem',
            overflow: 'auto',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100vh',
            }}
          >
            <Grid
              container
              pt={'2rem'}
              justifyContent="space-between"
              style={{ alignItems: 'center' }}
            >
              <Grid item>
                <BackwardButton
                  onClick={() => {
                    navigate('/forms');
                  }}
                >
                  ← Dashboard
                </BackwardButton>
              </Grid>
              <Grid item>
                <IconButton
                  style={{ border: '1px solid #ddd' }}
                  onClick={() => {
                    let path = `/forms/p/${
                      localStorage.getItem("projects").slug
                    }/r/${url}`;
                    navigate(path);
                  }}
                >
                  <ShareIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Grid container pt={'2rem'}>
              <Grid item xs={12} style={{ marginBottom: '1rem' }}>
                <Input
                  value={formName}
                  onChange={(e) => {
                    setFormName(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              xs={12}
              style={{
                padding: '1rem',
                marginBottom: '1rem',
                background: '#F3F4F6',
                overflowY: 'auto',
              }}
            >
              <Grid item xs={1}>
                💡
              </Grid>
              <Grid item xs={11}>
                Welcome to your collection form! Your form helps you collect
                text and video testimonials from your customers.
              </Grid>
            </Grid>
            <Grid
              container
              xs={12}
              style={{
                marginBottom: '1rem',
              }}
            >
              <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
                style={{ width: 'inherit' }}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <DesignIcon />
                  Design
                </AccordionSummary>
                <AccordionDetails>
                  <div style={{ width: 'inherit' }}>
                    <FormLabel>Logo</FormLabel>
                    <input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      style={{ display: 'none' }}
                      onChange={(e) => {
                        console.log(e.target.files[0]);
                        setSelectedImage(e.target.files[0]);
                      }}
                    />
                    <label
                      htmlFor="icon-button-file"
                      style={{
                        padding: '0.5rem',
                        border: '0.1rem solid #ddd',
                        borderRadius: '0.375rem',
                        width: '25%',
                      }}
                    >
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        style={{
                          alignItems: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        {selectedImage !== null ? (
                          <img
                            src={URL.createObjectURL(selectedImage)}
                            width={'48px'}
                            alt="not found"
                          />
                        ) : selectedImage === null && data !== '' ? (
                          <img
                            src={`data:image/png;base64,${data}`}
                            alt=""
                            width={'48px'}
                          />
                        ) : (
                          <img src={`../../heart.png`} width={'32px'} />
                        )}
                      </IconButton>
                    </label>
                    <FormLabel>Primary Color</FormLabel>
                    <div
                      style={{
                        padding: '0.5rem',
                        marginTop: '0.5rem',
                        border: '1px solid #ddd',
                        borderRadius: '1rem',
                      }}
                    >
                      <Picker
                        value={createColor(priColor)}
                        onChange={handlepriColorChange}
                      />
                    </div>
                    <FormLabel>Background Color</FormLabel>
                    <div
                      style={{
                        padding: '0.5rem',
                        marginTop: '0.5rem',
                        border: '1px solid #ddd',
                        borderRadius: '1rem',
                      }}
                    >
                      <Picker value={bgColor} onChange={handlebgColorChange} />
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
                style={{ width: 'inherit' }}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <WelcomeIcon stroke="rgb(192,38,211)" />
                  Welcome Page
                </AccordionSummary>
                <AccordionDetails>
                  <FormGrid>
                    <FormLabel>Welcome Page</FormLabel>
                    <FormInput
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </FormGrid>
                  <FormGrid>
                    <FormLabel>Introductory Message</FormLabel>
                    <TextField
                      multiline
                      rows={6}
                      placeholder="Write something nice ✨"
                      style={{ width: '100%' }}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />
                  </FormGrid>
                  <FormGrid>
                    <SiderText>Markdown supported</SiderText>
                    <div>
                      <Checkbox
                        checked={checked[0] === 'true' ? true : false}
                        disabled={checked[1] === 'false' ? true : false}
                        onChange={(e) => {
                          checked[0] = e.target.checked.toString();
                          setChecked([...checked]);
                        }}
                      />
                      Collect Video Reviews
                    </div>
                    <div>
                      <Checkbox
                        checked={checked[1] === 'true' ? true : false}
                        disabled={checked[0] === 'false' ? true : false}
                        onChange={(e) => {
                          checked[1] = e.target.checked.toString();
                          setChecked([...checked]);
                        }}
                      />
                      Collect Text Reviews
                    </div>
                  </FormGrid>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
                style={{ width: 'inherit' }}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <ResponseIcon stroke="rgb(239,68,68)" />
                  Response Page
                </AccordionSummary>
                <AccordionDetails>
                  <FormLabel>Prompt</FormLabel>
                  <TextField
                    multiline
                    rows={6}
                    style={{ width: '100%' }}
                    value={prompt}
                    onChange={(e) => {
                      setPrompt(e.target.value);
                    }}
                  />
                  <FormLabel>Markdown supported</FormLabel>
                  <Checkbox
                    onChange={(e) => {
                      checked[2] = e.target.checked.toString();
                      setChecked([...checked]);
                    }}
                  ></Checkbox>
                  Collect Ratings
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
                style={{ width: '100%' }}
              >
                <AccordionSummary
                  aria-controls="panel4d-content"
                  id="panel4d-header"
                >
                  <AttributionIcon stroke="rgb(22, 163, 74)" />
                  Attribution Page
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    style={{
                      border: '1px solid #ddd',
                      borderRadius: '0.5rem',
                      padding: '1rem',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <FormLabel>Ask For Email Address</FormLabel>
                      <Switch
                        checked={toggled[0]}
                        onChange={(event) => {
                          if (event.target.checked === true) {
                            inputingFields[1] = 'Email Address';
                            setInputingFields([...inputingFields]);
                          } else {
                            inputingFields.splice(
                              inputingFields.indexOf('Email Address'),
                              1
                            );
                            setInputingFields([...inputingFields]);
                          }
                          toggled[0] = event.target.checked;
                          setToggled([...toggled]);
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <FormLabel>Ask For Headline</FormLabel>
                      <Switch
                        checked={toggled[1]}
                        onChange={(event) => {
                          if (event.target.checked === true) {
                            inputingFields[2] = 'Headline';
                            setInputingFields([...inputingFields]);
                          } else {
                            console.log('here');
                            inputingFields.splice(
                              inputingFields.indexOf('Headline'),
                              1
                            );
                            console.log('here=', inputingFields);
                            setInputingFields([...inputingFields]);
                          }
                          toggled[1] = event.target.checked;
                          setToggled([...toggled]);
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <FormLabel>Ask For Website</FormLabel>
                      <Switch
                        checked={toggled[2]}
                        onChange={(event) => {
                          if (event.target.checked === true) {
                            inputingFields[3] = 'Your Website';
                            setInputingFields([...inputingFields]);
                          } else {
                            inputingFields.splice(
                              inputingFields.indexOf('Your Website'),
                              1
                            );
                            setInputingFields([...inputingFields]);
                          }
                          toggled[2] = event.target.checked;
                          setToggled([...toggled]);
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <FormLabel>Additional Fields</FormLabel>
                    <AddButton
                      onClick={() => {
                        setAddingFields([...addingFields, '']);
                      }}
                    >
                      <PlusIcon fill="#f3f3f6" stroke="#6701e6" />
                    </AddButton>
                  </div>
                  {addingFields.length === 0 ? (
                    <ButtonBase
                      style={{
                        width: '100%',
                        border: '1px dashed #e5e7eb',
                        padding: '1rem',
                      }}
                      onClick={() => {
                        setAddingFields([...addingFields, '']);
                      }}
                    >
                      ⚡ Collect more information from your users by adding an
                      additional field.
                    </ButtonBase>
                  ) : (
                    addingFields.map((value, index) => {
                      return (
                        <div
                          style={{
                            border: '1px solid #e5e7eb',
                            padding: '0.5rem',
                            marginTop: '0.25rem',
                            borderRadius: '0.375rem',
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '1rem',
                            alignItems: 'center',
                          }}
                        >
                          <IconButton
                            onClick={() => {
                              addingFields.splice(index, 1);
                              console.log('addingFields=', addingFields);
                              setAddingFields([...addingFields]);
                            }}
                          >
                            <DeleteIcon fill="white" stroke="red" />
                          </IconButton>
                          <NativeSelect defaultValue={1}>
                            <option value={1}>Text</option>
                            <option value={2}>Email</option>
                            <option value={3}>Select</option>
                            <option value={4}>Phone</option>
                            <option value={5}>Url</option>
                          </NativeSelect>
                          <FormInput
                            onChange={(e) => {
                              addingFields[index] = e.target.value;
                              setAddingFields([...addingFields]);
                            }}
                            value={addingFields[index]}
                          />
                        </div>
                      );
                    })
                  )}
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel5'}
                onChange={handleChange('panel5')}
                style={{ width: '100%' }}
              >
                <AccordionSummary
                  aria-controls="panel4d-content"
                  id="panel4d-header"
                >
                  <ThankIcon stroke="rgb(219, 39, 119)" />
                  Thank You Page
                </AccordionSummary>
                <AccordionDetails>
                  <Checkbox
                    checked={checked[3]}
                    onChange={(e) => {
                      checked[3] = e.target.checked;
                      setChecked([...checked]);
                    }}
                  />
                  Use Custom Thank You Page
                  {checked[3] === true ? (
                    <FormGrid>
                      <FormLabel>Redirect URL</FormLabel>
                      <FormInput
                        value={directUrl}
                        onChange={(e) => {
                          setDirectUrl(e.target.value);
                        }}
                      />
                    </FormGrid>
                  ) : (
                    <FormGrid>
                      <FormLabel>Page Title</FormLabel>
                      <FormInput
                        placeholder="Thank you for your feedback"
                        value={thankTitle}
                        onChange={(e) => {
                          setThankTitle(e.target.value);
                        }}
                      />

                      <FormLabel>Message</FormLabel>
                      <TextField
                        multiline
                        rows={6}
                        placeholder="Thank you for taking the time to respond. We truly appreciate it!"
                        value={thankMessage}
                        onChange={(e) => {
                          setThankMessage(e.target.value);
                        }}
                      />
                    </FormGrid>
                  )}
                </AccordionDetails>
              </Accordion>
            </Grid>
            <FormGrid>
              <DefaultButton
                style={{ padding: '0.5rem', borderRadius: '9999px' }}
                onClick={onSave}
              >
                Save Changes
              </DefaultButton>
            </FormGrid>
          </div>
        </Grid>
      </Grid>
      <Grid
        containter
        style={{
          width: '100%',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Grid
          item
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              background: '#D1D5DB',
              marginTop: '1rem',
              borderRadius: '0.375rem',
              padding: '0.5rem',
            }}
          >
            <ToggleButtonGroup
              color="primary"
              value={mobile}
              exclusive
              onChange={handleToggleChange}
            >
              <TabButton value="laptop" key="laptop">
                <LaptopIcon />
              </TabButton>
              <TabButton value="mobile" key="mobile">
                <MobileIcon />
              </TabButton>
            </ToggleButtonGroup>
          </div>
        </Grid>
        {mobile === 'laptop' ? (
          <div
            style={{
              background: bgColor,
              height: '600px',
              display: 'flex',
              justifyContent: 'center',
              padding: '1rem',
              borderColor: '#ddd',
              borderWidth: '0.2rem',
              overflowY: 'auto',
              border: '3px solid #111',
              margin: '1rem',
              borderRadius: '1rem',
            }}
          >
            <PreviewContainer
              style={{ display: visible === 1 ? 'flex' : 'none' }}
            >
              <TopLinkContainer>
                <img
                  src={`../../heart.png`}
                  width="16px"
                  height="16px"
                  style={{ paddingTop: '0.4rem', marginRight: '0.2rem' }}
                />
                <a
                  href="http://tryloya.com"
                  style={{
                    textDecoration: 'unset',
                  }}
                >
                  Powered by Loya
                </a>
              </TopLinkContainer>
              <Grid container style={{ marginBottom: '1rem' }}>
                {selectedImage !== null ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    width={'48px'}
                    alt="not found"
                  />
                ) : data !== '' ? (
                  <img
                    src={`data:image/png;base64,${data}`}
                    alt=""
                    width={'48px'}
                  />
                ) : (
                  <img src={`../../heart.png`} width={'32px'} />
                )}
              </Grid>
              <Grid container style={{ marginBottom: '1rem' }}>
                <PageTitle>{title}</PageTitle>
              </Grid>
              <Grid
                container
                style={{
                  marginBottom: '1rem',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {message}
              </Grid>
              <Grid
                container
                style={{
                  display: checked[0] === 'true' ? 'flex' : 'none',
                }}
              >
                <DefaultButton primary={priColor}>
                  <Camera />
                  Record a video
                </DefaultButton>
              </Grid>
              <Grid
                container
                style={{
                  marginBottom: '0.5rem',
                  display: checked[1] === 'true' ? 'flex' : 'none',
                }}
              >
                <DefaultButton>Write a review</DefaultButton>
              </Grid>
            </PreviewContainer>
            <PreviewContainer
              style={{ display: visible === 2 ? 'flex' : 'none' }}
            >
              <TopLinkContainer>
                <img
                  src={`../../heart.png`}
                  width="16px"
                  height="16px"
                  style={{ paddingTop: '0.4rem', marginRight: '0.2rem' }}
                />
                <a
                  href="http://tryloya.com"
                  style={{
                    textDecoration: 'unset',
                  }}
                >
                  Powered by Loya
                </a>
              </TopLinkContainer>
              <Grid container style={{ marginTop: '1rem' }}>
                {selectedImage !== null ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    width={'48px'}
                    alt="not found"
                  />
                ) : data !== '' ? (
                  <img
                    src={`data:image/png;base64,${data}`}
                    alt=""
                    width={'48px'}
                  />
                ) : (
                  <img src={`../../heart.png`} width={'32px'} />
                )}
              </Grid>
              <Grid container style={{ marginTop: '1rem' }}>
                <PageTitle>Write a text textimonial</PageTitle>
              </Grid>
              <Grid
                container
                style={{
                  marginTop: '1rem',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {prompt}
              </Grid>
              <Grid
                container
                style={{
                  marginTop: '1rem',
                }}
              >
                <Rating
                  style={{ display: checked[2] === 'true' ? 'flex' : 'none' }}
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(rating);
                  }}
                />
              </Grid>
              {checked[0] === 'true' ? <VideoReview /> : TextReviews}
            </PreviewContainer>
            <PreviewContainer
              style={{
                display: visible === 3 ? 'flex' : 'none',
                alignSelf: 'baseline',
              }}
            >
              <TopLinkContainer>
                <img
                  src={`../../heart.png`}
                  width="16px"
                  height="16px"
                  style={{ paddingTop: '0.4rem', marginRight: '0.2rem' }}
                />
                <a
                  href="http://tryloya.com"
                  style={{
                    textDecoration: 'unset',
                  }}
                >
                  Powered by Loya
                </a>
              </TopLinkContainer>
              <Grid container style={{ marginTop: '1rem' }}>
                {selectedImage !== null ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    width={'48px'}
                    alt="not found"
                  />
                ) : data !== '' ? (
                  <img
                    src={`data:image/png;base64,${data}`}
                    alt=""
                    width={'48px'}
                  />
                ) : (
                  <img src={`../../heart.png`} width={'32px'} />
                )}
              </Grid>
              <Grid container style={{ marginTop: '1rem' }}>
                <PageTitle>Almost done</PageTitle>
              </Grid>
              <FormGrid>
                <FormLabel>Your Name</FormLabel>
                <FormInput placeholder="ex.John Smith" />
                <div
                  style={{
                    display: toggled[0] === true ? 'block' : 'none',
                    width: '100%',
                  }}
                >
                  <FormGrid style={{ padding: 'unset' }}>
                    <FormLabel>Email Address</FormLabel>
                    <FormInput placeholder="ex.John Smith" />
                  </FormGrid>
                </div>
                <div
                  style={{
                    display: toggled[1] === true ? 'block' : 'none',
                    width: '100%',
                  }}
                >
                  <FormGrid style={{ padding: 'unset' }}>
                    <FormLabel>Headline</FormLabel>
                    <FormInput placeholder="ex.John Smith" />
                  </FormGrid>
                </div>
                <div
                  style={{
                    display: toggled[2] === true ? 'block' : 'none',
                    width: '100%',
                  }}
                >
                  <FormGrid style={{ padding: 'unset' }}>
                    <FormLabel>Your Website</FormLabel>
                    <FormInput placeholder="ex.John Smith" />
                  </FormGrid>
                </div>
                <div>
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
                    ) : selectedImage === null && data !== '' ? (
                      <Avatar
                        style={{
                          borderRadius: '50%',
                          border: '1px solid #ddd',
                        }}
                      >
                        <img
                          src={`data:image/png;base64,${data}`}
                          width={'48px'}
                        />
                      </Avatar>
                    ) : (
                      <Avatar
                        style={{
                          borderRadius: '50%',
                          border: '1px solid #ddd',
                        }}
                      >
                        <img src={`../../user.png`} alt="" width={'48px'} />
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
                  </div>
                  <input
                    ref={hiddenFileInput}
                    type="file"
                    multiple=""
                    accept="image/png,image/jpg,image/gif,image/jpeg,image/webp"
                    autocomplete="off"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      console.log(e.target.files[0]);
                      setSelectedImage(e.target.files[0]);
                    }}
                  />
                </div>
                {addingFields.length === 0
                  ? null
                  : addingFields.map((value, index) => {
                      return (
                        <FormGrid style={{ padding: 'unset' }}>
                          <FormLabel>{addingFields[index]}</FormLabel>
                          <FormInput placeholder="Enter details here" />
                        </FormGrid>
                      );
                    })}
                <DefaultButton primary={priColor}>Submit</DefaultButton>
              </FormGrid>
            </PreviewContainer>
            <PreviewContainer
              style={{ display: visible === 4 ? 'flex' : 'none' }}
            >
              <TopLinkContainer>
                <img
                  src={`../../heart.png`}
                  width="16px"
                  height="16px"
                  style={{ paddingTop: '0.4rem', marginRight: '0.2rem' }}
                />
                <a
                  href="http://tryloya.com"
                  style={{
                    textDecoration: 'unset',
                  }}
                >
                  Powered by Loya
                </a>
              </TopLinkContainer>
              <Grid container style={{ marginTop: '1rem' }}>
                {selectedImage !== null ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    width={'48px'}
                    alt="not found"
                  />
                ) : selectedImage === null && data !== '' ? (
                  <img
                    src={`data:image/png;base64,${data}`}
                    alt=""
                    width={'48px'}
                  />
                ) : (
                  <img src={`../../heart.png`} width={'32px'} />
                )}
              </Grid>
              <Grid container style={{ marginTop: '1rem' }}>
                <PageTitle>{thankTitle}</PageTitle>
              </Grid>
              <Grid
                container
                style={{
                  marginTop: '1rem',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {thankMessage}
              </Grid>
            </PreviewContainer>
          </div>
        ) : (
          <div
            style={{
              width: '320px',
              alignSelf: 'center',
              background: bgColor,
              height: '600px',
              display: 'flex',
              justifyContent: 'center',
              padding: '1rem',
              borderColor: '#ddd',
              borderWidth: '0.2rem',
              overflowY: 'auto',
              border: '3px solid #111',
              margin: '1rem',
              borderRadius: '1rem',
            }}
          >
            <PreviewContainer
              style={{ display: visible === 1 ? 'flex' : 'none' }}
            >
              <TopLinkContainer>
                <img
                  src={`../../heart.png`}
                  width="16px"
                  height="16px"
                  style={{ paddingTop: '0.4rem', marginRight: '0.2rem' }}
                />
                <a
                  href="http://tryloya.com"
                  style={{
                    textDecoration: 'unset',
                  }}
                >
                  Powered by Loya
                </a>
              </TopLinkContainer>
              <Grid container style={{ marginBottom: '1rem' }}>
                {selectedImage !== null ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    width={'48px'}
                    alt="not found"
                  />
                ) : data !== '' ? (
                  <img
                    src={`data:image/png;base64,${data}`}
                    alt=""
                    width={'48px'}
                  />
                ) : (
                  <img src={`../../heart.png`} width={'32px'} />
                )}
              </Grid>
              <Grid container style={{ marginBottom: '1rem' }}>
                <PageTitle>{title}</PageTitle>
              </Grid>
              <Grid
                container
                style={{
                  marginBottom: '1rem',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {message}
              </Grid>
              <Grid
                container
                style={{
                  marginBottom: '1rem',
                  display: checked[0] === 'true' ? 'flex' : 'none',
                }}
              >
                <DefaultButton primary={priColor}>
                  <Camera />
                  Record a video
                </DefaultButton>
              </Grid>
              <Grid
                container
                style={{
                  marginBottom: '1rem',
                  display: checked[1] === 'true' ? 'flex' : 'none',
                }}
              >
                <DefaultButton>Write a review</DefaultButton>
              </Grid>
            </PreviewContainer>
            <PreviewContainer
              style={{ display: visible === 2 ? 'flex' : 'none' }}
            >
              <TopLinkContainer>
                <img
                  src={`../../heart.png`}
                  width="16px"
                  height="16px"
                  style={{ paddingTop: '0.4rem', marginRight: '0.2rem' }}
                />
                <a
                  href="http://tryloya.com"
                  style={{
                    textDecoration: 'unset',
                  }}
                >
                  Powered by Loya
                </a>
              </TopLinkContainer>
              <Grid container style={{ marginTop: '1rem' }}>
                {selectedImage !== null ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    width={'48px'}
                    alt="not found"
                  />
                ) : data !== '' ? (
                  <img
                    src={`data:image/png;base64,${data}`}
                    alt=""
                    width={'48px'}
                  />
                ) : (
                  <img src={`../../heart.png`} width={'32px'} />
                )}
              </Grid>
              <Grid container style={{ marginTop: '1rem' }}>
                <PageTitle>Write a text textimonial</PageTitle>
              </Grid>
              <Grid
                container
                style={{
                  marginTop: '1rem',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {prompt}
              </Grid>
              <Grid
                container
                style={{
                  marginTop: '1rem',
                }}
              >
                <Rating
                  style={{ display: checked[2] === 'true' ? 'flex' : 'none' }}
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(rating);
                  }}
                />
              </Grid>
              <Grid
                container
                style={{
                  marginTop: '1rem',
                  whiteSpace: 'pre-wrap',
                }}
              >
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  placeholder="Write something nice ✨"
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid container style={{ marginTop: '1rem' }}>
                <DefaultButton primary>Submit</DefaultButton>
              </Grid>
            </PreviewContainer>
            <PreviewContainer
              style={{
                display: visible === 3 ? 'flex' : 'none',
                alignSelf: 'baseline',
              }}
            >
              <TopLinkContainer>
                <img
                  src={`../../heart.png`}
                  width="16px"
                  height="16px"
                  style={{ paddingTop: '0.4rem', marginRight: '0.2rem' }}
                />
                <a
                  href="http://tryloya.com"
                  style={{
                    textDecoration: 'unset',
                  }}
                >
                  Powered by Loya
                </a>
              </TopLinkContainer>
              <Grid container style={{ marginTop: '1rem' }}>
                {selectedImage !== null ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    width={'48px'}
                    alt="not found"
                  />
                ) : data !== '' ? (
                  <img
                    src={`data:image/png;base64,${data}`}
                    alt=""
                    width={'48px'}
                  />
                ) : (
                  <img src={`../../heart.png`} width={'32px'} />
                )}
              </Grid>
              <Grid container style={{ marginTop: '1rem' }}>
                <PageTitle>Almost done</PageTitle>
              </Grid>
              <FormGrid>
                <FormLabel>Your Name</FormLabel>
                <FormInput placeholder="ex.John Smith" />
                <div
                  style={{
                    display: toggled[0] === true ? 'block' : 'none',
                    width: '100%',
                  }}
                >
                  <FormGrid style={{ padding: 'unset' }}>
                    <FormLabel>Email Address</FormLabel>
                    <FormInput placeholder="ex.John Smith" />
                  </FormGrid>
                </div>
                <div
                  style={{
                    display: toggled[1] === true ? 'block' : 'none',
                    width: '100%',
                  }}
                >
                  <FormGrid style={{ padding: 'unset' }}>
                    <FormLabel>Headline</FormLabel>
                    <FormInput placeholder="ex.John Smith" />
                  </FormGrid>
                </div>
                <div
                  style={{
                    display: toggled[2] === true ? 'block' : 'none',
                    width: '100%',
                  }}
                >
                  <FormGrid style={{ padding: 'unset' }}>
                    <FormLabel>Your Website</FormLabel>
                    <FormInput placeholder="ex.John Smith" />
                  </FormGrid>
                </div>
                <div>
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
                    ) : selectedImage === null && data !== '' ? (
                      <Avatar
                        style={{
                          borderRadius: '50%',
                          border: '1px solid #ddd',
                        }}
                      >
                        <img
                          src={`data:image/png;base64,${data}`}
                          width={'48px'}
                        />
                      </Avatar>
                    ) : (
                      <Avatar
                        style={{
                          borderRadius: '50%',
                          border: '1px solid #ddd',
                        }}
                      >
                        <img src={`../../user.png`} alt="" width={'48px'} />
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
                  </div>
                  <input
                    ref={hiddenFileInput}
                    type="file"
                    multiple=""
                    accept="image/png,image/jpg,image/gif,image/jpeg,image/webp"
                    autocomplete="off"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      console.log(e.target.files[0]);
                      setSelectedImage(e.target.files[0]);
                    }}
                  />
                </div>
                {addingFields.length === 0
                  ? null
                  : addingFields.map((value, index) => {
                      return (
                        <FormGrid>
                          <FormLabel>{addingFields[index]}</FormLabel>
                          <FormInput placeholder="Enter details here" />
                        </FormGrid>
                      );
                    })}
                <DefaultButton primary={priColor}>Submit</DefaultButton>
              </FormGrid>
            </PreviewContainer>
            <PreviewContainer
              style={{ display: visible === 4 ? 'flex' : 'none' }}
            >
              <TopLinkContainer>
                <img
                  src={`../../heart.png`}
                  width="16px"
                  height="16px"
                  style={{ paddingTop: '0.4rem', marginRight: '0.2rem' }}
                />
                <a
                  href="http://tryloya.com"
                  style={{
                    textDecoration: 'unset',
                  }}
                >
                  Powered by Loya
                </a>
              </TopLinkContainer>
              <Grid container style={{ marginTop: '1rem' }}>
                {selectedImage !== null ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    width={'48px'}
                    alt="not found"
                  />
                ) : selectedImage === null && data !== '' ? (
                  <img
                    src={`data:image/png;base64,${data}`}
                    alt=""
                    width={'48px'}
                  />
                ) : (
                  <img src={`../../heart.png`} width={'32px'} />
                )}
              </Grid>
              <Grid container style={{ marginTop: '1rem' }}>
                <PageTitle>{thankTitle}</PageTitle>
              </Grid>
              <Grid
                container
                style={{
                  marginTop: '1rem',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {thankMessage}
              </Grid>
            </PreviewContainer>
          </div>
        )}
      </Grid>
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
}

export default NewForm;
