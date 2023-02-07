import * as React from 'react';
import { Grid, Box, Tab } from '@mui/material';
import PageTitle from '../components/uielements/pageTitle';
import DefaultButton from './uielements/buttons/defaultButton';
import { Navigate, useNavigate } from 'react-router-dom';
import { setAccount } from '../actions/auth';
import FormLabel from './uielements/form/FormLabel';
import FormInput from './uielements/form/FormInput';
import toastr from 'toastr';

const Account = () => {
  const navigate = useNavigate();
  const [fname, setFname] = React.useState('');
  const [lname, setLname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const onHandleClick = () => {
    setAccount(fname + ' ' + lname, email).then(() => {
      localStorage.setItem('user', `"${fname} ${lname}"`);
      navigate('/account');
      toastr.success('Save Changed');
    });
  };
  React.useEffect(async () => {
    let firstName = await JSON.parse(localStorage.getItem('user'))
      .split(' ')
      .slice(0, 1)
      .toString();
    let lastName = await JSON.parse(localStorage.getItem('user'))
      .split(' ')
      .slice(-1)
      .toString();
    let mail = await JSON.parse(localStorage.getItem('email'));
    await setFname(firstName);
    await setLname(lastName);
    await setEmail(mail);
  }, []);
  React.useEffect(() => {}, [fname, lname]);
  return (
    <div
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
      <Grid container>
        <PageTitle>Account and Billing</PageTitle>
      </Grid>
      <Box sx={{ width: '80%', gap: '0.5rem' }}>
        <Grid item style={{ marginTop: '1rem' }}>
          <div style={{ fontSize: '1rem', fontWeight: 500 }}>
            Personal information
          </div>
          <div style={{ fontSize: '0.8rem', color: '#333' }}>
            Provide your name and email so we can get in touch with you.
          </div>
        </Grid>
        <Grid
          container
          spacing={2}
          style={{
            marginTop: '0.25rem',
            paddingLeft: '1rem',
          }}
        >
          <div style={{ width: '50%' }}>
            <FormLabel>First Name</FormLabel>
          </div>
          <div style={{ width: '50%' }}>
            <FormLabel>Last Name</FormLabel>
          </div>
        </Grid>
        <Grid
          container
          spacing={2}
          style={{
            marginTop: '0.25rem',
            paddingLeft: '1rem',
          }}
        >
          <div style={{ width: '50%' }}>
            <FormInput
              value={fname}
              onChange={(e) => {
                setFname(e.target.value);
              }}
            />
          </div>
          <div style={{ width: '50%' }}>
            <FormInput
              value={lname}
              onChange={(e) => {
                setLname(e.target.value);
              }}
            />
          </div>
        </Grid>
        <Grid
          container
          spacing={2}
          style={{
            marginTop: '0.25rem',
            paddingLeft: '1rem',
          }}
        >
          <FormLabel>Email</FormLabel>
        </Grid>
        <Grid
          item
          style={{
            marginTop: '0.25rem',
            gap: '0.5rem',
          }}
        >
          <div style={{ width: '50%' }}>
            <FormInput value={email} disabled={true} />
          </div>
        </Grid>
        <Grid
          container
          style={{
            marginTop: '0.25rem',
            gap: '0.5rem',
          }}
        >
          <div style={{ width: '50%' }}>
            <DefaultButton
              primary="#6701e6"
              onClick={() => {
                onHandleClick();
              }}
            >
              Save Changes
            </DefaultButton>
          </div>
        </Grid>
        <Grid item style={{ marginTop: '1rem', gap: '0.5rem' }}>
          <div style={{ fontSize: '1rem', fontWeight: 500 }}>Billing</div>
          <div style={{ fontSize: '0.8rem', color: '#333' }}>
            Manage your subscription or update your payment details.
          </div>
        </Grid>
        <Grid
          container
          style={{
            marginTop: '0.25rem',
            gap: '0.5rem',
          }}
        >
          <div style={{ width: '50%' }}>
            <DefaultButton
              onClick={() => {
                navigate('/upgrade');
              }}
            >
              Upgrade your plan ✨
            </DefaultButton>
          </div>
        </Grid>
      </Box>
    </div>
  );
};

export default Account;
