import { Grid } from "@mui/material";
import * as React from "react";
import PageTitle from "../uielements/pageTitle";
import { ReactSVG } from "react-svg";
import Description from "../../components/uielements/description";

export const ImportHistory = () => {
  return (
    <div
      style={{
        width: "16rem",
        width: "100%",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <Grid container pt={"4rem"}>
        <Grid item xs={12} style={{ marginBottom: "1rem" }}>
          <PageTitle>Import History</PageTitle>
        </Grid>
        <Grid
          container
          style={{ paddingTop: "1rem", borderTop: "1px solid #ddd" }}
        >
          <Grid item xs={6}>
            <ReactSVG src="history.svg" />
          </Grid>
          <Grid item xs={6}>
            <PageTitle>No testimonials imported yet.</PageTitle>
            <Description style={{ fontSize: "1rem" }}>
              Pick a testimonial source from the sidebar to get started.
            </Description>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
