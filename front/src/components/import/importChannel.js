import {
  Grid,
  TextField,
  Avatar,
  Rating,
  Button,
  ToggleButtonGroup,
  Card,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import * as React from "react";
import moment from "moment";
import PageTitle from "../uielements/pageTitle";
import { Facebook as FacebookIcon } from "../../icons/facebook";
import { Google, Google as GoogleIcon } from "../../icons/google";
import { Qmark } from "../../icons/qmark";
import FormGrid from "../uielements/form/FormGrid";
import FormLabel from "../uielements/form/FormLabel";
import FormInput from "../uielements/form/FormInput";
import UploadButton from "../uielements/buttons/uploadButton";
import MenuButton from "../uielements/buttons/menuButton";
import DefaultButton from "../uielements/buttons/defaultButton";
import { Pencil as PencilIcon } from "../../icons/pencil";
import { Camera as CameraIcon } from "../../icons/camera";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTestimonial } from "../../actions/testimonial";
import { getAll } from "../../actions/testimonial";
import { useDispatch } from "react-redux";
import { isEmpty } from "../../util/isEmpty";
import { Star as StarIcon } from "../../icons/star";
import CheckIcon from "@mui/icons-material/Check";
import toastr from "toastr";

import axios from "axios";

export const ImportChannel = (props) => {
  const dispatch = useDispatch();
  const [query, setQuery] = React.useState("");
  const [placeId, setPlaceId] = React.useState("");
  const [reviewNum, setReviewNum] = React.useState(0);
  const [business, setBusiness] = React.useState([]);
  const [visible, setVisible] = React.useState(false);
  const [checkAll, setCheckAll] = React.useState(true);
  const [checked, setChecked] = React.useState([]);
  const [testimonials, setTestimonials] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [total, setTotal] = React.useState({
    name: "",
    headline: "",
    review: ``,
    url: "",
    rating: 0,
    selectedImage: null,
    imageUrl: "",
    importDate: "",
  });
  const [box, setBox] = React.useState([]);

  const hiddenFileInput = React.useRef(null);
  const infor = {
    index: "",
    url: "",
    content: "",
    key: [],
    value: [],
    rating: 0,
    name: "",
    type: "",
    projectId: "",
    userId: "",
    query: "",
    imageUrl: "",
    importDate: "",
  };
  const onSubmit = () => {
    if (box === []) {
      if (total.name !== "") {
        const projects = JSON.parse(localStorage.getItem("projects"));
        const projectId = projects[0].id;
        const userId = `${localStorage.getItem("userId")}`;

        if (total.selectedImage) {
          infor.name = total.selectedImage.name;
          infor.type = total.selectedImage.type;
        }
        infor.content = total.review;
        infor.key = ["Your Name", "Email Address", "Your Website"];
        infor.value[0] = total.name;
        infor.value[1] = total.headline;
        infor.value[2] = total.url;
        infor.rating = total.rating;
        infor.index = props.testimonials.length;
        infor.projectId = projectId;
        infor.userId = userId;
        infor.imageUrl = total.imageUrl;
        infor.importDate = total.importDate;

        console.log(infor, total.selectedImage);

        createTestimonial(infor, total.selectedImage).then(() => {
          dispatch(getAll());
        });
      }
    } else {
      box.map((row) => {
        const projects = JSON.parse(localStorage.getItem("projects"));
        const projectId = projects[0].id;
        const userId = `${localStorage.getItem("userId")}`;
        infor.content = row.review;
        infor.value[0] = row.name;
        infor.rating = row.rating;
        infor.index = props.testimonials.length;
        infor.projectId = projectId;
        infor.userId = userId;
        infor.imageUrl = row.imageUrl;
        infor.importDate = row.importDate;
        setTimeout(createTestimonial(infor, null), 1000);
      });
    }
  };

  const OnGoogleSubmit = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyB-8fAitCwpddy1HfCTtYqKLWnESH90ZAE&query=${query}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data.results);
        setBusiness(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const OnTestimonialSubmit = () => {
    if (reviewNum === 0 || reviewNum === undefined) {
      toastr.error("Something went wrong.");
    } else {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyB-8fAitCwpddy1HfCTtYqKLWnESH90ZAE`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setTestimonials(response.data.result.reviews);
          setData(response.data.result.reviews);
          setCount(response.data.result.reviews.length);
          response.data.result.reviews.map((row, index) => {
            checked[index] = true;
            setChecked([...checked]);
            setVisible(true);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const isGoogle = props.select === "google";

  const notGoogle = (
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
          ) : (
            <FacebookIcon />
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
            value={total.name}
            onChange={(e) => {
              total.name = e.target.value;
              setTotal({ ...total, name: e.target.value });
            }}
          />
        </div>
        <div style={{ width: "50%" }}>
          <FormInput
            placeholder="CEO of knight Inc."
            value={total.headline}
            onChange={(e) => {
              setTotal({ ...total, headline: e.target.value });
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
        {total.selectedImage !== null ? (
          <Avatar
            style={{
              borderRadius: "50%",
              border: "1px solid #ddd",
            }}
          >
            <img
              src={URL.createObjectURL(total.selectedImage)}
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
            setTotal({ ...total, selectedImage: e.target.files[0] });
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
      <Grid
        container
        spacing={2}
        style={{ marginTop: "0.1rem", paddingLeft: "1rem" }}
      >
        <TextField
          multiline
          rows={4}
          placeholder="Write something nice ✨"
          style={{ width: "100%" }}
          value={total.review}
          onChange={(e) => {
            setTotal({ ...total, review: e.target.value });
          }}
        />
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
          value={total.rating}
          onChange={(event, newValue) => {
            setTotal({ ...total, rating: newValue });
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
          value={total.url}
          onChange={(e) => {
            setTotal({ ...total, url: e.target.value });
          }}
        />
      </Grid>
      <FormLabel>Date</FormLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label=""
          value={total.date}
          onChange={(newValue) => {
            setTotal({ ...total, date: newValue });
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Grid
        container
        spacing={2}
        style={{ marginTop: "0.25rem", paddingLeft: "1rem" }}
      >
        <FormGrid>
          <DefaultButton
            style={{ borderRadius: "9999px" }}
            onClick={() => {
              onSubmit();
            }}
          >
            Import Review
          </DefaultButton>
        </FormGrid>
      </Grid>
    </div>
  );

  const google =
    visible === false ? (
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
          overflowY: "auto",
          paddingBottom: "2rem",
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
            <GoogleIcon />
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
          <FormLabel>Business name and address</FormLabel>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          style={{
            marginTop: "0.25rem",
            alignItems: "center",
          }}
        >
          <Grid item xs={10}>
            <FormInput
              placeholder="Senja, Battle Bridge Lane, London"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              padding: "10px",
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                OnGoogleSubmit();
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          style={{
            marginTop: "0.25rem",
            alignItems: "center",
          }}
        >
          <FormLabel>
            If the business you want to import shows up when you search for the
            address in Google, then Senja should be able to find your business.
          </FormLabel>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          style={{
            marginTop: "0.25rem",
            alignItems: "center",
          }}
        >
          {isEmpty(business) || business === undefined ? (
            "No Businesses Found"
          ) : (
            <ToggleButtonGroup
              style={{ flexDirection: "column", width: "100%" }}
            >
              {business.map((row, index) => {
                return (
                  <div
                    style={{
                      padding: "0.5rem",
                      borderBottom: "1px solid #ddd",
                      width: "100%",
                    }}
                  >
                    <MenuButton
                      key={index}
                      onClick={() => {
                        setReviewNum(row.user_ratings_total);
                        setPlaceId(row.place_id);
                      }}
                    >
                      <Grid
                        container
                        style={{
                          justifyContent: "space-between",
                        }}
                      >
                        <Grid
                          item
                          xs={9}
                          style={{
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          {row.name}
                        </Grid>
                        <Grid
                          item
                          xs={3}
                          style={{
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "end",
                          }}
                        >
                          {row.user_ratings_total === undefined
                            ? 0
                            : `${row.user_ratings_total} `}{" "}
                          Reviews
                        </Grid>
                      </Grid>
                      <StarIcon fill="#FBBF24" stroke="#FBBF24" />
                    </MenuButton>
                  </div>
                );
              })}
            </ToggleButtonGroup>
          )}
        </Grid>
        {isEmpty(business) || business === undefined ? null : (
          <Grid
            container
            justifyContent="space-between"
            style={{
              marginTop: "0.25rem",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                OnTestimonialSubmit();
              }}
            >
              Search Testimonials
            </Button>
          </Grid>
        )}
      </div>
    ) : (
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
          overflowY: "auto",
          paddingBottom: "2rem",
        }}
      >
        <Checkbox
          style={{
            marginRight: "5px",
            color: "#ddd",
            borderRadius: "10px",
          }}
          edge="end"
          onChange={() => {
            setCheckAll(!checkAll);
          }}
          checked={checkAll}
          label="Select all testimonials"
        />
        <div
          style={{
            float: "grid",
            gridTemplateColumns: "repeat(2,250px)",
            gap: "0.5rem",
            padding: "2rem",
            display: "grid",
            height: "min-content",
          }}
        >
          {testimonials.map((row, index) => {
            return (
              <Card
                style={{
                  width: "12rem",
                  padding: "1rem",
                  height: "min-content",
                  background: "white",
                  borderRadius: "0.375rem",
                  boxShadow: "0 1px 2px 0 rgb(0, 0, 0 / 0.05)",
                }}
                onClick={() => {
                  let temp = [];
                  temp = JSON.parse(JSON.stringify(checked));
                  temp[index] = !temp[index];
                  setChecked(temp);
                  console.log(checked[index]);
                  if (checked[index] === true) {
                    setCount(count - 1);
                  } else {
                    setCount(count + 1);
                  }
                  console.log("testimonials=", testimonials);
                  console.log("data=", data);
                }}
              >
                <Grid
                  container
                  style={{
                    display: "flex",
                  }}
                >
                  <Grid item xs={3} style={{ alignItems: "center" }}>
                    <img
                      src={row.profile_photo_url}
                      width="24px"
                      height="24px"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{
                      alignItems: "center",
                      color: "#000",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    {row.author_name}
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    style={{
                      alignItems: "end",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem",
                        borderRadius: "9999px",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",
                        width: "fit-content",
                        background:
                          checked[index] === true ? "#6701e6" : "#9CA3AF",
                      }}
                    >
                      {checked[index] === true ? (
                        <CheckIcon style={{ fill: "white" }} />
                      ) : (
                        <CheckIcon style={{ fill: "#333" }} />
                      )}
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  container
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Rating value={row.rating} readOnly />
                </Grid>
                <Grid
                  container
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    color: "#aaa",
                    marginTop: "1rem",
                  }}
                >
                  {moment.unix(row.time).format("MMM Do YYYY")}
                </Grid>
              </Card>
            );
          })}
        </div>
        <FormGrid>
          <DefaultButton
            onClick={() => {
              let tmptotal = [];
              testimonials.map((row, index) => {
                if (checked[index] === true) {
                  tmptotal.push({
                    name: row.author_name,
                    rating: row.rating,
                    imageUrl: row.profile_photo_url,
                    importDate: moment.unix(row.time).format("MMM Do YYYY"),
                    review: row.text,
                    headline: "",
                    url: "",
                    selectedImage: null,
                  });
                  // setTotal({
                  //   name: row.author_name,
                  //   rating: row.rating,
                  //   imageUrl: row.profile_photo_url,
                  //   importDate: moment.unix(row.time).format("MMM Do YYYY"),
                  //   review: row.text,
                  //   headline: "",
                  //   url: "",
                  //   selectedImage: null,
                  // });
                }
              });
              setBox(tmptotal);
            }}
          >
            Import {count} Testimonials
          </DefaultButton>
        </FormGrid>
      </div>
    );

  React.useEffect(() => {
    onSubmit();
  }, [box]);

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
      }}
    >
      {isGoogle ? google : notGoogle}
    </div>
  );
};
