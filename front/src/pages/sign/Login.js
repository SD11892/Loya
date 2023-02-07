import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Grid, Portal } from '@material-ui/core';
import { Auth } from 'aws-amplify';
import toastr from 'toastr';

import { validator } from './Validator';
import useForm from './useForm';
import SignPanel from './SignPanel';

import CssTextField from '../../components/uielements/cssTextField';
import PageTitle from '../../components/uielements/pageTitle';
import Description from '../../components/uielements/description';
import FormGrid from '../../components/uielements/form/FormGrid';

import { Googlesm } from '../../icons/google_sm';
// import { Heart as HeartIcon } from '../../icons/heart';

import { login } from '../../actions/auth';
import { getAll } from '../../actions/project';
import DefaultButton from '../../components/uielements/buttons/defaultButton';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initState = {
    email: '',
    password: '',
  };

  const submit = async () => {
    await Auth.signIn(state.email, state.password)
      .then(async (result) => {
        console.log('result=', result);
        await dispatch(login(state.email, state.password))
          .then((res) => {
            console.log('res=', res);
            if (res.CODE === 200) {
              dispatch(getAll())
                .then((result) => {
                  let projectId = result.data.projects[0].id;
                  toastr.success('Success Login!');
                  localStorage.setItem('signIn', true);
                  localStorage.setItem('projectId', projectId);
                  navigate('/testimonials');
                })
                .catch((projectErr) => {
                  console.log('ProjectErr=', projectErr);
                });
            } else {
              /////////////////Cognito passed, Database failed////////////////////////
              navigate('/profile');
            }
          })
          .catch((erro) => {
            /////////////////Cognito passed, Database failed////////////////////////
            toastr.error(erro.message);
          });
      })
      .catch((err) => {
        toastr.error('Incorrect Email');
        // Something is Wrong
      });
  };

  const { handleChange, handleBlur, state, errors } = useForm({
    initState,
    validator,
  });
  const handleLoginWithProvider = (provider) => {
    try {
      Auth.federatedSignIn({ provider });
    } catch (e) {
      Auth.federatedSignIn({ provider });
    }
  };

  let isValidForm =
    Object.values(errors).filter((error) => typeof error !== 'undefined')
      .length === 0;

  return (
    <Grid container style={{ alignItems: 'center', flexDirection: 'column' }}>
      <Grid item xs={6} style={{ minHeight: '100vh', display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
          <div
            style={{
              alignSelf: 'center',
              padding: '1rem',
            }}
          >
            <FormGrid>{/* <HeartIcon /> */}</FormGrid>
            <FormGrid>
              <PageTitle>Sign in to Loya</PageTitle>
            </FormGrid>
            <FormGrid>
              <Description>
                Loya helps you start collecting, managing and sharing your
                testimonials in minutes, not days.
              </Description>
            </FormGrid>
            <FormGrid>
              <form style={{ width: '100%' }}>
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
                <DefaultButton
                  primary="#6701e6"
                  disabled={!isValidForm}
                  variant="contained"
                  onClick={submit}
                >
                  Sign In
                </DefaultButton>

                <a href="/reset_password">Forgot Password?</a>
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
                    Sign in with Google
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
                    Don't have account?
                  </Description>
                  <a href="/signup">Sign up</a>
                </div>
              </form>
            </FormGrid>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
