import { Button, Grid, TextField, InputBase, Avatar } from "@mui/material";
import * as React from "react";
import PageTitle from "../uielements/pageTitle";
import { Facebook } from "../../icons/facebook";
import TextSmall from "../uielements/textSmall";
import { Qmark } from "../../icons/qmark";
import { Star } from "../../icons/star";
import DeleteButton from "../uielements/buttons/deleteButton";

export const ImportChannel = () => {
  return (
    <div
      style={{
        paddingTop: "2rem",
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
          border: "1px solid #ddd",
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
          marginBottom: "4rem",
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
          <PageTitle>Import from Facebook</PageTitle>
          <Facebook />
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          spacing={2}
          style={{ marginTop: "0.25rem" }}
        >
          <Grid item xs={6}>
            <TextSmall>
              Name
              <Qmark />
            </TextSmall>
          </Grid>
          <Grid item xs={6}>
            <TextSmall>Tagline</TextSmall>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          spacing={2}
          style={{ marginTop: "0.25rem", marginBottom: "0.25rem" }}
        >
          <Grid item xs={6}>
            <InputBase
              placeholder="Luke Skywalker"
              style={{
                width: "100%",
                border: "1px solid #ddd",
                borderRadius: "5px",
                paddingLeft: "5px",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <InputBase
              placeholder="CEO of knight Inc."
              style={{
                width: "100%",
                border: "1px solid #ddd",
                borderRadius: "5px",
                paddingLeft: "5px",
              }}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between" spacing={2}>
          <Grid item xs={6}>
            <TextSmall>Avatar</TextSmall>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: "0.25rem" }}>
          <Grid item>
            <Avatar
              sx={{
                width: "40px",
                height: "40px",
              }}
              src="./user.png"
            />
          </Grid>
          <Grid item>
            <DeleteButton>Pick an image</DeleteButton>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          spacing={2}
          style={{ marginTop: "0.25rem" }}
        >
          <Grid item xs={6}>
            <TextSmall>Review</TextSmall>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          spacing={2}
          style={{ marginTop: "0.25rem" }}
        >
          <Grid item xs={12}>
            <textarea
              name="review"
              placeholder="Write your review here"
              style={{
                width: "100%",
                minHeight: "8rem",
                resize: "vertical",
                borderColor: "#ddd",
                borderRadius: "1rem",
                paddingTop: "1rem",
                paddingLeft: "1rem",
              }}
            ></textarea>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          spacing={2}
          style={{ marginTop: "0.25rem" }}
        >
          <Grid item xs={6}>
            <TextSmall>Rating</TextSmall>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          spacing={2}
          style={{ marginTop: "0.25rem" }}
        >
          <Grid item xs={6}>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          spacing={2}
          style={{ marginTop: "0.25rem" }}
        >
          <Grid item xs={6}>
            <TextSmall>Review URL</TextSmall>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          spacing={2}
          style={{ marginTop: "0.25rem" }}
        >
          <Grid item xs={6}>
            <InputBase
              style={{
                width: "100%",
                border: "1px solid #ddd",
                borderRadius: "5px",
                paddingLeft: "5px",
              }}
              placeholder="https://"
            />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          spacing={2}
          style={{ marginTop: "0.25rem" }}
        >
          <Grid item xs={6}>
            <TextSmall>Date</TextSmall>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          spacing={2}
          style={{ marginTop: "0.25rem" }}
        >
          <Grid item xs={6}>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          spacing={2}
          style={{ marginTop: "0.25rem" }}
        >
          <Grid item xs={12}>
            <Button
              style={{
                borderRadius: "1rem",
                background: "#000",
                color: "#fff",
                width: "100%",
              }}
            >
              Import Review
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
