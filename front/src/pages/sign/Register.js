import React, { useState, useRef } from 'react';
import { Button, Grid } from '@material-ui/core';
import toastr from 'toastr';
import { validator } from './Validator';
import useForm from './useForm';
import CssTextField from '../../components/uielements/cssTextField';
import { Heart as HeartIcon } from '../../icons/heart';
import PageTitle from '../../components/uielements/pageTitle';
import Description from '../../components/uielements/description';
import { Auth } from 'aws-amplify';
import { verify } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignPanel from './SignPanel';
import { Googlesm } from '../../icons/google_sm';

import AuthService from '../../services/auth.service';
import FormGrid from '../../components/uielements/form/FormGrid';
import DefaultButton from '../../components/uielements/buttons/defaultButton';

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

  const handleLoginWithProvider = async (provider) => {
    try {
      localStorage.setItem('signIn', true);
      await Auth.federatedSignIn({ provider });
    } catch (e) {
      await Auth.federatedSignIn({ provider });
    }
  };

  let isValidForm =
    Object.values(errors).filter((error) => typeof error !== 'undefined')
      .length === 0;

  return (
    <Grid container>
      <Grid item xs={6} style={{ minHeight: '100vh', display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
          <div
            style={{
              alignSelf: 'center',
              padding: '1rem',
            }}
          >
            <FormGrid>
              <HeartIcon />
            </FormGrid>
            <FormGrid>
              <PageTitle>Sign up to Loya</PageTitle>
            </FormGrid>
            <FormGrid>
              <Description>
                Loya helps you start collecting, managing and sharing your
                testimonials in minutes, not days.
              </Description>
            </FormGrid>
            <FormGrid>
              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <div>
                  {/* EMAIL */}
                  <CssTextField
                    required
                    label="email"
                    name="email"
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
                    defaultValue={state.password}
                    onChange={handleChange}
                    error={errors.password ? true : false}
                    helperText={errors.password}
                    onBlur={handleBlur}
                    style={{ width: '100%' }}
                  />
                </div>
                <div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
                  <DefaultButton
                    primary="#6701e6"
                    disabled={!isValidForm}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Sign up
                  </DefaultButton>
                </div>
                <div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
                  <Button
                    disabled={
                      process.env.REACT_APP_COGNITO_GOOGLE_SIGN_IN === 'enabled'
                        ? false
                        : true
                    }
                    fullWidth
                    startIcon={<Googlesm />}
                    onClick={() => handleLoginWithProvider('Google')}
                    size="large"
                    variant="outlined"
                    color="secondary"
                  >
                    Sign up with Google
                  </Button>
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
            </FormGrid>
          </div>
        </div>
      </Grid>
      <Grid item xs={6}>
        <SignPanel />
      </Grid>
    </Grid>
  );
};

export default Register;
