import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Paper, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Auth } from 'aws-amplify';
import toastr from 'toastr';

import { validator } from './Validator';
import useForm from './useForm';
import SignPanel from './SignPanel';

import CssTextField from '../../components/uielements/cssTextField';
import PageTitle from '../../components/uielements/pageTitle';
import Description from '../../components/uielements/description';
import MainButton from '../../components/uielements/buttons/mainButton';
import BackwardButton from '../../components/uielements/buttons/backwardButton';

import { Googlesm } from '../../icons/google_sm';
import { Heart as HeartIcon } from '../../icons/heart';

import { login } from '../../actions/auth';
import { getAll } from '../../actions/project';
import GoogleLogin, {
  GoogleLogout,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const CLIENT_ID =
  '382447144454-18kdqo71vffauq6c6q2t53bi8u7artae.apps.googleusercontent.com';

const SCOPE = 'https://www.googleapis.com/auth/drive';

const Login = () => {
  // const [user, setUser] = useState(null);
  // const [customState, setCustomState] = useState(null);
  const [loading, setLoading] = useState('false');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const signOutHandler = () => {
    console.log('logged out!');
    setIsSignedIn(false);
  };
  const signInHandler = (response) => {
    console.log(response);
    setIsSignedIn(true);
  };

  const initState = {
    email: '',
    password: '',
  };

  // const handleLogin = async (googleData) => {
  //   console.log("googleData=", googleData);
  //   const res = await fetch("/api/auth/google", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       token: googleData.tokenId,
  //     }),
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   });
  // const data = await res.json();
  // console.log("data=", data);
  // alert(data);
  // store returned user somehow
  // };

  const submit = () => {
    Auth.signIn(state.email, state.password)
      .then((result) => {
        //Success
        console.log(result);
        dispatch(login(state.email, state.password)).then((res) => {
          console.log('res=', res);
          dispatch(getAll()).then((result) => {
            localStorage.setItem(
              'projects',
              JSON.stringify(result.data.projects)
            );
            if (res.CODE === '200') {
              toastr.success('Success LogIn!');
              localStorage.setItem('signIn', true);
              navigate('/testimonials');
            } else {
              toastr.error(res.message);
              console.log(res.message);
            }
          });
        });
      })
      .catch((err) => {
        // Something is Wrong
        if (err.code === 'UserNotConfirmedException') {
          dispatch(login(state.email, state.password)).then((res) => {
            console.log('res=', res);
            if (res.CODE === '200') {
              toastr.success('Success LogIn!');
              localStorage.setItem('signIn', true);
              navigate('/testimonials');
            } else {
              toastr.error(res.message);
              console.log(res.message);
            }
          });
        } else {
          toastr.error(err.message);
          console.log(err);
        }
      });
  };

  const { handleChange, handleSubmit, handleBlur, state, errors } = useForm({
    initState,
    callback: submit,
    validator,
  });

  const { margin, papper } = useStyles();

  let isValidForm =
    Object.values(errors).filter((error) => typeof error !== 'undefined')
      .length === 0;

  return (
    <Grid container>
      <Grid
        item
        spacing={0}
        direction="column"
        alignItems="center"
        xs={6}
        style={{ minHeight: '100vh', display: 'flex' }}
      >
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
          <div
            style={{
              alignSelf: 'center',
              padding: '1rem',
            }}
          >
            <Grid container style={{ marginBottom: '0.5rem' }}>
              <HeartIcon />
            </Grid>
            <Grid container style={{ marginBottom: '1rem' }}>
              <PageTitle>Sign in to Loya</PageTitle>
            </Grid>
            <Grid container style={{ marginBottom: '1rem' }}>
              <Description>
                Loya helps you start collecting, managing and sharing your
                testimonials in minutes, not days.
              </Description>
            </Grid>
            <Grid container style={{ marginBottom: '1rem' }}>
              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <div>
                  {/* EMAIL */}
                  <CssTextField
                    required
                    label="email"
                    name="email"
                    className={margin}
                    defaultValue={state.email}
                    onChange={handleChange}
                    error={errors.email ? true : false}
                    helperText={errors.email}
                    onBlur={handleBlur}
                    style={{
                      width: '100%',
                      padding: 'unset',
                      marginBottom: '1rem',
                    }}
                  />
                  <br />
                  {/* PASSWORD */}
                  <CssTextField
                    required
                    label="password"
                    name="password"
                    type="password"
                    className={margin}
                    defaultValue={state.password}
                    onChange={handleChange}
                    error={errors.password ? true : false}
                    helperText={errors.password}
                    onBlur={handleBlur}
                    style={{ width: '100%' }}
                  />
                </div>
                <div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
                  <MainButton
                    style={{ width: '100%', marginLeft: 'unset' }}
                    disabled={!isValidForm}
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={margin}
                  >
                    Sign in
                  </MainButton>
                </div>
                <div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
                  <GoogleLogin
                    clientId={CLIENT_ID}
                    buttonText="Sign in with Google "
                    onSuccess={signInHandler}
                    onFailure={signInHandler}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    scope={SCOPE}
                  />
                </div>
                <div
                  style={{
                    marginBottom: '1rem',
                    marginTop: '1rem',
                    display: 'flex',
                  }}
                >
                  <Description style={{ marginRight: '1rem' }}>
                    Don't have account?
                  </Description>
                  <a href="/signup">Sign up</a>
                </div>
              </form>
            </Grid>
          </div>
        </div>
      </Grid>
      <Grid item xs={6}>
        <SignPanel />
      </Grid>
    </Grid>
  );
};

export default Login;
