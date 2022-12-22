import React, { useEffect, useState } from "react";
import { getByFormUrl } from "../../actions/form";
import { createColor } from "material-ui-color";
import { Grid, TextField, Rating } from "@mui/material";
import MainButton from "../../components/uielements/buttons/mainButton";
import PageTitle from "../../components/uielements/pageTitle";
import { Camera as CameraIcon } from "../../icons/camera";
import PreviewContainer from "../../components/uielements/previewContainer";
import TopLinkContainer from "../../components/uielements/topLinkContainer";
import { FormStyle } from "./index.style";
import { createTestimonial, getAll } from "../../actions/testimonial";
import { useDispatch, useSelector } from "react-redux";
import { DefaultButton } from "../../components/uielements/styles/Button.style";

const FormView = () => {
  const url = window.location.pathname.slice(-6);
  const [visible, setVisible] = React.useState(1);
  const [data, setData] = useState("");
  const [priColor, setPriColor] = React.useState("");
  const [bgColor, setBgColor] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [message, setMessage] = React.useState(``);
  const [prompt, setPrompt] = React.useState(``);
  const [addingFields, setAddingFields] = React.useState([]);
  const [key, setKey] = React.useState([]);
  const [inputingFields, setInputingFields] = React.useState([
    "Your Name",
    "Email Address",
    "Headline",
    "Your Website",
  ]);
  const [thankTitle, setThankTitle] = React.useState(``);
  const [thankMessage, setThankMessage] = React.useState(``);
  const [content, setContent] = React.useState(``);
  const [values, setValues] = React.useState([]);
  const [rating, setRating] = React.useState(0);
  const [checked, setChecked] = React.useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const hiddenFileInput = React.useRef(null);
  const infor = {
    url: "",
    content: "",
    key: [],
    value: [],
    rating: 0,
    name: "",
    type: "",
  };
  const testimonials = useSelector((state) => state.testimonial.testimonial);
  const dispatch = useDispatch();
  const onSubmit = () => {
    if (selectedImage) {
      infor.name = selectedImage.name;
      infor.type = selectedImage.type;
    }
    infor.url = url;
    infor.content = content;
    infor.key = key;
    infor.value = values;
    infor.rating = rating;
    infor.index = testimonials.length;
    createTestimonial(infor, selectedImage);
    setVisible(4);
  };

  useEffect(() => {
    dispatch(getAll());
    getByFormUrl(url).then((res) => {
      const result = res.data.data.data;
      setPriColor(result.pColor);
      setBgColor(result.bColor);
      setMessage(`${result.message}`);
      setTitle(result.title);
      setPrompt(`${result.prompt}`);
      setThankTitle(`${result.thankTitle}`);
      setThankMessage(`${result.thankMessage}`);
      setKey(result.key.split(","));
      setChecked([...result.checked]);
      setData(
        btoa(
          String.fromCharCode(...new Uint8Array(res.data.data.data.data.data))
        )
      );
    });
  }, []);
  useEffect(() => {}, [visible, selectedImage]);

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
        <Grid container style={{ marginBottom: "1rem", padding: "1.5rem" }}>
          <img src={`data:image/png;base64,${data}`} alt="" width={"48px"} />
        </Grid>
        <Grid container style={{ marginBottom: "1rem", padding: "1.5rem" }}>
          <PageTitle>{title}</PageTitle>
        </Grid>
        <Grid
          container
          style={{
            padding: "1.5rem",
            marginBottom: "1rem",
            whiteSpace: "pre-wrap",
          }}
        >
          {message}
        </Grid>
        <DefaultButton primary>
          <CameraIcon />
          Record a Video
        </DefaultButton>
        <Grid container style={{ marginBottom: "1rem" }}>
          <DefaultButton
            secondary
            onClick={() => {
              setVisible(2);
            }}
          >
            Write a review
          </DefaultButton>
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
          <img src={`data:image/png;base64,${data}`} alt="" width={"48px"} />
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
          {prompt}
        </Grid>
        {checked[2] === true ? (
          <Grid container style={{ marginTop: "1rem" }}>
            <Rating
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </Grid>
        ) : null}

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
            onChange={(e) => {
              setContent(e.target.value);
            }}
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
              let len = 0;
              if (key.indexOf("Email Address") !== -1) {
                len += 1;
              }
              if (key.indexOf("Headline") !== -1) {
                len += 1;
              }
              if (key.indexOf("Your Website") !== -1) {
                len += 1;
              }
              setInputingFields(key.slice(0, len + 1));
              setAddingFields(key.slice(len + 1, key.length));
              setVisible(3);
            }}
          >
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
            Powered by Loya
          </a>
        </TopLinkContainer>
        <FormStyle style={{ height: "unset" }}>
          <Grid container style={{ marginTop: "1rem" }}>
            <img src={`data:image/png;base64,${data}`} alt="" width={"48px"} />
          </Grid>
          <Grid container style={{ marginTop: "1rem" }}>
            <PageTitle>{title}</PageTitle>
          </Grid>
          <form class="mt-5 flex flex-col gap-4 text-black">
            {inputingFields.map((value) => (
              <div class="w-full">
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-800"
                >
                  <div class="flex items-center gap-2">
                    {value}
                    <div></div>
                  </div>
                </label>
                <div class="flex w-full rounded-md text-sm shadow-sm duration-200 mt-2 ">
                  <input
                    name="name"
                    id=""
                    type="text"
                    required=""
                    spellcheck="false"
                    placeholder="ex. John Smith"
                    onChange={(e) => {
                      values[key.indexOf(value)] = e.target.value;
                      setValues([...values]);
                    }}
                    class=" block flex-grow rounded-r-md border disabled:opacity-60 py-2-5 px-2 text-sm focus:ring-ug-primary focus:border-ug-primary border-gray-300 rounded-md"
                  />
                </div>
              </div>
            ))}

            <div class="flex flex-col gap-2">
              <label
                for="avatar"
                class="block text-sm font-medium text-gray-800"
              >
                <div class="flex items-center gap-2">
                  Your Avatar <div></div>
                </div>
              </label>
              <div class="flex items-center gap-2">
                <label tabindex="0">
                  <span class="sr-only" aria-label="required">
                    required
                  </span>
                  <div class="flex items-center gap-2">
                    {selectedImage === null ? (
                      <img
                        src={`http://localhost:3000/user.png`}
                        alt=""
                        class="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <img
                        src={URL.createObjectURL(selectedImage)}
                        width={"48px"}
                        alt="not found"
                      />
                    )}

                    <button
                      type="button"
                      class="border shadow-sm rounded-md px-4 py-2 text-sm font-semibold"
                      htmlFor="icon-button-file"
                      onClick={() => {
                        hiddenFileInput.current.click();
                      }}
                    >
                      Pick an image
                    </button>
                  </div>
                  <input
                    ref={hiddenFileInput}
                    type="file"
                    multiple=""
                    accept="image/png,image/jpg,image/gif,image/jpeg,image/webp"
                    autocomplete="off"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      console.log(e.target.files[0]);
                      setSelectedImage(e.target.files[0]);
                    }}
                  />
                </label>
                <div class="ml-2 text-gray-600"> </div>
              </div>
            </div>
            {addingFields.map((value) => (
              <div class="w-full">
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-800"
                >
                  <div class="flex items-center gap-2">
                    {value}
                    <div></div>
                  </div>
                </label>
                <div class="flex w-full rounded-md text-sm shadow-sm duration-200 mt-2 ">
                  <input
                    name="name"
                    id=""
                    type="text"
                    required=""
                    spellcheck="false"
                    placeholder="Enter a Label"
                    onChange={(e) => {
                      values[key.indexOf(value)] = e.target.value;
                      setValues([...values]);
                    }}
                    class=" block flex-grow rounded-r-md border disabled:opacity-60 py-2-5 px-2 text-sm focus:ring-ug-primary focus:border-ug-primary border-gray-300 rounded-md"
                  />
                </div>
              </div>
            ))}
            <Grid container style={{ marginTop: "1rem" }}>
              <MainButton
                style={{ justifyContent: "center", width: "100%" }}
                onClick={onSubmit}
              >
                Submit
              </MainButton>
            </Grid>
          </form>
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
            Powered by Loya
          </a>
        </TopLinkContainer>
        <Grid container style={{ marginTop: "1rem" }}>
          <img
            src={`http://localhost:3000/heart.svg`}
            width="48px"
            height="48px"
          />
        </Grid>
        <Grid container style={{ marginTop: "1rem" }}>
          <PageTitle>{thankTitle}</PageTitle>
        </Grid>
        <Grid
          container
          style={{
            marginTop: "1rem",
            whiteSpace: "pre-wrap",
          }}
        >
          {thankMessage}
        </Grid>
      </PreviewContainer>
    </div>
  );
};

export default FormView;
