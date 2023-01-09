import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Paper, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Auth } from "aws-amplify";
import toastr from "toastr";

import { validator } from "./Validator";
import useForm from "./useForm";
import SignPanel from "./SignPanel";

import CssTextField from "../../components/uielements/cssTextField";
import PageTitle from "../../components/uielements/pageTitle";
import Description from "../../components/uielements/description";
import MainButton from "../../components/uielements/buttons/mainButton";
import BackwardButton from "../../components/uielements/buttons/backwardButton";

import { Googlesm } from "../../icons/google_sm";
import { Heart as HeartIcon } from "../../icons/heart";

import { login } from "../../actions/auth";
import { getAll } from "../../actions/project";
import { GoogleLogin } from "react-google-login";

//import { gapi } from "gapi-script";
import AWS from "aws-sdk";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const CLIENT_ID =
  "382447144454-18kdqo71vffauq6c6q2t53bi8u7artae.apps.googleusercontent.com";

const Login = () => {
  // const [user, setUser] = useState(null);
  // const [customState, setCustomState] = useState(null);
  const [loading, setLoading] = useState("false");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const signOutHandler = () => {
    console.log("logged out!");
    setIsSignedIn(false);
  };
  const signInHandler = (response) => {
    console.log(response);
    setIsSignedIn(true);
  };

  const initState = {
    email: "",
    password: "",
  };

  // React.useEffect(() => {
  //   const initClient = () => {
  //     gapi.client.init({
  //       clientId: CLIENT_ID,
  //       scope: "",
  //     });
  //   };
  //   gapi.load("client:auth2", initClient);
  // }, []);

  const submit = () => {
    Auth.signIn(state.email, state.password)
      .then((result) => {
        //Success
        console.log(result);
        dispatch(login(state.email, state.password)).then((res) => {
          console.log("res=", res);
          dispatch(getAll()).then((result) => {
            localStorage.setItem(
              "projects",
              JSON.stringify(result.data.projects)
            );
            if (res.CODE === "200") {
              toastr.success("Success LogIn!");
              localStorage.setItem("signIn", true);
              navigate("/testimonials");
            } else {
              toastr.error(res.message);
              console.log(res.message);
            }
          });
        });
      })
      .catch((err) => {
        // Something is Wrong
        if (err.code === "UserNotConfirmedException") {
          dispatch(login(state.email, state.password)).then((res) => {
            console.log("res=", res);
            if (res.CODE === "200") {
              toastr.success("Success LogIn!");
              localStorage.setItem("signIn", true);
              navigate("/testimonials");
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
  const handleLoginWithProvider = async (provider) => {
    try {
      await Auth.federatedSignIn({ provider });
    } catch (e) {
      console.log(e);
      console.log(provider);
      await Auth.federatedSignIn({ provider });
    }
  };
  const { margin, papper } = useStyles();

  let isValidForm =
    Object.values(errors).filter((error) => typeof error !== "undefined")
      .length === 0;

  return (
    <Grid container>
      <Grid
        item
        spacing={0}
        direction="column"
        alignItems="center"
        xs={6}
        style={{ minHeight: "100vh", display: "flex" }}
      >
        <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
          <div
            style={{
              alignSelf: "center",
              padding: "1rem",
            }}
          >
            <Grid container style={{ marginBottom: "0.5rem" }}>
              <HeartIcon />
            </Grid>
            <Grid container style={{ marginBottom: "1rem" }}>
              <PageTitle>Sign in to Loya</PageTitle>
            </Grid>
            <Grid container style={{ marginBottom: "1rem" }}>
              <Description>
                Loya helps you start collecting, managing and sharing your
                testimonials in minutes, not days.
              </Description>
            </Grid>
            <Grid container style={{ marginBottom: "1rem" }}>
              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
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
                      width: "100%",
                      padding: "unset",
                      marginBottom: "1rem",
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
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                  <MainButton
                    style={{ width: "100%", marginLeft: "unset" }}
                    disabled={!isValidForm}
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={margin}
                  >
                    Sign in
                  </MainButton>
                </div>
                <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                  <Button
                    disabled={
                      process.env.REACT_APP_COGNITO_GOOGLE_SIGN_IN === "enabled"
                        ? false
                        : true
                    }
                    fullWidth
                    startIcon={<Googlesm />}
                    onClick={() => handleLoginWithProvider("Google")}
                    size="large"
                    variant="outlined"
                    color="secondary"
                  >
                    Sign in with Google
                  </Button>
                  {/* <GoogleLogin
                    clientId={CLIENT_ID}
                    buttonText="Sign in with Google"
                    onSuccess={(response) => {
                      //EXAMPLE LINKING TO EXISTING ACCOUNT!

                      console.log(response);
                      // Obtain AWS credentials
                      AWS.config.credentials.get(function () {
                        // Access AWS resources here.
                        AWS.config.credentials =
                          new AWS.CognitoIdentityCredentials({
                            IdentityPoolId: "us-east-1_DImUs1AQw",
                            IdentityId:
                              "us-east-1:f6dc6234-da5d-41df-8112-52abfeada210",
                            Logins: {
                              ...AWS.config.credentials.params.Logins,
                              "accounts.google.com": response.tokenId,
                            },
                          });
                        AWS.config.credentials.get(function (err) {
                          console.log("-----------err2:", err);
                          //account linked
                        });
                      });
                    }}
                    onFailure={(f) =>
                      console.log("-------------------err3:", f)
                    }
                    cookiePolicy={"single_host_origin"}
                  /> */}
                </div>
                <div
                  style={{
                    marginBottom: "1rem",
                    marginTop: "1rem",
                    display: "flex",
                  }}
                >
                  <Description style={{ marginRight: "1rem" }}>
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
