import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Auth } from 'aws-amplify';
import toastr from 'toastr';

import { validator } from './Validator';
import useForm from './useForm';
import SignPanel from './SignPanel';

import CssTextField from '../../components/uielements/cssTextField';
import PageTitle from '../../components/uielements/pageTitle';
import Description from '../../components/uielements/description';
import DefaultButton from '../../components/uielements/buttons/defaultButton';

import { Googlesm } from '../../icons/google_sm';
import { Heart as HeartIcon } from '../../icons/heart';

import { login } from '../../actions/auth';
import { getAll } from '../../actions/project';
import FormInput from '../../components/uielements/form/FormInput';
import FormLabel from '../../components/uielements/form/FormLabel';
import FormGrid from '../../components/uielements/form/FormGrid';

const Reset = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const forgotPassword = () => {
    Auth.forgotPassword(username)
      .then((data) => console.log('forgotData=', data))
      .catch((err) => console.log('forgotErr=', err));
    navigate(`/reset_password/${Buffer.from(username).toString('base64')}`);
  };
  React.useEffect(() => {}, [username]);
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
            <FormGrid>
              <HeartIcon />
            </FormGrid>
            <FormGrid>
              <PageTitle>Reset Password</PageTitle>
            </FormGrid>
            <FormGrid>
              <Description>
                Forgot your password? Type in your email address and we'll send
                you a link to reset it.
              </Description>
            </FormGrid>
            <FormGrid>
              <FormLabel>Email</FormLabel>
              <FormInput
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </FormGrid>
            <FormGrid>
              <DefaultButton primary="#6701e6" onClick={forgotPassword}>
                Reset Password
              </DefaultButton>
            </FormGrid>
            <FormGrid>
              <div
                style={{
                  marginBottom: '1rem',
                  marginTop: '1rem',
                  display: 'flex',
                }}
              >
                <Description style={{ marginRight: '1rem' }}>
                  Back to
                </Description>
                <a href="/">Sign in</a>
              </div>
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

export default Reset;
