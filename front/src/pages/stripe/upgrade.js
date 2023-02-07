import * as React from 'react';

import { Container } from '@mui/material';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import withWidth from '@material-ui/core/withWidth';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';
// import { HeartBig } from '../../icons/heart_big';

import toRenderProps from 'recompose/toRenderProps';
import PaymentCard from '../../components/uielements/PaymentCard';
import DefaultButton from '../../components/uielements/buttons/defaultButton';
import { useNavigate } from 'react-router-dom';

const Upgrade = () => {
  const freeArray = ['10 testimonials', '1 form', '1 project', '1 embed'];
  const proArray = [
    'Unlimited testimonials',
    'Unlimited forms',
    'Up to 2 Projects',
    'Unlimited embeds',
  ];
  const teamArray = [
    'Unlimited testimonials',
    'Unlimited forms',
    'Up to 5 Projects',
    'Unlimited embeds',
  ];
  const Payment = () => {
    const navigate = useNavigate();
    return (
      <>
        <PaymentCard>
          <div style={{ fontWeight: 500, marginTop: '0.5rem' }}>Free</div>
          <div
            style={{
              letterSpacing: '-0.25rem',
              fontWeight: 800,
              fontSize: '1.875rem',
              lineHeight: '2.25rem',
              marginTop: '0.5rem',
            }}
          >
            $0/month
          </div>
          <div
            style={{
              color: 'rgb(107,114,128)',
              fontSize: '.875rem',
              lineHeight: '1.25rem',
              marginTop: '0.5rem',
            }}
          >
            billed monthly
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <DefaultButton
              primary="#6701e6"
              onClick={async () => {
                await localStorage.setItem('level', 'free');
                navigate('/checkout');
              }}
            >
              Upgrade
            </DefaultButton>
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <List dense={false}>
              {freeArray.map((value, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary={value} />
                </ListItem>
              ))}
            </List>
          </div>
        </PaymentCard>
        <PaymentCard>
          <div style={{ fontWeight: 500, marginTop: '0.5rem' }}>Pro</div>
          <div
            style={{
              letterSpacing: '-0.25rem',
              fontWeight: 800,
              fontSize: '1.875rem',
              lineHeight: '2.25rem',
              marginTop: '0.5rem',
            }}
          >
            $19/month
          </div>
          <div
            style={{
              color: 'rgb(107,114,128)',
              fontSize: '.875rem',
              lineHeight: '1.25rem',
              marginTop: '0.5rem',
            }}
          >
            billed monthly
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <DefaultButton
              primary="#6701e6"
              onClick={async () => {
                await localStorage.setItem('level', 'pro');
                navigate('/checkout');
              }}
            >
              Upgrade
            </DefaultButton>
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <List dense={false}>
              {proArray.map((value, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary={value} />
                </ListItem>
              ))}
            </List>
          </div>
        </PaymentCard>
        <PaymentCard>
          <div style={{ fontWeight: 500, marginTop: '0.5rem' }}>Team</div>
          <div
            style={{
              letterSpacing: '-0.25rem',
              fontWeight: 800,
              fontSize: '1.875rem',
              lineHeight: '2.25rem',
              marginTop: '0.5rem',
            }}
          >
            $59/month
          </div>
          <div
            style={{
              color: 'rgb(107,114,128)',
              fontSize: '.875rem',
              lineHeight: '1.25rem',
              marginTop: '0.5rem',
            }}
          >
            billed monthly
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <DefaultButton
              primary="#6701e6"
              onClick={async () => {
                await localStorage.setItem('level', 'team');
                navigate('/checkout');
              }}
            >
              Upgrade
            </DefaultButton>
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <List dense={false}>
              {teamArray.map((value, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary={value} />
                </ListItem>
              ))}
            </List>
          </div>
        </PaymentCard>
      </>
    );
  };
  const WithWidth = toRenderProps(withWidth());
  const [justify, setJustify] = React.useState('flex-start');

  return (
    <div style={{ overflowY: 'auto', height: '100vh' }}>
      <Container
        style={{ marginTop: '3rem', maxWidth: '72rem', marginBottom: '3rem' }}
      >
        <Container style={{ textAlign: 'center' }}>
          {/* <HeartBig /> */}
        </Container>
        <Container
          style={{ fontSize: '2.5rem', textAlign: 'center', padding: '1rem' }}
        >
          Turn your testimonials into your most powerful marketing tool.
        </Container>
        <Container
          style={{
            fontSize: '1.5rem',
            color: '#444',
            textAlign: 'center',
            padding: '1rem',
          }}
        >
          Upgrade your plan to get much more out of Loya.
        </Container>
        <Container
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <RadioGroup
            row
            onChange={(event) => setJustify(event.target.value)}
            value={justify}
            sx={{
              padding: '4px',
              borderRadius: '9999px',
              bgcolor: 'rgb(228 228 231 / 1)',
              '--RadioGroup-gap': '4px',
              '--Radio-action-radius': '8px',
              minHeight: 32,
            }}
          >
            <Radio
              key={'flex-start'}
              color="neutral"
              value={'flex-start'}
              disableIcon
              label={'Pay monthly'}
              variant="plain"
              sx={{
                px: 2,
                alignItems: 'center',
                borderRadius: '9999px',
              }}
              slotProps={{
                action: ({ checked }) => ({
                  sx: {
                    ...(checked && {
                      bgcolor: '#fff',
                      boxShadow: 'md',
                      borderRadius: '9999px',
                      '&:hover': {
                        borderRadius: '9999px',
                        background: '#fff',
                      },
                      '&:active': {
                        borderRadius: '9999px',
                        background: '#fff',
                      },
                      '&:focus': {
                        borderRadius: '9999px',
                        background: '#fff',
                      },
                    }),
                  },
                }),
              }}
            />
            <Radio
              key={'flex-end'}
              color="neutral"
              value={'flex-end'}
              disableIcon
              label={'Pay Annually ✨ 2 months free'}
              variant="plain"
              sx={{
                px: 2,
                alignItems: 'center',
                borderRadius: '9999px',
              }}
              slotProps={{
                action: ({ checked }) => ({
                  sx: {
                    ...(checked && {
                      bgcolor: '#fff',
                      boxShadow: 'md',
                      borderRadius: '9999px',
                      '&:hover': {
                        borderRadius: '9999px',
                        background: '#fff',
                      },
                      '&:active': {
                        borderRadius: '9999px',
                        background: '#fff',
                      },
                      '&:focus': {
                        borderRadius: '9999px',
                        background: '#fff',
                      },
                    }),
                  },
                }),
              }}
            />
          </RadioGroup>
        </Container>
        <Container style={{ marginTop: '1rem' }}>
          <WithWidth>
            {({ width }) =>
              width === 'lg' || width === 'xl' ? (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
                    gap: '1rem',
                  }}
                >
                  <Payment />
                </div>
              ) : (
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <Payment />
                </div>
              )
            }
          </WithWidth>
        </Container>
      </Container>
    </div>
  );
};

export default Upgrade;
