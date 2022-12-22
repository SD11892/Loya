import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Grid, Avatar, Rating } from "@mui/material";
import moment from "moment";
import DefaultButton from "../uielements/buttons/defaultButton";
import LinkButton from "../uielements/buttons/linkButton";
import { Heart as HeartIcon } from "../../icons/heart";
import PageTitle from "../uielements/pageTitle";
import { Link } from "react-router-dom";

const Site = ({
  testimonials,
  pColor,
  keys,
  values,
  pTitle,
  subTitle,
  ctaTitle,
  ctaUrl,
}) => {
  const navigate = useNavigate();
  React.useEffect(() => {}, [keys, values]);
  return (
    <div style={{ background: "#F4F4F5", height: "100%" }}>
      <div
        style={{
          display: "flex",
          height: "3.5rem",
          padding: "1rem",
          alignItems: "center",
          background: "white",
          gap: "0.5rem",
        }}
      >
        <HeartIcon />
        <PageTitle>Loya</PageTitle>
        {keys.map((row, index) => {
          return <Link to={values[index]}>{row}</Link>;
        })}
      </div>
      <div
        style={{
          background: pColor,
          paddingTop: "6rem",
          paddingBottom: "6rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "2.5rem", color: "#fff" }}>{pTitle}</div>
        <h3 style={{ color: "#fff" }}>{subTitle}</h3>
        <LinkButton
          onClick={() => {
            window.location.replace(`${ctaUrl}`);
          }}
        >
          {ctaTitle}
        </LinkButton>
      </div>
      <div
        style={{
          gridTemplateColumns: "repeat(auto-fill,350px)",
          display: "grid",
          gap: "1rem",
          padding: "1rem",
          marginTop: "-2rem",
          justifyContent: "center",
        }}
      >
        {testimonials.map((row) => {
          return (
            <Card
              style={{
                width: "20rem",
                padding: "1rem",
                height: "min-content",
                background: "#ffffff",
                color: "#374151",
                borderRadius: "0.375rem",
                boxShadow: "0 1px 2px 0 rgb(0, 0, 0 / 0.05)",
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
                        src={`http://35.170.73.191:3000/user.png`}
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
                      color: "#fbbf24",
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
          );
        })}
      </div>
    </div>
  );
};

export default Site;
