import * as React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Editor from 'react-simple-code-editor';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { purple } from '@mui/material/colors';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import Badge from '@mui/material/Badge';
import { Drawer } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import Picker from '../../../components/uielements/picker';
import EmbedButton from '../../../components/uielements/buttons/embedButton';
import EmbedToolButton from '../../../components/uielements/buttons/embedToolButton';
import ImageCard from '../../../components/uielements/imageCard';
import WidgetCard from '../../../components/uielements/widgetCard';
import FormLabel from '../../../components/uielements/form/FormLabel';
import PageTitle from '../../../components/uielements/pageTitle';
import Description from '../../../components/uielements/description';

import { LeftArrow as LeftArrowIcon } from '../../../icons/leftArrow';
import { Embed as EmbedIcon } from '../../../icons/embed';
import { Menu as MenuIcon } from '../../../icons/menu';
import { Pencil as PencilIcon } from '../../../icons/pencil';
import { MagicPencil as MagicPencilIcon } from '../../../icons/magicPencil';
import { Switch as SwitchIcon } from '../../../icons/switch';
import { Close as CloseIcon } from '../../../icons/close';
import { CopyEmbed as CopyEmbedIcon } from '../../../icons/copyEmbed';

import {
  getAll,
  saveIndex,
  updateTestimonial,
} from '../../../actions/testimonial';

import { getByFormUrl, saveForm } from '../../../actions/testimonialForm';
import { getById } from '../../../actions/testimonial';

import { createColor } from 'material-ui-color';
import WidgetBubble from '../../../components/widgets/widgetBubble';
import toastr from 'toastr';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: '#05966933',
  borderRadius: '9999px',
  marginLeft: '0.5rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  paddingTop: '0.375rem',
  paddingBottom: '0.375rem',
  fontSize: '0.75rem',
  lineHeight: '1rem',
  fontWeight: '500',
  color: 'rgb(5 150 105)',
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#22C55E',
  '&:hover': {
    backgroundColor: '#27D064',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const infor = {
  url: '',
  shadow: '',
  border: '',
  bgColor: '',
  txtColor: '',
  ratingColor: '',
  bfColor: '',
  blColor: '',
  fgColor: '',
  theme: 1,
};

export default function OnlyOneWidget() {
  const userId = localStorage.getItem('userId');
  const projectId = localStorage.getItem('projectId');
  const [url, setUrl] = React.useState('');
  const [row, setRow] = React.useState(null);
  const [view, setView] = React.useState('theme');
  const [embed, setEmbed] = React.useState('js');
  const [bgColor, setBgColor] = React.useState('');
  const [bfColor, setBfColor] = React.useState('');
  const [blColor, setBlColor] = React.useState('');
  const [fgColor, setFgColor] = React.useState('');
  const [txtColor, setTxtColor] = React.useState('');
  const [ratingColor, setRatingColor] = React.useState('');
  const [theme, setTheme] = React.useState(1);
  const [shadow, setShadow] = React.useState('');
  const [radius, setRadius] = React.useState('');
  const [itemList, setItemList] = React.useState([]);
  const [drawerState, setDrawerState] = React.useState(false);
  const [code, setCode] = React.useState(
    `<div className="loya-frame-embed" data-id="${userId}-${projectId}-${url}"></div>
<script defer type="text/javascript" src="https://dashboard.tryloya.com/embedTemplate.js"></script>`
  );
  const [openSnack, setOpenSnack] = React.useState(false);
  const [openCopySnack, setOpenCopySnack] = React.useState(false);

  const handleChange = (even, nextView) => {
    setView(nextView);
  };
  const handleEmbedChange = (even, nextView) => {
    setEmbed(nextView);
  };
  const handleSave = () => {
    infor.url = url;
    infor.shadow = shadow;
    infor.border = radius;
    infor.bgColor = bgColor;
    infor.txtColor = txtColor;
    infor.ratingColor = ratingColor;
    infor.theme = theme;
    infor.bfColor = bfColor;
    infor.blColor = blColor;
    infor.fgColor = fgColor;
    saveForm(infor).then(() => {
      toastr.success('Saved');
    });
  };

  const handlebgColorChange = (value) => {
    setBgColor(value.css.backgroundColor);
  };
  const handletxtColorChange = (value) => {
    setTxtColor(value.css.backgroundColor);
  };
  const handleratingColorChange = (value) => {
    setRatingColor(value.css.backgroundColor);
  };
  const handleRadiusChange = (value) => {
    setRadius(value.target.value);
  };

  const handleShadowChange = (value) => {
    setShadow(value.target.value);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
    setOpenCopySnack(false);
  };
  React.useEffect(() => {
    let id = localStorage.getItem('testimonialId');
    let widgetUrl = localStorage.getItem('widgetUrl');
    getById(id).then((res) => {
      setRow(res.data.data.fdata);
      setUrl(`${userId}-${projectId}-${widgetUrl}`);
      getByFormUrl(widgetUrl)
        .then((res) => {
          console.log('res=', res);
          const result = res.data.data.data;
          setShadow(result.shadow);
          setRadius(result.border);
          setBgColor(result.bgColor);
          setTxtColor(result.txtColor);
          setRatingColor(result.ratingColor);
          setTheme(result.theme);
          setBlColor(result.blColor);
          setBfColor(result.bfColor);
          setFgColor(result.fgColor);
        })
        .catch((err) => {
          alert('Invalid Form');
        });
    });
  }, []);

  React.useEffect(() => {}, [
    view,
    radius,
    shadow,
    bgColor,
    ratingColor,
    txtColor,
    itemList,
    code,
    theme,
    fgColor,
    bfColor,
    blColor,
    row,
  ]);

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: 'rgb(15,23,42)' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              navigate('/widgets');
            }}
          >
            <LeftArrowIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            Create Widget
          </Typography>
          <Div>⚡ Beta</Div>
          <Typography sx={{ flexGrow: 1 }} />
          <ColorButton
            variant="contained"
            onClick={() => {
              handleSave();
            }}
          >
            Save Changes
          </ColorButton>
          &nbsp;&nbsp;
          <EmbedButton
            variant="contained"
            onClick={() => {
              setDrawerState(true);
            }}
          >
            <EmbedIcon />
            Embed
          </EmbedButton>
          &nbsp;&nbsp;&nbsp;
          <MenuIcon />
        </Toolbar>
      </AppBar>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              float: 'left',
              borderStyle: 'ridge',
              borderRightWidth: '1px',
              borderLeftWidth: '0px',
              borderTopWidth: '0px',
              borderBottomWidth: '0px',
              backgroundColor: 'rgb(249 250 251)',
              paddingLeft: '0.5rem',
              paddingRight: '0.5rem',
              paddingTop: '1rem',
              width: '2.3rem',
              height: '55rem',
            }}
          >
            <ToggleButtonGroup
              orientation="vertical"
              value={view}
              exclusive
              onChange={handleChange}
            >
              <ToggleButton
                value="theme"
                key="theme"
                aria-label="theme"
                size="small"
              >
                <MagicPencilIcon />
              </ToggleButton>
              <ToggleButton
                value="design"
                key="design"
                aria-label="design"
                size="small"
              >
                <PencilIcon />
              </ToggleButton>
              <ToggleButton
                value="setting"
                key="setting"
                aria-label="setting"
                size="small"
              >
                <SwitchIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              float: 'left',
              width: '20rem',
            }}
          >
            {view === 'theme' ? (
              <Paper
                elevation={8}
                style={{
                  width: 'auto',
                  height: 'auto',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
                  gap: '1rem',
                  padding: '0.5rem',
                  boxShadow: 'unset',
                }}
              >
                <ImageCard>
                  <ButtonBase
                    onClick={() => {
                      setBgColor('white');
                      setTxtColor('black');
                      setRatingColor('#FBBF24');
                      setTheme(1);
                      console.log('data=', row);
                    }}
                  >
                    <img
                      alt=""
                      src="../theme1_white.png"
                      style={{ width: '9rem', height: '9rem' }}
                    />
                  </ButtonBase>
                </ImageCard>
                <ImageCard>
                  <ButtonBase
                    onClick={() => {
                      setBgColor('black');
                      setTxtColor('white');
                      setRatingColor('#FBBF24');
                      setTheme(1);
                    }}
                  >
                    <img
                      alt=""
                      src="../theme1_black.png"
                      style={{ width: '9rem', height: '9rem' }}
                    />
                  </ButtonBase>
                </ImageCard>
                <ImageCard>
                  <ButtonBase
                    onClick={() => {
                      setBgColor('#234A46');
                      setTxtColor('white');
                      setRatingColor('#B9E1D8');
                      setTheme(1);
                    }}
                  >
                    <img
                      alt=""
                      src="../theme1_green.png"
                      style={{ width: '9rem', height: '9rem' }}
                    />
                  </ButtonBase>
                </ImageCard>
                <ImageCard>
                  <ButtonBase
                    onClick={() => {
                      setBgColor('#260D5C');
                      setTxtColor('white');
                      setRatingColor('violet');
                      setTheme(1);
                    }}
                  >
                    <img
                      alt=""
                      src="../theme1_violet.png"
                      style={{ width: '9rem', height: '9rem' }}
                    />
                  </ButtonBase>
                </ImageCard>
                <ImageCard>
                  <ButtonBase
                    onClick={() => {
                      setFgColor('white');
                      setBfColor('#6701e6');
                      setBlColor('#85fc78');
                      setTxtColor('black');
                      setRatingColor('#FBBF24');
                      setTheme(2);
                    }}
                  >
                    <img
                      alt=""
                      src="../theme2_white.png"
                      style={{ width: '9rem', height: '9rem' }}
                    />
                  </ButtonBase>
                </ImageCard>
                <ImageCard>
                  <ButtonBase
                    onClick={() => {
                      setFgColor('#1E51EF');
                      setBfColor('#9ffd95');
                      setBlColor('#85fc78');
                      setTxtColor('white');
                      setRatingColor('#FBB24');
                      setTheme(2);
                    }}
                  >
                    <img
                      alt=""
                      src="../theme2_blue.png"
                      style={{ width: '9rem', height: '9rem' }}
                    />
                  </ButtonBase>
                </ImageCard>
              </Paper>
            ) : view === 'design' ? (
              <Paper
                elevation={8}
                style={{
                  displau: 'grid',
                  padding: '1.5rem',
                  width: 'auto',
                  height: 'auto',
                  gap: '1rem',
                  padding: '0.5rem',
                  boxShadow: 'unset',
                }}
              >
                <FormLabel>Background Color</FormLabel>
                <Picker
                  value={createColor(bgColor)}
                  onChange={handlebgColorChange}
                />
                <FormLabel>Text Color</FormLabel>
                <Picker
                  value={createColor(txtColor)}
                  onChange={handletxtColorChange}
                />
                <FormLabel>Rating Color</FormLabel>
                <Picker
                  value={createColor(ratingColor)}
                  onChange={handleratingColorChange}
                />
              </Paper>
            ) : (
              <Paper
                elevation={8}
                style={{
                  width: 'auto',
                  height: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  padding: '1.5rem',
                  boxShadow: 'unset',
                }}
              >
                <FormLabel>Shadow Size</FormLabel>
                <Select
                  onChange={handleShadowChange}
                  value={`${shadow}`}
                  displayEmpty
                >
                  <MenuItem value="none">None</MenuItem>
                  <MenuItem value="small">Small</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="large">Large</MenuItem>
                  <MenuItem value="extra large">Extra Large</MenuItem>
                </Select>
                <FormLabel>Border Radius</FormLabel>
                <Select
                  onChange={handleRadiusChange}
                  value={`${radius}`}
                  displayEmpty
                >
                  <MenuItem value="none">None</MenuItem>
                  <MenuItem value="small">Small</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="large">Large</MenuItem>
                  <MenuItem value="extra large">Extra Large</MenuItem>
                </Select>
              </Paper>
            )}
          </div>
        </div>
        <div
          style={{
            width: '100%',
            background: 'transparent',
          }}
        >
          <div
            style={{
              padding: '2rem',
              height: 'min-content',
            }}
          >
            {theme === 1 && row !== null ? (
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
                        <img src={`../../../../../user.png`} width={'60px'} />
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
                        color: ratingColor,
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
              </WidgetCard>
            ) : theme === 2 && row !== null ? (
              <WidgetBubble
                fgColor={fgColor}
                bgColor={bgColor}
                ratingColor={ratingColor}
                content={row.content}
                rating={row.rating}
                bfColor={bfColor}
                blColor={blColor}
                name={row.value.split(',')[0]}
                txtColor={txtColor}
                headline={
                  row.key.indexOf('Headline') !== -1
                    ? row.value.split(',')[
                        row.key.split(',').indexOf('Headline')
                      ]
                    : null
                }
                data={row.data !== null ? row.data.data : null}
              />
            ) : null}
          </div>
        </div>
      </div>

      <Drawer
        anchor="right"
        key="drawer1"
        open={drawerState}
        onClose={() => {
          setDrawerState(false);
        }}
      >
        <div>
          <Grid
            container
            spacing={1}
            style={{
              padding: '2rem',
              width: '512px',
              height: '140px',
              backgroundColor: '#6701e6',
            }}
          >
            <PageTitle style={{ color: 'white' }}>
              Share your widget?🥳
            </PageTitle>
            <Description style={{ color: '#fff' }}>
              Follow the instructions to embed this on your website
            </Description>
          </Grid>
          <Grid container style={{ padding: '2rem', width: '500px' }}>
            <Grid item style={{ width: '100%' }}>
              Embed on your website
            </Grid>
            <Grid
              item
              style={{
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
                background: 'rgb(55,65,81)',
                overflow: 'hidden',
                width: '100%',
              }}
            >
              <div
                style={{
                  color: '#fff',
                  padding: '0.5rem',
                  gap: '0.5rem',
                  display: 'flex',
                }}
              >
                <ToggleButtonGroup
                  value={embed}
                  onChange={handleEmbedChange}
                  exclusive
                >
                  <EmbedToolButton
                    value="js"
                    key="js"
                    onClick={() => {
                      setCode(
                        `<div className="loya-frame-embed" data-id="${url}"></div>\n<script defer type="text/javascript" src="https://dashboard.tryloya.com/embedTemplate.js"></script>`
                      );
                    }}
                  >
                    Javascript
                  </EmbedToolButton>
                  <EmbedToolButton
                    value="url"
                    key="url"
                    onClick={() => {
                      setCode(window.location.href);
                    }}
                  >
                    URL
                  </EmbedToolButton>
                </ToggleButtonGroup>
                <div style={{ flexGrow: 1 }}></div>
                <CopyToClipboard
                  text={code}
                  onCopy={() => {
                    setOpenCopySnack(true);
                  }}
                >
                  <IconButton>
                    <CopyEmbedIcon stroke="white" />
                  </IconButton>
                </CopyToClipboard>
              </div>
              <div>
                <SyntaxHighlighter
                  id="myInput"
                  language="javascript"
                  style={docco}
                >
                  {code}
                </SyntaxHighlighter>
              </div>
            </Grid>
          </Grid>
        </div>
      </Drawer>
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
          Save Changed
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={openCopySnack}
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
    </Box>
  );
}
