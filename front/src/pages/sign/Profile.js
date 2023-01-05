import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "./useForm";
import { ProfileStyle } from "./Profile.style";
import { register } from "../../actions/auth";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import toastr from "toastr";
import { validator } from "./Validator";
import { Button } from "@mui/material";
import DefaultButton from "../../components/uielements/buttons/defaultButton";
import FormGrid from "../../components/uielements/form/FormGrid";
import { createForm } from "../../actions/form";

import { Auth } from "aws-amplify";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initState = {
    fname: "",
    lname: "",
    projectName: "",
    projectUrl: "",
    collectedopt: "",
    discovery: "",
    goal: "",
  };

  const submit = () => {
    localStorage.setItem("project", state.projectName);
    localStorage.setItem("user", state.fname + " " + state.lname);
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const data = {
      email,
      password,
      username: state.fname + " " + state.lname,
      project: state.projectName,
    };
    console.log("proData=", data);

    Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
        given_name: state.fname,
        family_name: state.lname,
      },
    })
      .then((user) => {
        dispatch(
          register(data.username, data.email, data.password, data.project)
        )
          .then((res) => {
            console.log("here");
            navigate("/complete");
          })
          .catch((err) => {
            toastr.warning("Already in");
          });
      })
      .catch((err) => {
        // Something is Wrong
        if (err.code === "UserNotConfirmedException") {
          dispatch(
            register(data.username, data.email, data.password, data.project)
          )
            .then((res) => {
              console.log("here");
              navigate("/complete");
            })
            .catch((err) => {
              toastr.warning("Already in");
            });
        } else {
          toastr.error(err.message);
          console.log(err);
        }
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
    Object.values(errors).filter((error) => typeof error !== "undefined")
      .length === 0;

  return (
    <ProfileStyle>
      <div
        className="from-primary via-primary-300 to-primary-50 absolute -right-[30%] left-0 top-0 h-[75%] bg-gradient-to-tr isLoaded"
        style={{ clipPath: "polygon(0px 0px, 0px 100%, 100% 0px)" }}
      >
        <canvas
          id="gradient-canvas"
          data-transition-in=""
          className="svelte-d7s5y8 isLoaded"
          width="1387"
          height="600"
        ></canvas>
      </div>
      <div className="absolute inset-0 overflow-y-auto py-8 px-8">
        <div className="flex h-full flex-col">
          <div class="mx-auto my-auto w-full max-w-34rem rounded-2xl bg-white px-8 py-8 shadow-xl">
            <svg
              width="54px"
              height="54px"
              className=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 257.84 222.51"
            >
              <defs></defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="cls-1"
                    d="M239.53,111.88,128.9,222.51,93.62,187.23h0L35.36,129l0,0L18.3,111.83a62.5,62.5,0,0,1,0-88.38l5.17-5.15a62.51,62.51,0,0,1,88.38,0l17.09,17.09,17.06-17a62.42,62.42,0,0,1,88.36,0l5.17,5.16A62.49,62.49,0,0,1,239.53,111.88Z"
                  ></path>
                  <path
                    className="cls-2"
                    d="M204.24,76.59,93.65,187.18l0,0h0L35.36,129l0,0L18.3,111.83a62.5,62.5,0,0,1,0-88.38l5.17-5.15a62.51,62.51,0,0,1,88.38,0l17.09,17.09,17.06-17A62.47,62.47,0,0,1,216.66,5.91,62.5,62.5,0,0,1,204.24,76.59Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M128.94,35.39c-17.51,22-37.38,36.89-57.62,39.78a37.72,37.72,0,1,1-8-74.89C65.11.12,66.87,0,68.61,0A62.22,62.22,0,0,1,111.85,18.3Z"
                  ></path>
                </g>
              </g>
            </svg>
            <div className="mt-8">
              <h1 className="text-2xl font-semibold">Welcome to Loya 👋</h1>
              <form
                className="mt-6 flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-4 sm-flex-row">
                  <div className="w-full">
                    <label for="fname" className="block text-sm font-medium">
                      <div className="flex items-center gap-2">
                        First Name <div></div>
                      </div>{" "}
                    </label>{" "}
                    <div className="flex w-full rounded-md text-sm shadow-sm duration-200 mt-2 ">
                      {" "}
                      <input
                        name="fname"
                        id=""
                        type="text"
                        required=""
                        spellcheck="false"
                        placeholder="Johannes"
                        className=" block flex-grow rounded-r-md border disabled:opacity-60 py-2-5 px-2 text-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                        onChange={handleChange}
                      />
                    </div>{" "}
                  </div>{" "}
                  <div className="w-full">
                    <label for="lname" className="block text-sm font-medium">
                      <div className="flex items-center gap-2">
                        Last Name <div></div>
                      </div>{" "}
                    </label>{" "}
                    <div className="flex w-full rounded-md text-sm shadow-sm duration-200 mt-2 ">
                      {" "}
                      <input
                        name="lname"
                        id=""
                        type="text"
                        required=""
                        spellcheck="false"
                        placeholder="Gutenberg"
                        onChange={handleChange}
                        className=" block flex-grow rounded-r-md border disabled:opacity-60 py-2-5 px-2 text-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                      />
                    </div>{" "}
                  </div>
                </div>{" "}
                <div className="w-full">
                  <label
                    for="projectName"
                    className="block text-sm font-medium"
                  >
                    <div className="flex items-center gap-2">
                      Website Name <div></div>
                    </div>{" "}
                  </label>{" "}
                  <div className="flex w-full rounded-md text-sm shadow-sm duration-200 mt-2 ">
                    {" "}
                    <input
                      name="projectName"
                      id=""
                      type="text"
                      required=""
                      spellcheck="false"
                      placeholder="ex. Loya"
                      onChange={handleChange}
                      className=" block flex-grow rounded-r-md border disabled:opacity-60 py-2-5 px-2 text-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                    />
                  </div>{" "}
                </div>{" "}
                <div className="w-full">
                  <label for="projectUrl" className="block text-sm font-medium">
                    <div className="flex items-center gap-2">
                      Website URL <div></div>
                    </div>{" "}
                  </label>{" "}
                  <div className="flex w-full rounded-md text-sm shadow-sm duration-200 mt-2 ">
                    {" "}
                    <input
                      name="projectUrl"
                      id=""
                      type="text"
                      required=""
                      onChange={handleChange}
                      spellcheck="false"
                      placeholder="https://Loya.io"
                      className=" block flex-grow rounded-r-md border disabled:opacity-60 py-2-5 px-2 text-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                    />
                  </div>{" "}
                </div>{" "}
                <div className="w-full">
                  <label
                    for="collectedopt"
                    className="block text-sm font-medium"
                  >
                    <div className="flex items-center gap-2">
                      Do you already have testimonials? <div></div>
                    </div>{" "}
                  </label>{" "}
                  <select
                    name="collectedopt"
                    required=""
                    class="focus:ring-primary focus:border-primary mt-2 block  w-full appearance-none rounded-md px-2 py-2-5 text-sm shadow-sm bg-white text-gray-900 border-gray-300 invalid:text-gray-500"
                    onChange={handleChange}
                  >
                    <option value="" disabled="">
                      Select an option{" "}
                    </option>
                    <option value="true">Yes </option>
                    <option value="false">No </option>
                  </select>
                </div>{" "}
                <div className="w-full">
                  <label for="discovery" className="block text-sm font-medium">
                    <div className="flex items-center gap-2">
                      How did you hear about us? <div></div>
                    </div>{" "}
                  </label>{" "}
                  <select
                    name="discovery"
                    required=""
                    className="focus:ring-primary focus:border-primary mt-2 block  w-full appearance-none rounded-md px-2 py-2-5 text-sm shadow-sm bg-white text-gray-900 border-gray-300 invalid:text-gray-500"
                    onChange={handleChange}
                  >
                    <option value="" disabled="">
                      Select an option{" "}
                    </option>
                    <option value="search_engine">Search Engine </option>
                    <option value="twitter">Twitter </option>
                    <option value="product_hunt">Product Hunt </option>
                    <option value="linkedin">Linkedin </option>
                    <option value="facebook">Facebook </option>
                    <option value="reddit">Reddit </option>
                    <option value="youtube">Youtube </option>
                    <option value="tiktok">Tiktok </option>
                    <option value="podcast">Podcast </option>
                    <option value="indie_hackers">Indie Hackers </option>
                    <option value="recommendation">Recommendation </option>
                    <option value="other">Other </option>
                  </select>
                </div>{" "}
                <div className="w-full">
                  <label for="goal" className="block text-sm font-medium">
                    <div className="flex items-center gap-2">
                      Tell us what you hope to achieve with Loya <div></div>
                    </div>{" "}
                  </label>{" "}
                  <textarea
                    name="goal"
                    placeholder="One sentence is fine"
                    onChange={handleChange}
                    className=" focus:ring-primary focus:border-primary mt-2 block w-full appearance-none rounded-md border-gray-300 py-2-5 text-sm shadow-sm"
                  ></textarea>
                </div>{" "}
                <FormGrid>
                  <DefaultButton disabled={!isValidForm} onClick={submit}>
                    Next
                  </DefaultButton>
                </FormGrid>
              </form>
            </div>
          </div>{" "}
          <div className="h-8 flex-none"></div>
        </div>
      </div>
    </ProfileStyle>
  );
};

export default Profile;
