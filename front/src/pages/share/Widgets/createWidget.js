import * as React from "react";

// import Link from '@mui/material/Link';

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";

import { styled } from "@mui/material/styles";

import EmbedButton from "../../../components/uielements/buttons/embedButton";

import { LeftArrow as LeftArrowIcon } from "../../../icons/leftArrow";
import { Embed as EmbedIcon } from "../../../icons/embed";
import { Menu as MenuIcon } from "../../../icons/menu";
import { Pencil as PencilIcon } from "../../../icons/pencil";
import { MagicPencil as MagicPencilIcon } from "../../../icons/magicPencil";
import { Switch as SwitchIcon } from "../../../icons/switch";
import { WallStyle as WallStyleIcon } from "../../../icons/wallStyle";
import { List as ListIcon } from "../../../icons/list";
import { Carousel as CarouselIcon } from "../../../icons/carousel";

import { purple } from "@mui/material/colors";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

import black from "../../../assets/images/black.png";
import blue from "../../../assets/images/blue.png";
import blue_2 from "../../../assets/images/blue_2.png";
import dark from "../../../assets/images/dark.png";
import defaultImage from "../../../assets/images/default.png";
import splash from "../../../assets/images/splash.png";
import violet from "../../../assets/images/violet.png";
import white from "../../../assets/images/white.png";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: "#05966933",
  borderRadius: "9999px",
  marginLeft: "0.5rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  paddingTop: "0.375rem",
  paddingBottom: "0.375rem",
  fontSize: "0.75rem",
  lineHeight: "1rem",
  fontWeight: "500",
  color: "rgb(5 150 105)",
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#22C55E",
  "&:hover": {
    backgroundColor: "#27D064",
  },
}));

export default function CreateWidget() {
  const [view, setView] = React.useState("list");
  const [tileStyle, setTileStyle] = React.useState("tileStyle");
  const [ratingValue, setRatingValue] = React.useState("ratingValue");

  const handleChange = (even, nextView) => {
    setView(nextView);
  };

  const handleTileStyleChange = (event, newStyle) => {
    setTileStyle(newStyle);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "rgb(15,23,42)" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <LeftArrowIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            Create Widget
          </Typography>
          <Div>⚡ Beta</Div>
          <Typography sx={{ flexGrow: 1 }} />
          <ColorButton variant="contained">Save Changes</ColorButton>
          &nbsp;&nbsp;
          <EmbedButton variant="contained">
            <EmbedIcon style={{ background: "rgb(146,58,254)" }} />
            Embed
          </EmbedButton>
          &nbsp;&nbsp;&nbsp;
          <MenuIcon />
        </Toolbar>
      </AppBar>
      <div style={{ display: "table", clear: "both" }}>
        <div
          id="vertexAppbar"
          style={{
            float: "left",
            borderStyle: "ridge",
            borderRightWidth: "1px",
            borderLeftWidth: "0px",
            borderTopWidth: "0px",
            borderBottomWidth: "0px",
            backgroundColor: "rgb(249 250 251)",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            paddingTop: "1rem",
            width: "2.3rem",
            height: "55rem",
          }}
        >
          <ToggleButtonGroup
            orientation="vertical"
            value={view}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="list" aria-label="list" size="small">
              <PencilIcon />
            </ToggleButton>
            <ToggleButton value="module" aria-label="module" size="small">
              <MagicPencilIcon />
            </ToggleButton>
            <ToggleButton value="quilt" aria-label="quilt" size="small">
              <SwitchIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div
          style={{
            float: "left",
          }}
        >
          <Paper
            elevation={8}
            style={{
              width: "22.5rem",
              height: "55rem",
            }}
          >
            <ToggleButtonGroup
              color="primary"
              value={tileStyle}
              exclusive
              onChange={handleTileStyleChange}
              aria-label="Platform"
              style={{
                paddingTop: "1rem",
                paddingLeft: "3%",
                paddingRight: "3%",
                textAlign: "center",
              }}
              size="small"
            >
              <ToggleButton
                value="wall"
                style={{
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                }}
              >
                <WallStyleIcon />
                &nbsp;&nbsp;Wall
              </ToggleButton>
              <ToggleButton
                value="list"
                style={{
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                }}
              >
                <ListIcon />
                &nbsp;&nbsp;List
              </ToggleButton>
              <ToggleButton
                value="carousel"
                style={{
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                }}
              >
                <CarouselIcon />
                &nbsp;&nbsp;Carousel
              </ToggleButton>
            </ToggleButtonGroup>
            <div style={{ padding: "1rem" }}>
              <div
                style={{
                  display: "table",
                  paddingBottom: "1rem",
                }}
              >
                <Card
                  style={{
                    width: "9rem",
                    height: "9rem",
                    float: "left",
                  }}
                >
                  <img
                    alt=""
                    src={black}
                    style={{ width: "9rem", height: "9rem" }}
                  />
                </Card>
                <Card
                  style={{
                    width: "9rem",
                    height: "9rem",
                    float: "left",
                    marginLeft: "1rem",
                  }}
                >
                  <img
                    alt=""
                    src={blue_2}
                    style={{ width: "9rem", height: "9rem" }}
                  />
                </Card>
              </div>
              <div
                style={{
                  display: "table",
                  paddingBottom: "1rem",
                }}
              >
                <Card
                  style={{
                    width: "9rem",
                    height: "9rem",
                    float: "left",
                  }}
                >
                  <img
                    alt=""
                    src={blue}
                    style={{ width: "9rem", height: "9rem" }}
                  />
                </Card>
                <Card
                  style={{
                    width: "9rem",
                    height: "9rem",
                    float: "left",
                    marginLeft: "1rem",
                  }}
                >
                  <img
                    alt=""
                    src={dark}
                    style={{ width: "9rem", height: "9rem" }}
                  />
                </Card>
              </div>
              <div
                style={{
                  display: "table",
                  paddingBottom: "1rem",
                }}
              >
                <Card
                  style={{
                    width: "9rem",
                    height: "9rem",
                    float: "left",
                  }}
                >
                  <img
                    alt=""
                    src={defaultImage}
                    style={{ width: "9rem", height: "9rem" }}
                  />
                </Card>
                <Card
                  style={{
                    width: "9rem",
                    height: "9rem",
                    float: "left",
                    marginLeft: "1rem",
                  }}
                >
                  <img
                    alt=""
                    src={splash}
                    style={{ width: "9rem", height: "9rem" }}
                  />
                </Card>
              </div>
              <div
                style={{
                  display: "table",
                  paddingBottom: "1rem",
                }}
              >
                <Card
                  style={{
                    width: "9rem",
                    height: "9rem",
                    float: "left",
                  }}
                >
                  <img
                    alt=""
                    src={violet}
                    style={{ width: "9rem", height: "9rem" }}
                  />
                </Card>
                <Card
                  style={{
                    width: "9rem",
                    height: "9rem",
                    float: "left",
                    marginLeft: "1rem",
                  }}
                >
                  <img
                    alt=""
                    src={white}
                    style={{ width: "9rem", height: "9rem" }}
                  />
                </Card>
              </div>
            </div>
          </Paper>
        </div>
        <div
          style={{
            float: "left",
            padding: "2rem",
          }}
        >
          <Card
            style={{
              width: "25rem",
              height: "12.5rem",
              float: "left",
              marginLeft: "1rem",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <img
                  alt=""
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    padding: "1rem",
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                <p style={{ fontSize: "18px" }}>
                  <b>Ardi</b>
                  <br />
                  <text
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    Co-founder of Loya
                  </text>
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  paddingLeft: "2rem",
                  paddingTop: "0",
                  paddingBottom: "0",
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={ratingValue}
                  onChange={(event, newValue) => {
                    setRatingValue(newValue);
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  paddingLeft: "2rem",
                }}
              >
                <text>
                  I just learned about Loya this morning and now they have a new
                  customer. I'm head over heels about William's project. It just
                  works! Well done!
                </text>
              </Grid>
            </Grid>
          </Card>
        </div>
      </div>
    </Box>
  );
}
