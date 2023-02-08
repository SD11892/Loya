import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import toastr from 'toastr';

import { getAll, saveIndex } from '../../actions/testimonial';
import { getByWallUrl, saveWall } from '../../actions/wall';

import { Grid, IconButton, Input, Popover } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';

import { DownArrow } from '../../icons/downArrow';
import { Design as DesignIcon } from '../../icons/wall/design';
import { Navigation as NavigationIcon } from '../../icons/wall/navigation';
import { Copy as CopyIcon } from '../../icons/wall/copy';
import { CallToAction as CallToActionIcon } from '../../icons/wall/calltoaction';
import { Close as CloseIcon } from '../../icons/close';
import { Share as ShareIcon } from '../../icons/wall/share';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

import DesignPane from '../../components/wall/DesignPane';
import NavigationPane from '../../components/wall/NavigationPane';
import CopyPane from '../../components/wall/CopyPane';
import CTAPane from '../../components/wall/CTAPane';
import Site from '../../components/wall/Site';
import Sitetwo from '../../components/wall/Sitetwo';
import SiderText from '../../components/uielements/siderText';
import DefaultButton from '../../components/uielements/buttons/defaultButton';
import FormGrid from '../../components/uielements/form/FormGrid';
import EmbedToolButton from '../../components/uielements/buttons/embedToolButton';
import WidgetCard from '../../components/uielements/widgetCard';
import BackwardButton from '../../components/uielements/buttons/backwardButton';
import PageTitle from '../../components/uielements/pageTitle';
import SiderButton from '../../components/uielements/buttons/siderButton';
import MenuButton from '../../components/uielements/buttons/menuButton';
import MainButton from '../../components/uielements/buttons/mainButton';
import { Embed as EmbedIcon } from '../../icons/embed';
import { CopyEmbed as CopyEmbedIcon } from '../../icons/copyEmbed';
import Description from '../../components/uielements/description';

import { isEmpty } from '../../util/isEmpty';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  borderBottom: '1px solid #e5e7eb',
  width: 'inherit',
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

const WallDesign = () => {
  const testimonials = useSelector((state) => state.testimonial.testimonial);

  const url = window.location.pathname.replace(/walls/i, '').replace('//', '');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filter, setFilter] = React.useState('Pick Testimonials');
  const [embed, setEmbed] = React.useState('js');
  const [name, setName] = React.useState('');
  const [theme, setTheme] = React.useState(0);
  const [pColor, setPColor] = React.useState('');
  const [key, setKey] = React.useState([]);
  const [value, setValue] = React.useState([]);
  const [pTitle, setPTitle] = React.useState('');
  const [subTitle, setSubTitle] = React.useState('');
  const [ctaTitle, setCtaTitle] = React.useState('');
  const [ctaUrl, setCtaUrl] = React.useState('');
  const [data, setData] = React.useState(null);
  const [fileName, setFileName] = React.useState('');
  const [type, setType] = React.useState('');
  const [expanded, setExpanded] = React.useState('panel1');
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState([]);
  const [chooseOpen, setChooseOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [ifText, setIfText] = React.useState(0);
  const [openCopySnack, setOpenCopySnack] = React.useState(false);
  const [code, setCode] = React.useState(
    `<div class="loya-frame-embed" data-id="${url}"></div>
<script defer type="text/javascript" src="https://dashboard.tryloya.com/embedTemplate.js"></script>`
  );

  const openPop = Boolean(anchorEl);
  const index = openPop ? 'simple-popover' : undefined;
  const infor = {
    url: '',
    name: '',
    theme: 0,
    pColor: '',
    pTitle: '',
    subTitle: '',
    ctaTitle: '',
    ctaUrl: '',
    data: null,
    fileName: '',
    type: '',
    key: [],
    value: [],
    checked: '',
    public: '',
  };
  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setOpenCopySnack(false);
  };
  const handleEmbedChange = (even, nextView) => {
    setEmbed(nextView);
  };
  const handleChooseClose = () => {
    setChooseOpen(false);
  };
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const userId = localStorage.getItem('userId');
  const projectId = localStorage.getItem('projectId');

  React.useEffect(() => {
    dispatch(getAll());
    getByWallUrl(url)
      .then(async (res) => {
        const result = res.data.data.data;
        console.log('result=', result);

        await setName(result.name);
        await setTheme(result.theme);
        await setPColor(result.pColor);
        await setPTitle(result.pTitle);
        await setSubTitle(result.subTitle);
        await setCtaTitle(result.ctaTitle);
        await setCtaUrl(result.ctaUrl);
        await setData(result.data);
        await setFileName(result.fileName);
        await setType(result.type);
        await setKey(result.key.split(','));
        await setValue(result.value.split(','));
        await setIfText(result.public);
        if (isEmpty(result.checked)) {
          await setChecked(result.checked);
        } else {
          await setChecked(result.checked.split(','));
        }
      })
      .catch((err) => {
        console.log('wallErr=', err);
        alert('Invalid Form');
      });
  }, []);

  const onSave = () => {
    infor.url = url;
    infor.name = name;
    infor.theme = theme;
    infor.pColor = pColor;
    infor.pTitle = pTitle;
    infor.subTitle = subTitle;
    infor.ctaTitle = ctaTitle;
    infor.ctaUrl = ctaUrl;
    infor.key = key;
    infor.value = value;
    infor.checked = checked.toString();
    infor.public = ifText;
    saveWall(infor).then(() => {
      setOpen(true);
    });
  };
  React.useEffect(() => {}, [theme, pColor, key, value, ifText, filter]);

  return (
    <Grid container justifyContent="space-between">
      <Grid
        item
        style={{
          background: '#fff',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          borderRight: '1px solid #e5e7eb',
          width: '24rem',
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
                  navigate('/walls');
                }}
              >
                <SiderText>← Dashboard</SiderText>
              </BackwardButton>
            </Grid>
            <Grid item>
              <IconButton
                style={{ border: '1px solid #ddd' }}
                onClick={() => {
                  infor.name = name;
                  infor.theme = theme;
                  infor.ctaTitle = ctaTitle;
                  infor.key = key;
                  infor.value = value;
                  infor.url = url;
                  infor.ctaUrl = ctaUrl;
                  infor.pColor = pColor;
                  infor.pTitle = pTitle;
                  infor.subTitle = subTitle;
                  infor.url = url;
                  infor.checked = checked.toString();
                  infor.public = ifText;
                  saveWall(infor).then(() => {
                    let path = `/walls/p/${userId}-${projectId}/testimonials/${url}`;
                    navigate(path);
                  });
                }}
              >
                <ShareIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container pt={'2rem'}>
            <Grid item xs={12} style={{ marginBottom: '1rem' }}>
              <Input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
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
              Share your testimonials with your customers using your wall of
              love.
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
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <DesignIcon />
                Design
              </AccordionSummary>
              <AccordionDetails>
                <DesignPane
                  theme={theme}
                  setTheme={setTheme}
                  pColor={pColor}
                  setPColor={setPColor}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <NavigationIcon />
                Navigation
              </AccordionSummary>
              <AccordionDetails>
                <NavigationPane
                  keys={key}
                  setKey={setKey}
                  values={value}
                  setValue={setValue}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <CopyIcon />
                Copy
              </AccordionSummary>
              <AccordionDetails>
                <CopyPane
                  pTitle={pTitle}
                  subTitle={subTitle}
                  setPTitle={setPTitle}
                  setSubTitle={setSubTitle}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <CallToActionIcon />
                Call to action
              </AccordionSummary>
              <AccordionDetails>
                <CTAPane
                  ctaTitle={ctaTitle}
                  ctaUrl={ctaUrl}
                  setCtaTitle={setCtaTitle}
                  setCtaUrl={setCtaUrl}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel5'}
              onChange={handleChange('panel5')}
            >
              <AccordionSummary
                aria-controls="panel5d-content"
                id="panel5d-header"
              >
                <EmbedIcon />
                <div style={{ marginLeft: '1rem' }}>Embed</div>
              </AccordionSummary>
              <AccordionDetails>
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
                      Share your Wall of Love?🥳
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
                              setCode(
                                `https://dashboard.tryloya.com/walls/p/${userId}-${projectId}/testimonials/${url}`
                              );
                            }}
                          >
                            URL
                          </EmbedToolButton>
                        </ToggleButtonGroup>
                        <div style={{ flexGrow: 1 }}></div>
                        <CopyToClipboard
                          text={code}
                          onCopy={() => {
                            toastr.success('Copied to clipboard');
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
              </AccordionDetails>
            </Accordion>
          </Grid>
          <FormGrid>
            <DefaultButton
              primary="#6701e6"
              style={{ padding: '0.5rem', borderRadius: '9999px' }}
              onClick={() => {
                let temp = [];
                setIfText(0);
                if (isEmpty(checked)) {
                  testimonials.map((row, index) => {
                    temp[index] = 'true';
                  });
                  setChecked(temp);
                  setChooseOpen(true);
                } else {
                  setChooseOpen(true);
                }
              }}
            >
              Pick Testimonials
            </DefaultButton>
            <DefaultButton
              style={{ padding: '0.5rem', borderRadius: '9999px' }}
              onClick={onSave}
            >
              Save Changes
            </DefaultButton>
          </FormGrid>
        </div>
      </Grid>
      {theme === 1 ? (
        <Grid
          item
          style={{
            width: 'calc(100% - 24rem)',
            overflowY: 'scroll',
            height: '100vh',
            overflowX: 'unset',
          }}
        >
          <Site
            testimonials={testimonials}
            pColor={pColor}
            keys={key}
            values={value}
            pTitle={pTitle}
            subTitle={subTitle}
            ctaTitle={ctaTitle}
            ctaUrl={ctaUrl}
            checked={checked}
            ifText={ifText}
          />
        </Grid>
      ) : (
        <Grid
          item
          style={{
            width: 'calc(100% - 24rem)',
            overflowY: 'scroll',
            height: '100vh',
            overflowX: 'unset',
            background: 'rgb(240, 237, 230)',
          }}
        >
          <Sitetwo
            testimonials={testimonials}
            checked={checked}
            keys={key}
            values={value}
            pTitle={pTitle}
            subTitle={subTitle}
            ctaTitle={ctaTitle}
            ctaUrl={ctaUrl}
            ifText={ifText}
          />
        </Grid>
      )}
      <Dialog fullScreen open={chooseOpen}>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid
            item
            xs={10}
            style={{
              alignSelf: 'center',
              display: 'flex',
              flexDirection: 'column',
              marginTop: '2rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10rem',
              }}
            >
              <SiderButton
                style={{
                  width: 'unset',
                  marginTop: 'unset',
                  marginBottom: 'unset',
                }}
                onClick={handleClick}
              >
                <PageTitle>{filter}</PageTitle>
                <DownArrow />
              </SiderButton>

              <MainButton
                style={{ height: '2rem', alignSelf: 'center' }}
                onClick={() => {
                  handleChooseClose();
                }}
              >
                Done
              </MainButton>
            </div>
            <div
              style={{
                width: '100%',
                marginTop: '2rem',
              }}
            >
              <div
                style={{
                  gap: '0.5rem',
                  padding: '2rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  height: 'min-content',
                }}
              >
                {testimonials.map((item, index) => {
                  if (
                    !isEmpty(checked) &&
                    (Number(item.status) === 1 ||
                      Number(item.status) === ifText)
                  ) {
                    return (
                      <Card
                        style={{
                          width: '20rem',
                          padding: '1rem',
                          height: 'min-content',
                          color: '#374151',
                          borderRadius: 'unset',
                          boxShadow: '0 1px 2px 0 rgb(0, 0, 0 / 0.05)',
                        }}
                        onClick={() => {
                          let temp = [];
                          temp = JSON.parse(JSON.stringify(checked));
                          if (temp[index] === 'true') {
                            temp[index] = 'false';
                          } else {
                            temp[index] = 'true';
                          }
                          setChecked(temp);
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
                            {item.data !== null ? (
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
                                      ...new Uint8Array(item.data.data)
                                    )
                                  )}`}
                                  width={'60px'}
                                />
                              </Avatar>
                            ) : item.data === null && item.imageUrl !== '' ? (
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
                                alt={`Avatar n°${item + 1}`}
                              >
                                <img
                                  src={item.imageUrl}
                                  width="48px"
                                  height="48px"
                                />
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
                                <img
                                  src={`../../../../../user.png`}
                                  width={'60px'}
                                />
                              </Avatar>
                            )}

                            <div>
                              <div>{item.value.split(',')[0]}</div>
                              <div>
                                {item.key.indexOf('Headline') !== -1
                                  ? item.value.split(',')[
                                      item.key.split(',').indexOf('Headline')
                                    ]
                                  : null}
                              </div>
                            </div>
                            <div
                              style={{
                                alignItems: 'end',
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                              }}
                            >
                              <div
                                style={{
                                  fontSize: '0.875rem',
                                  lineHeight: '1.25rem',
                                  borderRadius: '9999px',
                                  justifyContent: 'center',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  width: 'fit-content',
                                  background:
                                    checked[index] === 'true'
                                      ? '#6701e6'
                                      : '#9CA3AF',
                                }}
                              >
                                {checked[index] === 'true' ? (
                                  <CheckIcon style={{ fill: 'white' }} />
                                ) : (
                                  <CheckIcon style={{ fill: '#333' }} />
                                )}
                              </div>
                            </div>
                          </Grid>
                          <Grid item style={{ marginTop: '0.5rem' }}>
                            <Rating readOnly value={item.rating} />
                          </Grid>
                          <Grid item style={{ marginTop: '0.5rem' }}>
                            {item.content}
                          </Grid>
                          <Grid item style={{ marginTop: '0.5rem' }}>
                            {item.importDate}
                          </Grid>
                        </Grid>
                      </Card>
                    );
                  }
                })}
              </div>
            </div>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Dialog>
      <Popover
        id={index}
        open={openPop}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        style={{ padding: '0.5rem', fontSize: '8px' }}
      >
        <MenuButton
          sx={{ p: 2 }}
          key="1"
          value="1"
          onClick={() => {
            setIfText(0);
            setFilter('Pick Testimonials');
            handleClose();
          }}
        >
          Pick Testimonials
        </MenuButton>
        <MenuButton
          sx={{ p: 2 }}
          key="2"
          value="2"
          onClick={() => {
            setIfText(1);
            setFilter('Public Testimonials');
            handleClose();
          }}
        >
          Public Testimonials
        </MenuButton>
      </Popover>
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
    </Grid>
  );
};

export default WallDesign;
