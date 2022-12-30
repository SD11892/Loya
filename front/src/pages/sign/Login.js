import React, { useState, useRef } from "react";
import { Paper, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { validator } from "./Validator";
import useForm from "./useForm";
import CssTextField from "../../components/uielements/cssTextField";
import { Heart as HeartIcon } from "../../icons/heart";
import PageTitle from "../../components/uielements/pageTitle";
import Description from "../../components/uielements/description";
import MainButton from "../../components/uielements/buttons/mainButton";
import BackwardButton from "../../components/uielements/buttons/backwardButton";
import { login } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignPanel from "./SignPanel";
import { Googlesm } from "../../icons/google_sm";

import { getAll } from "../../actions/project";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const Login = () => {
  const [loading, setLoading] = useState("false");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initState = {
    email: "",
    password: "",
  };

  const submit = () => {
    dispatch(login(state.email, state.password)).then((res) => {
      if (res.CODE === "200") {
        localStorage.setItem("signIn", true);
        localStorage.setItem("userId", res.data.id);
        dispatch(getAll()).then((result) => {
          localStorage.setItem(
            "projects",
            JSON.stringify(result.data.projects)
          );
          navigate("/testimonials");
        });
      } else {
        alert("Invalid User or password");
        // console.log("Invalid");
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
                  <BackwardButton
                    style={{ width: "100%", marginLeft: "unset" }}
                    disabled={!isValidForm}
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={margin}
                  >
                    <Googlesm />
                    Sign in with Google
                  </BackwardButton>
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
