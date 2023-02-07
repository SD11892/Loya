import React, { useState, useEffect } from 'react';

import { Grid } from '@material-ui/core';
import { Auth } from 'aws-amplify';
import toastr from 'toastr';

import SignPanel from './SignPanel';

import PageTitle from '../../components/uielements/pageTitle';
import Description from '../../components/uielements/description';
import DefaultButton from '../../components/uielements/buttons/defaultButton';

// import { Heart as HeartIcon } from '../../icons/heart';

import { update } from '../../actions/auth';
import FormInput from '../../components/uielements/form/FormInput';
import FormLabel from '../../components/uielements/form/FormLabel';
import FormGrid from '../../components/uielements/form/FormGrid';

const NewPassword = () => {
  const [username, setUsername] = useState('');
  const [fields, setFields] = useState({
    code: '',
    password: '',
    confirmPassword: '',
  });
  useEffect(() => {
    let url = window.location.pathname
      .replace(/\//g, '')
      .replace('reset_password', '');
    setUsername(Buffer.from(url, 'base64').toString());
  }, []);

  function validateResetForm() {
    return (
      fields.code.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  async function handleConfirmClick(event) {
    event.preventDefault();

    try {
      await Auth.forgotPasswordSubmit(
        username,
        fields.code,
        fields.password
      ).then((data) => {
        update(username, fields.password).then((res) => {
          if (res.CODE === 200) {
            toastr.success(data);
          } else {
            toastr.error('Try again later');
          }
        });
      });
    } catch (error) {
      toastr.error('Incorrect code');
    }
  }

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
            <form onSubmit={handleConfirmClick}>
              <FormGrid>{/* <HeartIcon /> */}</FormGrid>
              <FormGrid>
                <PageTitle>Reset Your Password</PageTitle>
              </FormGrid>
              <FormGrid>
                <FormLabel>Code</FormLabel>
                <FormInput
                  type="tel"
                  value={fields.code}
                  onChange={(e) => {
                    setFields({ ...fields, code: e.target.value });
                  }}
                />
                <FormLabel>New Password</FormLabel>
                <FormInput
                  type="password"
                  value={fields.password}
                  onChange={(e) => {
                    setFields({ ...fields, password: e.target.value });
                  }}
                />
                <FormLabel>Confirm Password</FormLabel>
                <FormInput
                  type="password"
                  value={fields.confirmPassword}
                  onChange={(e) => {
                    setFields({ ...fields, confirmPassword: e.target.value });
                  }}
                />
              </FormGrid>
              <FormGrid>
                <DefaultButton
                  primary="#6701e6"
                  type="submit"
                  disabled={!validateResetForm()}
                >
                  Save
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
            </form>
          </div>
        </div>
      </Grid>
      <Grid item xs={6}>
        <SignPanel />
      </Grid>
    </Grid>
  );
};

export default NewPassword;
