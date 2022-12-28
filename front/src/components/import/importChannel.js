import { Grid, TextField, Avatar, Rating } from "@mui/material";
import * as React from "react";
import { moment } from "moment";
import PageTitle from "../uielements/pageTitle";
import { Facebook as FacebookIcon } from "../../icons/facebook";
import { Google as GoogleIcon } from "../../icons/google";
import { Qmark } from "../../icons/qmark";
import FormGrid from "../uielements/form/FormGrid";
import FormLabel from "../uielements/form/FormLabel";
import FormInput from "../uielements/form/FormInput";
import UploadButton from "../uielements/buttons/uploadButton";
import DefaultButton from "../uielements/buttons/defaultButton";
import { Pencil as PencilIcon } from "../../icons/pencil";
import { Camera as CameraIcon } from "../../icons/camera";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const ImportChannel = (props) => {
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState(moment().format("L"));
  const [headline, setHeadline] = React.useState("");
  const [review, setReview] = React.useState(``);
  const [url, setUrl] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const hiddenFileInput = React.useRef(null);

  return (
    <div
      style={{
        paddingBottom: "2rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        marginBottom: "2rem",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          background: "white",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          marginTop: "1rem",
          border: "1px solid #ddd",
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
          height: "100vh",
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          style={{
            marginTop: "0.25rem",
            alignItems: "center",
          }}
        >
          <PageTitle> Import from {`${props.select}`}</PageTitle>
          <Avatar
            style={{
              borderRadius: "50%",
              border: "1px solid #ddd",
              background: "#ddd",
              color: "#333",
            }}
          >
            {props.select === "text" ? (
              <PencilIcon />
            ) : props.select === "video" ? (
              <CameraIcon />
            ) : props.select === "facebook" ? (
              <FacebookIcon />
            ) : (
              <GoogleIcon />
            )}
          </Avatar>
        </Grid>
        <Grid
          container
          spacing={2}
          style={{
            marginTop: "0.25rem",
            paddingLeft: "1rem",
          }}
        >
          <div style={{ width: "50%" }}>
            <FormLabel>
              Name
              <Qmark />
            </FormLabel>
          </div>
          <div style={{ width: "50%" }}>
            <FormLabel>Tagline</FormLabel>
          </div>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          spacing={2}
          style={{
            marginTop: "0.1rem",
            marginBottom: "0.25rem",
            paddingLeft: "1rem",
          }}
        >
          <div style={{ width: "50%" }}>
            <FormInput
              placeholder="Luke Skywalker"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div style={{ width: "50%" }}>
            <FormInput
              placeholder="CEO of knight Inc."
              value={headline}
              onChange={(e) => {
                setHeadline(e.target.value);
              }}
            />
          </div>
        </Grid>
        <Grid
          container
          style={{ marginTop: "0.25rem", paddingLeft: "1rem" }}
          spacing={2}
        >
          <FormLabel>Avatar</FormLabel>
        </Grid>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "0.1rem", paddingLeft: "1rem" }}
        >
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
          ) : (
            <Avatar
              style={{
                borderRadius: "50%",
                border: "1px solid #ddd",
              }}
            >
              <img src={`./user.png`} alt="" width={"48px"} />
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
        </Grid>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "0.25rem", paddingLeft: "1rem" }}
        >
          <FormLabel>Review</FormLabel>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: "0.1rem" }}>
          <FormGrid>
            <TextField
              multiline
              rows={4}
              placeholder="Write something nice ✨"
              style={{ width: "100%" }}
              value={review}
              onChange={(e) => {
                setReview(e.target.value);
              }}
            />
          </FormGrid>
        </Grid>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "0.25rem", paddingLeft: "1rem" }}
        >
          <FormLabel>Rating</FormLabel>
        </Grid>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "0.1rem", paddingLeft: "1rem" }}
        >
          <Rating
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            style={{ fontSize: "2rem" }}
          />
        </Grid>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "0.25rem", paddingLeft: "1rem" }}
        >
          <FormLabel>Review URL</FormLabel>
        </Grid>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "0.1rem", paddingLeft: "1rem" }}
        >
          <FormInput
            placeholder="https://"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </Grid>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "0.25rem", paddingLeft: "1rem" }}
        >
          <FormLabel>Date</FormLabel>
        </Grid>
        <FormGrid>
          <FormLabel>Date</FormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label=""
              value={date}
              onChange={(newValue) => {
                console.log(newValue);
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </FormGrid>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "0.25rem", paddingLeft: "1rem" }}
        >
          <FormGrid>
            <DefaultButton
              style={{ borderRadius: "9999px" }}
              onClick={() => {}}
            >
              Import Review
            </DefaultButton>
          </FormGrid>
        </Grid>
      </div>
    </div>
  );
};
