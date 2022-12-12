import React, { useEffect, useState } from "react";
import { getByFormUrl } from "../../actions/form";
import { createColor } from "material-ui-color";
import { Grid, TextField } from "@mui/material";
import MainButton from "../../components/uielements/buttons/mainButton";
import PageTitle from "../../components/uielements/pageTitle";
import { Camera } from "../../icons/camera";
import PreviewContainer from "../../components/uielements/previewContainer";
import TopLinkContainer from "../../components/uielements/topLinkContainer";
import { FormStyle } from "./index.style";

const FormView = () => {
  const url = window.location.pathname.slice(-6);
  const [visible, setVisible] = React.useState(1);
  const [priColor, setPriColor] = React.useState("");
  const [bgColor, setBgColor] = React.useState("");
  const [logoUrl, setLogoUrl] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [message, setMessage] = React.useState(``);
  const [infor, setInfor] = useState({
    logoUrl: "",
    pColor: "",
    bColor: "",
    prompt: ``,
    collect: 0,
    rating: 0,
    title: "",
    message: ``,
    thankTitle: "",
    thankMessage: ``,
    call: 0,
    textBtn: "",
    linkUrl: "",
    custom: 0,
    directUrl: "",
    key: [],
    value: [],
    avatar: "",
  });
  useEffect(() => {
    getByFormUrl(url).then((res) => {
      setInfor(res.data.data.data);
      setPriColor(createColor(res.data.data.data.pColor));
      setBgColor(createColor(res.data.data.data.bColor));
      setLogoUrl(res.data.data.data.logoUrl);
      setMessage(`${res.data.data.data.message}`);
      setTitle(res.data.data.data.title);
      console.log(res);
    });
  }, []);
  useEffect(() => {}, [visible]);

  return (
    <div
      style={{
        background: `${bgColor}`,
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <PreviewContainer style={{ display: visible === 1 ? "flex" : "none" }}>
        <TopLinkContainer>
          <img
            src={`http://localhost:3000/heart.svg`}
            width="16px"
            height="16px"
            style={{ paddingTop: "0.4rem", marginRight: "0.2rem" }}
          />
          <a
            href="http://localhost:3000"
            style={{
              textDecoration: "unset",
            }}
          >
            Powered by Loya
          </a>
        </TopLinkContainer>
        <Grid container style={{ marginBottom: "1rem" }}>
          <img
            src={`http://localhost:3000/${logoUrl}`}
            width="48px"
            height="48px"
          />
        </Grid>
        <Grid container style={{ marginBottom: "1rem" }}>
          <PageTitle>{title}</PageTitle>
        </Grid>
        <Grid
          container
          style={{
            marginBottom: "1rem",
            whiteSpace: "pre-wrap",
          }}
        >
          {message}
        </Grid>
        <Grid container style={{ marginBottom: "1rem" }}>
          <MainButton
            style={{
              width: "100%",
              alignItem: "center",
              background: { priColor },
              justifyContent: "center",
            }}
          >
            <Camera />
            Record a video
          </MainButton>
        </Grid>
        <Grid container style={{ marginBottom: "1rem" }}>
          <MainButton
            style={{
              width: "100%",
              background: "#f0f0f0",
              justifyContent: "center",
              color: "#222",
            }}
            onClick={() => {
              setVisible(2);
            }}
          >
            Write a review
          </MainButton>
        </Grid>
      </PreviewContainer>
      <PreviewContainer style={{ display: visible === 2 ? "flex" : "none" }}>
        <TopLinkContainer>
          <img
            src={`http://localhost:3000/heart.svg`}
            width="16px"
            height="16px"
            style={{ paddingTop: "0.4rem", marginRight: "0.2rem" }}
          />
          <a
            href="http://localhost:3000"
            style={{
              textDecoration: "unset",
            }}
          >
            Powered by Loya
          </a>
        </TopLinkContainer>
        <Grid container style={{ marginTop: "1rem" }}>
          <img
            src={`http://localhost:3000/${logoUrl}`}
            width="48px"
            height="48px"
          />
        </Grid>
        <Grid container style={{ marginTop: "1rem" }}>
          <PageTitle>Write a text textimonial</PageTitle>
        </Grid>
        <Grid
          container
          style={{
            marginTop: "1rem",
            whiteSpace: "pre-wrap",
          }}
        >
          {infor.prompt}
        </Grid>
        <Grid
          container
          style={{
            marginTop: "1rem",
            whiteSpace: "pre-wrap",
          }}
        >
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={8}
            placeholder="Write something nice ✨"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid container style={{ marginTop: "1rem" }}>
          <MainButton
            style={{
              width: "100%",
              alignItem: "center",
              background: { priColor },
              justifyContent: "center",
            }}
            onClick={() => {
              setVisible(3);
            }}
          >
            <Camera />
            Submit
          </MainButton>
        </Grid>
      </PreviewContainer>
      <PreviewContainer style={{ display: visible === 3 ? "flex" : "none" }}>
        <TopLinkContainer>
          <img
            src={`http://localhost:3000/heart.svg`}
            width="16px"
            height="16px"
            style={{ paddingTop: "0.4rem", marginRight: "0.2rem" }}
          />
          <a
            href="http://localhost:3000"
            style={{
              textDecoration: "unset",
            }}
          >
            Powered by Loya2
          </a>
        </TopLinkContainer>
        <FormStyle style={{ height: "unset" }}>
          <Grid container style={{ marginTop: "1rem" }}>
            <img
              src={`http://localhost:3000/${logoUrl}`}
              width="48px"
              height="48px"
            />
          </Grid>
          <Grid container style={{ marginTop: "1rem" }}>
            <PageTitle>{title}</PageTitle>
          </Grid>
          <form class="mt-5 flex flex-col gap-4 text-black">
            <div class="w-full">
              <label for="name" class="block text-sm font-medium text-gray-800">
                <div class="flex items-center gap-2">
                  Your Name <div></div>
                </div>{" "}
              </label>{" "}
              <div class="flex w-full rounded-md text-sm shadow-sm duration-200 mt-2 ">
                {" "}
                <input
                  name="name"
                  id=""
                  type="text"
                  required=""
                  spellcheck="false"
                  placeholder="ex. John Smith"
                  class=" block flex-grow rounded-r-md border disabled:opacity-60 py-2-5 px-2 text-sm focus:ring-ug-primary focus:border-ug-primary border-gray-300 rounded-md"
                />
              </div>{" "}
            </div>{" "}
            <div class="w-full">
              <label
                for="email"
                class="block text-sm font-medium text-gray-800"
              >
                <div class="flex items-center gap-2">
                  Email address <div></div>
                </div>{" "}
              </label>{" "}
              <div class="flex w-full rounded-md text-sm shadow-sm duration-200 mt-2 ">
                {" "}
                <input
                  name="email"
                  id=""
                  type="email"
                  required=""
                  spellcheck="false"
                  placeholder="john@example.com"
                  class=" block flex-grow rounded-r-md border disabled:opacity-60 py-2-5 px-2 text-sm focus:ring-ug-primary focus:border-ug-primary border-gray-300 rounded-md"
                />
              </div>{" "}
            </div>{" "}
            <div class="w-full">
              <label
                for="headline"
                class="block text-sm font-medium text-gray-800"
              >
                <div class="flex items-center gap-2">
                  Headline <div></div>
                </div>{" "}
              </label>{" "}
              <div class="flex w-full rounded-md text-sm shadow-sm duration-200 mt-2 ">
                {" "}
                <input
                  name="headline"
                  id="headline"
                  type="text"
                  spellcheck="false"
                  placeholder="ex. Founder of Loya"
                  class=" block flex-grow rounded-r-md border disabled:opacity-60 py-2-5 px-2 text-sm focus:ring-ug-primary focus:border-ug-primary border-gray-300 rounded-md"
                />
              </div>{" "}
            </div>{" "}
            <div class="w-full">
              <label for="url" class="block text-sm font-medium text-gray-800">
                <div class="flex items-center gap-2">
                  Your Website <div></div>
                </div>{" "}
              </label>{" "}
              <div class="flex w-full rounded-md text-sm shadow-sm duration-200 mt-2 ">
                {" "}
                <input
                  name="url"
                  id="url"
                  type="url"
                  spellcheck="false"
                  placeholder="https://grandline.com"
                  class=" block flex-grow rounded-r-md border disabled:opacity-60 py-2-5 px-2 text-sm focus:ring-ug-primary focus:border-ug-primary border-gray-300 rounded-md"
                />
              </div>{" "}
            </div>{" "}
            <div class="flex flex-col gap-2">
              <label
                for="avatar"
                class="block text-sm font-medium text-gray-800"
              >
                <div class="flex items-center gap-2">
                  Your Avatar <div></div>
                </div>{" "}
              </label>{" "}
              <div class="flex items-center gap-2">
                <label tabindex="0">
                  <span class="sr-only" aria-label="required">
                    required
                  </span>{" "}
                  <div class="flex items-center gap-2">
                    <img
                      src="https://ik.imagekit.io/senja/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1657796891741"
                      alt=""
                      class="h-10 w-10 rounded-full object-cover"
                    />{" "}
                    <button
                      type="button"
                      class="border shadow-sm rounded-md px-4 py-2 text-sm font-semibold"
                    >
                      Pick an image
                    </button>
                  </div>{" "}
                  <input
                    type="file"
                    multiple=""
                    accept="image/png,image/jpg,image/gif,image/jpeg,image/webp"
                    autocomplete="off"
                    style={{ display: "none" }}
                  />
                </label>{" "}
                <div class="ml-2 text-gray-600"> </div>
              </div>
            </div>{" "}
            <Grid container style={{ marginTop: "1rem" }}>
              <MainButton
                style={{ justifyContent: "center", width: "100%" }}
                onClick={() => {
                  setVisible(4);
                }}
              >
                Submit
              </MainButton>
            </Grid>
          </form>{" "}
        </FormStyle>
      </PreviewContainer>
      <PreviewContainer style={{ display: visible === 4 ? "flex" : "none" }}>
        <TopLinkContainer>
          <img
            src={`http://localhost:3000/heart.svg`}
            width="16px"
            height="16px"
            style={{ paddingTop: "0.4rem", marginRight: "0.2rem" }}
          />
          <a
            href="http://localhost:3000"
            style={{
              textDecoration: "unset",
            }}
          >
            Powered by Loya3
          </a>
        </TopLinkContainer>
        <Grid container style={{ marginTop: "1rem" }}>
          <img
            src={`http://localhost:3000/${logoUrl}`}
            width="48px"
            height="48px"
          />
        </Grid>
        <Grid container style={{ marginTop: "1rem" }}>
          <PageTitle>{infor.thankTitle}</PageTitle>
        </Grid>
        <Grid
          container
          style={{
            marginTop: "1rem",
            whiteSpace: "pre-wrap",
          }}
        >
          {infor.thankMessage}
        </Grid>
      </PreviewContainer>
    </div>
  );
};

export default FormView;
