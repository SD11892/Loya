import React, { useEffect } from "react";
import {
  Grid,
  InputBase,
  IconButton,
  Popover,
  Typography,
} from "@mui/material";
import { Googlesm } from "../../icons/google_sm";
import { Facebooksm } from "../../icons/facebook_sm";
import { Search } from "../../icons/search";
import { Rect } from "../../icons/rect";
import MainButton from "../../components/uielements/buttons/mainButton";
import PageTitle from "../../components/uielements/pageTitle";
import Description from "../../components/uielements/description";
import { ReactSVG } from "react-svg";
import { Close as CloseIcon } from "../../icons/close";
import { Export as ExportIcon } from "../../icons/export";
import TestTable from "../../components/testimonials/table";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [visible, setVisible] = React.useState("visible");
  const [height, setHeight] = React.useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Grid
        container
        justifyContent="space-between"
        style={{
          visibility: visible,
          width: "100%",
          lineHeight: "0.8rem",
          marginLeft: "2rem",
          alignItems: "center",
          height: height,
        }}
      >
        <Grid item>
          <PageTitle>Welcome to Loya 👋</PageTitle>
        </Grid>
        <Grid item>
          <IconButton
            style={{ marginLeft: "3.5rem" }}
            onClick={() => {
              setVisible("collapse");
              setHeight("0px");
            }}
          >
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{
          marginTop: "1rem",
          marginLeft: "2rem",
          marginBottom: "2rem",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "1rem",
          visibility: visible,
          height: height,
        }}
      >
        <Grid item xs={0} sm={3} style={{ visibility: visible }}>
          <ReactSVG src="welcome.svg" />
        </Grid>
        <Grid item xs={12} sm={9}>
          <div style={{ marginTop: "1rem", fontWeight: "500" }}>
            Already got testimonials? Import them!
          </div>
          <div style={{ marginTop: "1rem", fontWeight: "500" }}>
            <Description>
              Where do you want to import your testimonials from?
            </Description>
          </div>
          <div
            style={{
              marginTop: "1rem",
              fontSize: "0.7rem",
              fontWeight: "600",
            }}
          >
            <Link
              to="/testimonials"
              style={{
                textDecoration: "unset",
                color: "#52525b",
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "4px 8px",
                margin: "4px",
              }}
            >
              <Googlesm />
              Google
            </Link>
            <Link
              to="/testimonials"
              style={{
                textDecoration: "unset",
                color: "#52525b",
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "4px 8px",
                margin: "4px",
              }}
            >
              <Facebooksm />
              Facebook
            </Link>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        style={{
          visibility: open,
          width: "100%",
          lineHeight: "0.8rem",
          marginLeft: "2rem",
          alignItems: "center",
        }}
      >
        <Grid item style={{ visibility: open }}>
          <PageTitle>Your Testimonials</PageTitle>
        </Grid>
        <Grid item style={{ visibility: open }}>
          <IconButton
            style={{ marginLeft: "3.5rem" }}
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            <ExportIcon />
          </IconButton>
        </Grid>
      </Grid>
      <div
        style={{
          marginTop: "1rem",
          marginLeft: "2.5rem",
          display: "flex",
          width: "100%",
          height: "2rem",
        }}
      >
        <div
          style={{
            twTextOpacity: "1",
            color: "#ddd",
            paddingLeft: "0.625rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            backgroundColor: "rgb(255,255,255)",
            paddingRight: "0.625rem",
            border: "1px solid",
            borderRadius: "0.375rem",
            gap: "0.5rem",
            alignItems: "center",
            flexGrow: "1",
            display: "flex",
            lineHeight: "24px",
            fontWeight: "600",
          }}
        >
          <Search />
          <InputBase
            type="text"
            style={{
              fontSize: ".875rem",
              lineHeight: "24px",
              width: "100%",
            }}
            placeholder="Search for a testimonial, a name or an email..."
          />
          <div>
            <button
              type="button"
              aria-expanded="false"
              style={{
                color: "rgb(107,114,128)",
                padding: "0.125rem",
                border: "unset",
                alignItems: "center",
                height: "100%",
                display: "flex",
                background: "#fff",
              }}
            >
              <Rect />
            </button>
          </div>
        </div>
        <MainButton>
          <span>Search</span>
        </MainButton>
      </div>
      <div style={{ marginLeft: "2.5rem", marginTop: "0.5rem" }}>
        <TestTable />
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }} style={{ cursor: "pointer" }}>
          export to csv
        </Typography>
      </Popover>
    </div>
  );
};

export default Testimonials;
