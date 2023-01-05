import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  Grid,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Paper,
  Avatar,
  Drawer,
  Tooltip,
  ToggleButton,
  ToggleButtonGroup,
  Rating,
  Card,
  ButtonGroup,
  Button,
  ButtonBase,
  TextField,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Input from "../uielements/form/FormInput";
import GroupButton from "../uielements/buttons/groupButton";
import DefaultButton from "../uielements/buttons/defaultButton";

import { Pencil as PencilIcon } from "../../icons/pencil";
import { Delete as DeleteIcon } from "../../icons/delete";
import { Image as ImageIcon } from "../../icons/image";
import { Close as CloseIcon } from "../../icons/close";
import { Thanknote as ThanknoteIcon } from "../../icons/thanknote";

import UploadButton from "../uielements/buttons/uploadButton";
import StatusButton from "../../components/uielements/buttons/statusButton";
import { Embed } from "../../icons/embed";
import GBContainer from "../uielements/containers/groupButtonContainer";
import {
  updateTestimonial,
  deleteTestimonial,
} from "../../actions/testimonial";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../actions/testimonial";
import PageTitle from "../uielements/pageTitle";
import FormLabel from "../uielements/form/FormLabel";
import FormGrid from "../uielements/form/FormGrid";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const TestTable = () => {
  const dispatch = useDispatch();
  const testimonials = useSelector((state) => state.testimonial.testimonial);
  const [status, setStatus] = useState(0);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [id, setId] = useState(0);
  const [key, setKey] = useState([]);
  const [value, setValue] = useState([]);
  const [drawerState, setDrawerState] = useState(false);
  const [editState, setEditState] = useState(false);
  const [avatarState, setAvatarState] = useState("");
  const [contentState, setContentState] = useState("");
  const [url, setUrl] = useState("");
  const [date, setDate] = useState("");
  const [rateState, setRateState] = useState(null);
  const hiddenFileInput = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  const privateStyle = { background: "#F59E0B33", color: "#D97706 " };
  const publicStyle = { background: "#10B98133", color: "#059689" };

  const inf = {
    id: 0,
    status: 0,
    key: [],
    content: "",
    name: "",
    rating: 0,
    type: "",
    updatedAt: "",
    url: "",
    value: [],
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClose = () => {
    setEditState(false);
  };

  const buttons = [
    <GroupButton key="one">
      <div
        style={{
          display: "flex",
          width: "1rem",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.5rem 1rem",
          color: "#fff",
          background: "#6701e6",
          borderTopLeftRadius: "6px",
        }}
      >
        <div
          style={{
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <ImageIcon />
        </div>
      </div>
      <GBContainer
        style={{ borderTop: "1px solid #ddd", borderTopRightRadius: "6px" }}
      >
        Create an image
      </GBContainer>
    </GroupButton>,
    <GroupButton key="two">
      <div
        style={{
          display: "flex",
          width: "1rem",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.5rem 1rem",
          color: "#fff",
          background: "#000",
        }}
      >
        <div
          style={{
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Embed />
        </div>
      </div>
      <GBContainer>Embed on your website</GBContainer>
    </GroupButton>,
    <GroupButton key="three">
      <div
        style={{
          display: "flex",
          width: "1rem",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.5rem 1rem",
          color: "#fff",
          background: "#db2777",
          borderBottomLeftRadius: "6px",
        }}
      >
        <div
          style={{
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <ThanknoteIcon />
        </div>
      </div>
      <GBContainer style={{ borderBottomRightRadius: "6px" }}>
        Send a thank you note
      </GBContainer>
    </GroupButton>,
  ];

  useEffect(() => {}, [
    key,
    value,
    status,
    avatarState,
    editState,
    selectedImage,
  ]);
  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <div>
      <TableContainer style={{ boxShadow: "unset" }} component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  padding: "0.875rem 1rem 0.5rem",
                  textAlign: "left",
                  fontSize: "0.75rem",
                  fontWeight: "400",
                  color: "rgb(107,114,128)",
                }}
              >
                Person
              </TableCell>
              <TableCell
                style={{
                  padding: "0.875rem 1rem 0.5rem",
                  textAlign: "left",
                  fontSize: "0.75rem",
                  fontWeight: "400",
                  color: "rgb(107,114,128)",
                }}
                align="left"
              >
                Testimonials
              </TableCell>
              <TableCell
                style={{
                  padding: "0.875rem 1rem 0.5rem",
                  textAlign: "left",
                  fontSize: "0.75rem",
                  fontWeight: "400",
                  color: "rgb(107,114,128)",
                }}
                align="left"
              >
                Date
              </TableCell>
              <TableCell
                style={{
                  padding: "0.875rem 1rem 0.5rem",
                  textAlign: "left",
                  fontSize: "0.75rem",
                  fontWeight: "400",
                  color: "rgb(107,114,128)",
                }}
                align="left"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testimonials.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                    verticalAlign: "top",
                  },
                }}
                onClick={(e) => {
                  if (row.data !== null) {
                    setAvatarState(
                      `data:image/png;base64,${btoa(
                        String.fromCharCode(...new Uint8Array(row.data.data))
                      )}`
                    );
                    setId(row.id);
                    setStatus(row.status);
                    setKey(row.key.split(","));
                    setValue(row.value.split(","));
                    setUrl(row.url);
                    setContentState(row.content);
                    setRateState(row.rating);
                    setDrawerState(true);
                    setDate(row.date);
                  } else {
                    setId(row.id);
                    setAvatarState("");
                    setStatus(row.status);
                    setKey(row.key.split(","));
                    setValue(row.value.split(","));
                    setUrl(row.url);
                    setContentState(row.content);
                    setRateState(row.rating);
                    setDrawerState(true);
                    setDate(row.date);
                  }
                }}
              >
                <TableCell
                  style={{
                    padding: "1rem",
                    fontSize: "0.8rem",
                    lineHeight: "1.25rem",
                    color: "rgb(107,114,128)",
                  }}
                  component="th"
                  scope="row"
                >
                  <Grid container spacing={2} style={{ gap: "0.5rem" }}>
                    <Grid item>
                      {row.data !== null ? (
                        <Avatar
                          style={{
                            borderRadius: "50%",
                            border: "1px solid #ddd",
                          }}
                        >
                          <img
                            src={`data:image/png;base64,${btoa(
                              String.fromCharCode(
                                ...new Uint8Array(row.data.data)
                              )
                            )}`}
                            width={"48px"}
                          />
                        </Avatar>
                      ) : (
                        <Avatar
                          style={{
                            borderRadius: "50%",
                            border: "1px solid #ddd",
                          }}
                        >
                          {row.value[0].slice(0, 2)}
                        </Avatar>
                      )}
                    </Grid>
                    <Grid
                      item
                      style={{
                        overFlow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        color: "#000",
                      }}
                    >
                      <div>{row.value.split(",").slice(0, 1)}</div>
                      <div>
                        {row.key.split(",").indexOf("Headline") ===
                        -1 ? null : (
                          <span>
                            {
                              row.value.split(",")[
                                row.key.split(",").indexOf("Headline")
                              ]
                            }
                          </span>
                        )}
                      </div>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell
                  tyle={{
                    padding: "1rem",
                    fontSize: "0.8rem",
                    lineHeight: "1.25rem",
                  }}
                  align="left"
                >
                  <div style={{ color: "rgb(107,114,128)", maxWidth: "28rem" }}>
                    {row.rating === null ? null : (
                      <div>
                        <Rating
                          value={row.rating}
                          readOnly
                          style={{ fontSize: "1rem" }}
                        />
                      </div>
                    )}
                  </div>
                  <div style={{ color: "rgb(107,114,128)", maxWidth: "28rem" }}>
                    {row.content}
                  </div>
                </TableCell>
                <TableCell
                  style={{
                    padding: "1rem",
                    fontSize: "0.8rem",
                    lineHeight: "1.25rem",
                    verticalAlign: "top",
                  }}
                  align="left"
                >
                  <div style={{ color: "rgb(17,24,39)" }}>
                    {moment(row.updatedAt).format("LL")}
                  </div>
                </TableCell>
                <TableCell
                  tyle={{
                    padding: "1rem",
                    fontSize: "0.8rem",
                    lineHeight: "1.25rem",
                    color: "rgb(107,114,128)",
                    verticalAlign: "top",
                  }}
                  align="left"
                >
                  <StatusButton
                    style={
                      row.status === 1
                        ? { ...publicStyle }
                        : { ...privateStyle }
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      inf.id = row.id;
                      inf.status = 1 - row.status;
                      inf.key = row.key;
                      inf.content = row.content;
                      inf.name = row.name;
                      inf.rating = row.rating;
                      inf.type = row.type;
                      inf.updatedAt = row.updatedAt;
                      inf.url = row.url;
                      inf.value = row.value;
                      updateTestimonial(inf, selectedImage).then(() => {
                        dispatch(getAll());
                      });
                    }}
                  >
                    {row.status === 1 ? "public" : "private"}
                  </StatusButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Drawer
        anchor="right"
        open={drawerState}
        key="drawer2"
        onClose={() => {
          setDrawerState(false);
        }}
      >
        <div style={{ display: editState === true ? "none" : "block" }}>
          <Grid
            container
            spacing={1}
            style={{
              padding: "1rem",
              width: "512px",
              height: "140px",
              backgroundColor: "#EDF3F9",
            }}
          >
            <Grid item xs={7.75}></Grid>
            <Grid item xs={2.25} style={{ paddingLeft: "10px" }}>
              <Tooltip
                title={
                  <p style={{ fontSize: "0.85rem" }}>
                    Published reviews will show up on your widgets & wall of
                    love.
                  </p>
                }
                arrow
              >
                <Button
                  variant="outlined"
                  style={{ color: status === 1 ? "#059689" : "#D97706" }}
                  onClick={(e) => {
                    inf.id = id;
                    inf.status = 1 - status;
                    inf.key = key;
                    inf.content = contentState;
                    inf.name = name;
                    inf.rating = rateState;
                    inf.type = type;
                    inf.updatedAt = date;
                    inf.url = url;
                    inf.value = value;
                    updateTestimonial(inf, selectedImage).then(() => {
                      setStatus(1 - status);
                      dispatch(getAll());
                    });
                  }}
                >
                  {status === 1 ? "public" : "private"}
                </Button>
              </Tooltip>
            </Grid>
            <Grid item xs={2}>
              <ToggleButtonGroup size="small" aria-label="Small sizes">
                <ToggleButton
                  value="pencil"
                  key="pencil"
                  onClick={() => {
                    setEditState(true);
                  }}
                >
                  <PencilIcon />
                </ToggleButton>
                <ToggleButton
                  value="delete"
                  key="delete"
                  onClick={() => {
                    console.log("here");
                    deleteTestimonial(id).then(() => {
                      setDrawerState(false);
                      dispatch(getAll());
                    });
                  }}
                >
                  <DeleteIcon fill="white" stroke="red" />
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
          <div
            style={{
              paddingLeft: "2rem",
              position: "relative",
              top: "-1.75rem",
            }}
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
            ) : selectedImage === null && avatarState !== "" ? (
              <Avatar
                style={{
                  borderRadius: "50%",
                  border: "1px solid #ddd",
                  borderColor: "rgb(237, 243, 249)",
                  borderWidth: "4px",
                }}
                sx={{ width: 56, height: 56 }}
              >
                <img src={avatarState} width={"60px"} />
              </Avatar>
            ) : (
              <Avatar
                style={{
                  borderRadius: "50%",
                  border: "1px solid #ddd",
                  borderColor: "rgb(237, 243, 249)",
                  borderWidth: "4px",
                }}
                sx={{ width: 56, height: 56 }}
              >
                {value[0] === undefined ? null : value[0].slice(0, 2)}
              </Avatar>
            )}
          </div>
          <div style={{ paddingLeft: "2rem" }}>
            <p style={{ fontSize: "1.2rem" }}>
              <b>{value[0]}</b>
            </p>
            {rateState ? (
              <Rating name="read-only" value={rateState} readOnly />
            ) : (
              <></>
            )}
            <p style={{ whiteSpace: "normal", maxWidth: "28rem" }}>
              {contentState}
            </p>
            <div
              style={{
                marginRight: "2rem",
                borderRadius: "0.5rem",
                backgroundColor: "#EDF3F9",
                padding: "1rem",
              }}
            >
              {/* <p>From: {url}</p>
            <p>
              {key.indexOf("Email Address") === -1
                ? null
                : `Email: ${value[key.indexOf("Email Address")]}`}
            </p> */}
              {key.map((val) =>
                val !== "Your Name" ? (
                  <p>
                    {val}:{value[key.indexOf(val)]}
                  </p>
                ) : null
              )}
              <p></p>
              <p>Date:{moment(date).format("LL")}</p>
            </div>
            <br />
            <p style={{ fontSize: "1.1rem" }}>
              <b>Do more with your review ✨</b>
            </p>
            <div
              style={{
                display: "table",
              }}
            >
              <Card
                style={{
                  width: "10em",
                  height: "10rem",
                  float: "left",
                }}
              >
                {/* <img
                src={Title1}
                alt="Title1"
                style={{
                  width: "12rem",
                  height: "12rem",
                }}
              /> */}
              </Card>
              <Card
                style={{
                  width: "10em",
                  height: "10rem",
                  float: "left",
                  marginLeft: "1rem",
                }}
              >
                {/* <img
                src={Title2}
                alt="Title2"
                style={{
                  width: "12rem",
                  height: "12rem",
                }}
              /> */}
              </Card>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined button group"
              >
                {buttons}
              </ButtonGroup>
            </div>
          </div>
        </div>
        <div style={{ display: editState === true ? "block" : "none" }}>
          <Grid
            container
            spacing={1}
            style={{
              padding: "1rem",
              width: "512px",
              height: "140px",
              marginLeft: "unset",
              backgroundColor: "#EDF3F9",
            }}
          >
            <Grid item>
              <Button
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: "#444",
                }}
                style={{ justifyContent: "flex-end", minWidth: "unset" }}
              >
                <CloseIcon />
              </Button>
            </Grid>
            <Grid item style={{ display: "flex", alignSelf: "flex-end" }}>
              <PageTitle>Edit Testimonial</PageTitle>
            </Grid>
          </Grid>
          <Grid container style={{ width: "512px" }}>
            <FormGrid>
              <FormLabel>Your Name</FormLabel>
              <Input value={value[0]} />
            </FormGrid>
            <FormGrid>
              <FormLabel>Tagline</FormLabel>
              <Input
                value={
                  key.indexOf("Headline") === -1
                    ? null
                    : value[key.indexOf("Headline")]
                }
                onChange={(e) => {
                  if (key.indexOf("Headline") === -1) {
                    value[value.length] = e.target.value;
                    setValue([...value]);
                    setKey([...key, "Headline"]);
                  } else {
                    value[key.indexOf("Headline")] = e.target.value;
                    setValue([...value]);
                  }
                }}
              />
            </FormGrid>
            <FormGrid>
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
                ) : selectedImage === null && avatarState !== "" ? (
                  <Avatar
                    style={{
                      borderRadius: "50%",
                      border: "1px solid #ddd",
                    }}
                  >
                    <img src={avatarState} width={"48px"} />
                  </Avatar>
                ) : (
                  <Avatar
                    style={{
                      borderRadius: "50%",
                      border: "1px solid #ddd",
                    }}
                  >
                    <img src={`../user.png`} alt="" width={"48px"} />
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
                <ButtonBase
                  style={{ display: selectedImage === null ? "none" : "flex" }}
                  onClick={() => {
                    setSelectedImage(null);
                  }}
                >
                  <CloseIcon />
                </ButtonBase>
              </div>
              <input
                ref={hiddenFileInput}
                type="file"
                multiple=""
                accept="image/png,image/jpg,image/gif,image/jpeg,image/webp"
                autoComplete="off"
                style={{ display: "none" }}
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setSelectedImage(e.target.files[0]);
                }}
              />
            </FormGrid>
            <FormGrid>
              <FormLabel>Website URL</FormLabel>
              <Input
                value={
                  key.indexOf("Your Website") === -1
                    ? null
                    : value[key.indexOf("Your Website")]
                }
                onChange={(e) => {
                  if (key.indexOf("Your Website") === -1) {
                    value[value.length] = e.target.value;
                    setValue([...value]);
                    setKey([...key, "Your Website"]);
                  } else {
                    value[key.indexOf("Your Website")] = e.target.value;
                    setValue([...value]);
                  }
                }}
              />
            </FormGrid>
            <FormGrid>
              <FormLabel>Content</FormLabel>
              <TextField
                multiline
                rows={4}
                placeholder="Write something nice ✨"
                style={{ width: "100%" }}
                value={contentState}
                onChange={(e) => {
                  setContentState(e.target.value);
                }}
              />
            </FormGrid>
            <FormGrid>
              <FormLabel>Rating</FormLabel>
              <Rating
                value={rateState}
                onChange={(event, newValue) => {
                  setRateState(newValue);
                }}
              />
            </FormGrid>
            <FormGrid>
              <FormLabel>Date</FormLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label=""
                  value={moment(date).format("L").replace(/\//g, "-")}
                  onChange={(newValue) => {
                    console.log(newValue);
                    setDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </FormGrid>
            <FormGrid>
              <DefaultButton
                onClick={() => {
                  inf.id = id;
                  inf.status = status;
                  inf.key = key;
                  inf.content = contentState;
                  inf.name = name;
                  inf.rating = rateState;
                  inf.type = type;
                  inf.updatedAt = date;
                  inf.url = url;
                  inf.value = value;
                  updateTestimonial(inf, selectedImage).then((e) => {
                    console.log("e=", e);
                    dispatch(getAll());
                    setOpen(true);
                    setEditState(false);
                  });
                }}
              >
                Save
              </DefaultButton>
            </FormGrid>
          </Grid>
        </div>
      </Drawer>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
      >
        <Alert
          onClose={handleCloseSnack}
          severity="success"
          sx={{ width: "100%" }}
        >
          Save Changed
        </Alert>
      </Snackbar>
    </div>
  );
};

export default TestTable;
