import React, { useState, useRef } from 'react';
import { Paper, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import toastr from 'toastr';
import { validator } from './Validator';
import useForm from './useForm';
import CssTextField from '../../components/uielements/cssTextField';
import { Heart as HeartIcon } from '../../icons/heart';
import PageTitle from '../../components/uielements/pageTitle';
import Description from '../../components/uielements/description';
import MainButton from '../../components/uielements/buttons/mainButton';
import BackwardButton from '../../components/uielements/buttons/backwardButton';
import { verify } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignPanel from './SignPanel';
import { Googlesm } from '../../icons/google_sm';

import AuthService from '../../services/auth.service';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const Register = () => {
  const navigate = useNavigate();

  const initState = {
    email: '',
    password: '',
  };

  const submit = () => {
    ////////////need change
    verify(state.email)
      .then((res) => {
        if (res.CODE === '400') {
          toastr.warning('Already in use');
        } else {
          localStorage.setItem('email', state.email);
          localStorage.setItem('password', state.password);
          navigate('/profile');
        }
      })
      .catch((err) => {
        console.log(err);
      });

    //localstorage
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
        justify="center"
        xs={6}
        style={{ minHeight: '100vh', display: 'flex' }}
      >
        <div>
          <Grid container style={{ marginBottom: '0.5rem' }}>
            <HeartIcon />
          </Grid>
          <Grid container style={{ marginBottom: '1rem' }}>
            <PageTitle>Sign up to Loya</PageTitle>
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
                  Sign up
                </MainButton>
              </div>
              <div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
                <BackwardButton
                  style={{ width: '100%', marginLeft: 'unset' }}
                  disabled={!isValidForm}
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={margin}
                >
                  <Googlesm />
                  Sign up with Google
                </BackwardButton>
              </div>
              <div
                style={{
                  marginBottom: '1rem',
                  marginTop: '1rem',
                  display: 'flex',
                }}
              >
                <Description style={{ marginRight: '1rem' }}>
                  Already have an account?
                </Description>
                <a href="/">Sign in</a>
              </div>
            </form>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={6}>
        <SignPanel />
      </Grid>
    </Grid>
  );
};

export default Register;
