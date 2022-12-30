import React, { useEffect, useState } from "react";
import { getByFormUrl } from "../../actions/form";
import { createColor } from "material-ui-color";
import { Grid, TextField, Rating, Avatar } from "@mui/material";
import MainButton from "../../components/uielements/buttons/mainButton";
import PageTitle from "../../components/uielements/pageTitle";
import { Camera as CameraIcon } from "../../icons/camera";
import PreviewContainer from "../../components/uielements/previewContainer";
import TopLinkContainer from "../../components/uielements/topLinkContainer";
import { createTestimonial, getAll } from "../../actions/testimonial";
import { useDispatch, useSelector } from "react-redux";
import DefaultButton from "../../components/uielements/buttons/defaultButton";
import UploadButton from "../../components/uielements/buttons/uploadButton";
import FormLabel from "../../components/uielements/form/FormLabel";
import FormInput from "../../components/uielements/form/FormInput";
import FormGrid from "../../components/uielements/form/FormGrid";
import VideoRecorder from "../../components/uielements/recorder/VideoRecorder";

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
    projectId: "",
    userId: "",
  };
  const testimonials = useSelector((state) => state.testimonial.testimonial);
  const dispatch = useDispatch();

  const projects = JSON.parse(localStorage.getItem("projects"));
  const projectId = projects[0].id;
  const userId = `${localStorage.getItem("userId")}`;
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
    infor.projectId = projectId;
    infor.userId = userId;
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
  useEffect(() => {}, [visible, selectedImage, checked]);

  const ShareTestimonial = (
    <PreviewContainer
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TopLinkContainer>
        <img
          src={`../../../../../heart.png`}
          width="16px"
          height="16px"
          style={{ paddingTop: "0.4rem", marginRight: "0.2rem" }}
        />
        <a
          href="http://tryloya.com"
          style={{
            textDecoration: "unset",
          }}
        >
          Powered by Loya
        </a>
      </TopLinkContainer>
      <Grid container style={{ marginBottom: "1rem" }}>
        {selectedImage !== null ? (
          <img
            src={URL.createObjectURL(selectedImage)}
            width={"48px"}
            alt="not found"
          />
        ) : data !== "" ? (
          <img src={`data:image/png;base64,${data}`} alt="" width={"48px"} />
        ) : (
          <img src={`../../../../../heart.png`} width={"32px"} />
        )}
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
      <Grid
        container
        style={{
          marginBottom: "0.5rem",
          display: checked[0] === "true" ? "flex" : "none",
        }}
      >
        <DefaultButton
          onClick={() => {
            setVisible(5);
          }}
          primary={priColor}
        >
          <CameraIcon />
          Record a video
        </DefaultButton>
      </Grid>
      <Grid
        container
        style={{
          marginBottom: "1rem",
          display: checked[1] === "true" ? "flex" : "none",
        }}
      >
        <DefaultButton
          onClick={() => {
            setVisible(2);
          }}
        >
          Write a review
        </DefaultButton>
      </Grid>
    </PreviewContainer>
  );
  const WriteReview = (
    <PreviewContainer style={{ display: "flex" }}>
      <TopLinkContainer>
        <img
          src={`../../../../../heart.png`}
          width="16px"
          height="16px"
          style={{ paddingTop: "0.4rem", marginRight: "0.2rem" }}
        />
        <a
          href="http://tryloya.com"
          style={{
            textDecoration: "unset",
          }}
        >
          Powered by Loya
        </a>
      </TopLinkContainer>
      <Grid container style={{ marginTop: "1rem" }}>
        {selectedImage !== null ? (
          <img
            src={URL.createObjectURL(selectedImage)}
            width={"48px"}
            alt="not found"
          />
        ) : data !== "" ? (
          <img src={`data:image/png;base64,${data}`} alt="" width={"48px"} />
        ) : (
          <img src={`../../../../../heart.png`} width={"32px"} />
        )}
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
      <Grid
        container
        style={{
          marginTop: "1rem",
        }}
      >
        <Rating
          style={{ display: checked[2] === "true" ? "flex" : "none" }}
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
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
          rows={4}
          placeholder="Write something nice ✨"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid container style={{ marginTop: "1rem" }}>
        <DefaultButton
          primary={priColor}
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
        </DefaultButton>
      </Grid>
    </PreviewContainer>
  );
  const AlmostDone = (
    <PreviewContainer
      style={{
        display: "flex",
        alignSelf: "center",
      }}
    >
      <TopLinkContainer>
        <img
          src={`../../../../../heart.png`}
          width="16px"
          height="16px"
          style={{ paddingTop: "0.4rem", marginRight: "0.2rem" }}
        />
        <a
          href="http://tryloya.com"
          style={{
            textDecoration: "unset",
          }}
        >
          Powered by Loya
        </a>
      </TopLinkContainer>
      <Grid container style={{ marginTop: "1rem" }}>
        {selectedImage !== null ? (
          <img
            src={URL.createObjectURL(selectedImage)}
            width={"48px"}
            alt="not found"
          />
        ) : data !== "" ? (
          <img src={`data:image/png;base64,${data}`} alt="" width={"48px"} />
        ) : (
          <img src={`../../../../../heart.png`} width={"32px"} />
        )}
      </Grid>
      <Grid container style={{ marginTop: "1rem" }}>
        <PageTitle>Almost done</PageTitle>
      </Grid>
      <FormGrid>
        {inputingFields.map((value) => (
          <>
            <FormLabel>{value}</FormLabel>
            <FormInput
              onChange={(e) => {
                values[key.indexOf(value)] = e.target.value;
                setValues([...values]);
              }}
            />
          </>
        ))}

        <div>
          <FormLabel>Avatar</FormLabel>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {selectedImage !== null ? (
              <Avatar
                style={{
                  borderRadius: "50%",
                  border: "1px solid #ddd",
                }}
              >
                <img
                  src={URL.createObjectURL(selectedImage)}
                  width={"48px"}
                  alt="not found"
                />
              </Avatar>
            ) : selectedImage === null && data !== "" ? (
              <Avatar
                style={{
                  borderRadius: "50%",
                  border: "1px solid #ddd",
                }}
              >
                <img src={`data:image/png;base64,${data}`} width={"48px"} />
              </Avatar>
            ) : (
              <Avatar
                style={{
                  borderRadius: "50%",
                  border: "1px solid #ddd",
                }}
              >
                <img src={`../../../../../user.png`} alt="" width={"48px"} />
              </Avatar>
            )}
            <UploadButton
              htmlFor="icon-button-file"
              onClick={() => {
                hiddenFileInput.current.click();
              }}
            >
              Pick an image
            </UploadButton>
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
        </div>
        {addingFields.length === 0
          ? null
          : addingFields.map((value, index) => {
              return (
                <FormGrid>
                  <FormLabel>{addingFields[index]}</FormLabel>
                  <FormInput placeholder="Enter details here" />
                </FormGrid>
              );
            })}
        <DefaultButton primary={priColor} onClick={onSubmit}>
          Submit
        </DefaultButton>
      </FormGrid>
    </PreviewContainer>
  );
  const ThanksView = (
    <PreviewContainer style={{ display: "flex" }}>
      <TopLinkContainer>
        <img
          src={`../../../../../heart.png`}
          width="16px"
          height="16px"
          style={{ paddingTop: "0.4rem", marginRight: "0.2rem" }}
        />
        <a
          href="http://tryloya.com"
          style={{
            textDecoration: "unset",
          }}
        >
          Powered by Loya
        </a>
      </TopLinkContainer>
      <Grid container style={{ marginTop: "1rem" }}>
        {selectedImage !== null ? (
          <img
            src={URL.createObjectURL(selectedImage)}
            width={"48px"}
            alt="not found"
          />
        ) : selectedImage === null && data !== "" ? (
          <img src={`data:image/png;base64,${data}`} alt="" width={"48px"} />
        ) : (
          <img src={`../../../../../heart.png`} width={"32px"} />
        )}
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
  );
  const RecordVideo = (
    <PreviewContainer style={{ display: "flex" }}>
      <TopLinkContainer>
        <img
          src={`../../../../../heart.png`}
          width="16px"
          height="16px"
          style={{ paddingTop: "0.4rem", marginRight: "0.2rem" }}
        />
        <a
          href="http://tryloya.com"
          style={{
            textDecoration: "unset",
          }}
        >
          Powered by Loya
        </a>
      </TopLinkContainer>
      <Grid container style={{ marginTop: "1rem" }}>
        {selectedImage !== null ? (
          <img
            src={URL.createObjectURL(selectedImage)}
            width={"48px"}
            alt="not found"
          />
        ) : data !== "" ? (
          <img src={`data:image/png;base64,${data}`} alt="" width={"48px"} />
        ) : (
          <img src={`../../../../../heart.png`} width={"32px"} />
        )}
      </Grid>
      <Grid container style={{ marginTop: "1rem" }}>
        <PageTitle>Record a video textimonial</PageTitle>
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
      <Grid
        container
        style={{
          marginTop: "1rem",
        }}
      >
        <Rating
          style={{ display: checked[2] === "true" ? "flex" : "none" }}
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </Grid>
      <Grid
        container
        style={{
          marginTop: "1rem",
          whiteSpace: "pre-wrap",
        }}
      >
        <VideoRecorder priColor={priColor} />
      </Grid>
    </PreviewContainer>
  );

  const Content = () => {
    switch (visible) {
      case 1:
        return ShareTestimonial;
      case 2:
        return WriteReview;
      case 3:
        return AlmostDone;
      case 4:
        return ThanksView;
      case 5:
        return RecordVideo;

      default:
        return <></>;
    }
  };

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
      }}
    >
      {Content()}
    </div>
  );
};

export default FormView;
