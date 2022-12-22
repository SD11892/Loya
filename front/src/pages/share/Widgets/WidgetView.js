import * as React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../actions/testimonial";
import { getByFormUrl } from "../../../actions/testimonialForm";

import { Card, Grid, Avatar, Rating } from "@mui/material";

export default function CreateWidget() {
  const testimonials = useSelector((state) => state.testimonial.testimonial);
  const dispatch = useDispatch();
  const url = window.location.pathname.slice(-6);

  const [bgColor, setBgColor] = React.useState("");
  const [txtColor, setTxtColor] = React.useState("");
  const [ratingColor, setRatingColor] = React.useState("");
  const [space, setSpace] = React.useState("");
  const [shadow, setShadow] = React.useState("");
  const [radius, setRadius] = React.useState("");

  React.useEffect(() => {
    dispatch(getAll());
    getByFormUrl(url)
      .then((res) => {
        const result = res.data.data.data;
        setSpace(result.spacing);
        setShadow(result.shadow);
        setRadius(result.border);
        setBgColor(result.bgColor);
        setTxtColor(result.txtColor);
        setRatingColor(result.ratingColor);
      })
      .catch((err) => {
        alert("Invalid Form");
      });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "rgb(243,244,246)",
      }}
    >
      <div
        style={{
          float: "grid",
          gridTemplateColumns: "repeat(auto-fill,350px)",
          gap:
            space === "small"
              ? "0.5rem"
              : space === "medium"
              ? "1rem"
              : space === "large"
              ? "1.5rem"
              : space === "extra large"
              ? "2rem"
              : "unset",
          padding: "2rem",
          display: "grid",
          height: "min-content",
        }}
      >
        {testimonials.map((row) =>
          row.status === 1 ? (
            <Card
              style={{
                width: "20rem",
                padding: "1rem",
                height: "min-content",
                background: bgColor,
                color: txtColor,
                borderRadius:
                  radius === "small"
                    ? "0.375rem"
                    : radius === "medium"
                    ? "0.5rem"
                    : radius === "large"
                    ? "0.75rem"
                    : radius === "extra large"
                    ? "1rem"
                    : "unset",
                boxShadow:
                  shadow === "small"
                    ? "0 1px 2px 0 rgb(0, 0, 0 / 0.05)"
                    : shadow === "medium"
                    ? "0 1px 3px 0 rgb(0, 0, 0 / 0.1), 0 1px 2px -1px rgb(0, 0, 0 / 0.1)"
                    : shadow === "large"
                    ? "0 4px 6px -1px rgb(0, 0, 0 / 0.1), 0 2px 4px -2px rgb(0, 0, 0 / 0.1)"
                    : shadow === "extra large"
                    ? "0 10px 15px -3px rgb(0, 0, 0 / 0.1), 0 4px 6px -4px rgb(0, 0, 0 / 0.1)"
                    : "unset",
              }}
            >
              <Grid
                container
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Grid
                  item
                  style={{
                    marginTop: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {row.data !== null ? (
                    <Avatar
                      style={{
                        borderRadius: "50%",
                        border: "1px solid #ddd",
                        borderColor: "rgb(237, 243, 249)",
                        borderWidth: "4px",
                      }}
                      sx={{ width: 56, height: 56 }}
                    >
                      <img
                        src={`data:image/png;base64,${btoa(
                          String.fromCharCode(...new Uint8Array(row.data.data))
                        )}`}
                        width={"60px"}
                      />
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
                      <img
                        src={`http://localhost:3000/user.png`}
                        width={"60px"}
                      />
                    </Avatar>
                  )}

                  <div>
                    <div>{row.value.split(",")[0]}</div>
                    <div>
                      {row.key.indexOf("Headline") !== -1
                        ? row.value.split(",")[
                            row.key.split(",").indexOf("Headline")
                          ]
                        : null}
                    </div>
                  </div>
                </Grid>
                <Grid item style={{ marginTop: "0.5rem" }}>
                  <Rating
                    readOnly
                    value={row.rating}
                    style={{
                      color: ratingColor,
                    }}
                  />
                </Grid>
                <Grid item style={{ marginTop: "0.5rem" }}>
                  {row.content}
                </Grid>
                <Grid item style={{ marginTop: "0.5rem" }}>
                  {moment(row.date).format("ll")}
                </Grid>
              </Grid>
            </Card>
          ) : null
        )}
      </div>
    </div>
  );
}
