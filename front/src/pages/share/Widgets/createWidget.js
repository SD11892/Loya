import * as React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Editor from "react-simple-code-editor";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import Link from '@mui/material/Link';

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { purple } from "@mui/material/colors";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import Badge from "@mui/material/Badge";
import { Drawer } from "@mui/material";

import Picker from "../../../components/uielements/picker";
import EmbedButton from "../../../components/uielements/buttons/embedButton";
import ImageCard from "../../../components/uielements/imageCard";
import FormLabel from "../../../components/uielements/form/FormLabel";
import PageTitle from "../../../components/uielements/pageTitle";
import Description from "../../../components/uielements/description";

import { LeftArrow as LeftArrowIcon } from "../../../icons/leftArrow";
import { Embed as EmbedIcon } from "../../../icons/embed";
import { Menu as MenuIcon } from "../../../icons/menu";
import { Pencil as PencilIcon } from "../../../icons/pencil";
import { MagicPencil as MagicPencilIcon } from "../../../icons/magicPencil";
import { Switch as SwitchIcon } from "../../../icons/switch";
import { Close as CloseIcon } from "../../../icons/close";

import {
  getAll,
  saveIndex,
  updateTestimonial,
} from "../../../actions/testimonial";

import { getByFormUrl, saveForm } from "../../../actions/testimonialForm";

import { createColor } from "material-ui-color";
import { isEmpty } from "../../../util/isEmpty";

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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const infor = {
  url: "",
  spacing: "",
  shadow: "",
  border: "",
  bgColor: "",
  txtColor: "",
  ratingColor: "",
};

export default function CreateWidget() {
  const testimonials = useSelector((state) => state.testimonial.testimonial);
  const dispatch = useDispatch();
  const url = window.location.pathname
    .replace(/testimonialforms/i, "")
    .replace("//", "");

  const [view, setView] = React.useState("theme");
  const [bgColor, setBgColor] = React.useState("");
  const [txtColor, setTxtColor] = React.useState("");
  const [ratingColor, setRatingColor] = React.useState("");
  const [space, setSpace] = React.useState("");
  const [shadow, setShadow] = React.useState("");
  const [radius, setRadius] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [itemList, setItemList] = React.useState([]);
  const [drawerState, setDrawerState] = React.useState(false);
  const [code, setCode] = React.useState(
    `<div class="senja-frame-embed" data-id="ea6efa18-e0a0-42cd-9928-1ecc2b63c8a5"></div>
    <script defer type="text/javascript" src="https://widget.senja.io/embed/frame.js"></script>`
  );

  const handleChange = (even, nextView) => {
    setView(nextView);
  };
  const handleSave = () => {
    itemList.map((row, index) => {
      updateTestimonial(row, row.data);
      if (index === itemList.length - 1) {
        alert("Save Changed");
      }
    });
    infor.url = url;
    infor.spacing = space;
    infor.shadow = shadow;
    infor.border = radius;
    infor.bgColor = bgColor;
    infor.txtColor = txtColor;
    infor.ratingColor = ratingColor;
    saveForm(infor);
  };

  const handlebgColorChange = (value) => {
    setBgColor(value.css.backgroundColor);
  };
  const handletxtColorChange = (value) => {
    setTxtColor(value.css.backgroundColor);
  };
  const handleratingColorChange = (value) => {
    setRatingColor(value.css.backgroundColor);
  };
  const handleRadiusChange = (value) => {
    setRadius(value.target.value);
  };
  const handleSpaceChange = (value) => {
    setSpace(value.target.value);
  };
  const handleShadowChange = (value) => {
    setShadow(value.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    dispatch(saveIndex(itemList));
    setOpen(false);
  };

  const onDragEnd = (droppedItem) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    var updatedList = [...itemList];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // Update State
    setItemList(updatedList);
  };

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
    setItemList(testimonials);
  }, []);

  React.useEffect(() => {
    setItemList(testimonials);
  }, [testimonials]);

  React.useEffect(() => {}, [
    view,
    space,
    radius,
    shadow,
    bgColor,
    ratingColor,
    txtColor,
    itemList,
    testimonials,
    code,
  ]);

  const navigate = useNavigate();

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
            onClick={() => {
              navigate("/widgets");
            }}
          >
            <LeftArrowIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            Create Widget
          </Typography>
          <Div>⚡ Beta</Div>
          <Typography sx={{ flexGrow: 1 }} />
          <ColorButton
            variant="contained"
            onClick={() => {
              handleSave();
            }}
          >
            Save Changes
          </ColorButton>
          &nbsp;&nbsp;
          <EmbedButton
            variant="contained"
            onClick={() => {
              setDrawerState(true);
            }}
          >
            <EmbedIcon />
            Embed
          </EmbedButton>
          &nbsp;&nbsp;&nbsp;
          <MenuIcon />
        </Toolbar>
      </AppBar>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex" }}>
          <div
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
              <ToggleButton value="theme" aria-label="theme" size="small">
                <MagicPencilIcon />
              </ToggleButton>
              <ToggleButton value="design" aria-label="design" size="small">
                <PencilIcon />
              </ToggleButton>
              <ToggleButton value="setting" aria-label="setting" size="small">
                <SwitchIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              float: "left",
              width: "20rem",
            }}
          >
            {view === "theme" ? (
              <Paper
                elevation={8}
                style={{
                  width: "auto",
                  height: "auto",
                  display: "grid",
                  gridTemplateColumns: "repeat(2,minmax(0,1fr))",
                  gap: "1rem",
                  padding: "0.5rem",
                  boxShadow: "unset",
                }}
              >
                <ImageCard>
                  <ButtonBase
                    onClick={() => {
                      setBgColor("white");
                      setTxtColor("black");
                      setRatingColor("#FBBF24");
                    }}
                  >
                    <img
                      alt=""
                      src="../theme1_white.png"
                      style={{ width: "9rem", height: "9rem" }}
                    />
                  </ButtonBase>
                </ImageCard>
                <ImageCard>
                  <ButtonBase
                    onClick={() => {
                      setBgColor("black");
                      setTxtColor("white");
                      setRatingColor("#FBBF24");
                    }}
                  >
                    <img
                      alt=""
                      src="../theme1_black.png"
                      style={{ width: "9rem", height: "9rem" }}
                    />
                  </ButtonBase>
                </ImageCard>
                <ImageCard>
                  <ButtonBase
                    onClick={() => {
                      setBgColor("#234A46");
                      setTxtColor("white");
                      setRatingColor("#B9E1D8");
                    }}
                  >
                    <img
                      alt=""
                      src="../theme1_green.png"
                      style={{ width: "9rem", height: "9rem" }}
                    />
                  </ButtonBase>
                </ImageCard>
                <ImageCard>
                  <ButtonBase
                    onClick={() => {
                      setBgColor("#260D5C");
                      setTxtColor("white");
                      setRatingColor("violet");
                    }}
                  >
                    <img
                      alt=""
                      src="../theme1_violet.png"
                      style={{ width: "9rem", height: "9rem" }}
                    />
                  </ButtonBase>
                </ImageCard>
                <ImageCard>
                  <ButtonBase
                    onClick={() => {
                      setBgColor("white");
                      setTxtColor("black");
                      setRatingColor("transparent");
                    }}
                  >
                    <img
                      alt=""
                      src="../theme2_white.png"
                      style={{ width: "9rem", height: "9rem" }}
                    />
                  </ButtonBase>
                </ImageCard>
                <ImageCard>
                  <ButtonBase
                    onClick={() => {
                      setBgColor("#1E51EF");
                      setTxtColor("white");
                      setRatingColor("transparent");
                    }}
                  >
                    <img
                      alt=""
                      src="../theme2_blue.png"
                      style={{ width: "9rem", height: "9rem" }}
                    />
                  </ButtonBase>
                </ImageCard>
              </Paper>
            ) : view === "design" ? (
              <Paper
                elevation={8}
                style={{
                  displau: "grid",
                  padding: "1.5rem",
                  width: "auto",
                  height: "auto",
                  gap: "1rem",
                  padding: "0.5rem",
                  boxShadow: "unset",
                }}
              >
                <FormLabel>Background Color</FormLabel>
                <Picker
                  value={createColor(bgColor)}
                  onChange={handlebgColorChange}
                />
                <FormLabel>Text Color</FormLabel>
                <Picker
                  value={createColor(txtColor)}
                  onChange={handletxtColorChange}
                />
                <FormLabel>Rating Color</FormLabel>
                <Picker
                  value={createColor(ratingColor)}
                  onChange={handleratingColorChange}
                />
              </Paper>
            ) : (
              <Paper
                elevation={8}
                style={{
                  width: "auto",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  padding: "1.5rem",
                  boxShadow: "unset",
                }}
              >
                <Button variant="outlined" onClick={handleClickOpen}>
                  Reorder testimonials
                </Button>
                <FormLabel>Spacing</FormLabel>
                <Select
                  onChange={handleSpaceChange}
                  value={`${space}`}
                  displayEmpty
                >
                  <MenuItem value="small">Small</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="large">Large</MenuItem>
                  <MenuItem value="extra large">Extra Large</MenuItem>
                </Select>
                <FormLabel>Shadow Size</FormLabel>
                <Select
                  onChange={handleShadowChange}
                  value={shadow}
                  displayEmpty
                >
                  <MenuItem value="none">None</MenuItem>
                  <MenuItem value="small">Small</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="large">Large</MenuItem>
                  <MenuItem value="extra large">Extra Large</MenuItem>
                </Select>
                <FormLabel>Border Radius</FormLabel>
                <Select
                  onChange={handleRadiusChange}
                  value={radius}
                  displayEmpty
                >
                  <MenuItem value="none">None</MenuItem>
                  <MenuItem value="small">Small</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="large">Large</MenuItem>
                  <MenuItem value="extra large">Extra Large</MenuItem>
                </Select>
              </Paper>
            )}
          </div>
        </div>
        <div
          style={{
            width: "100%",
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
            {itemList.map((row) =>
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
                              String.fromCharCode(
                                ...new Uint8Array(row.data.data)
                              )
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
                          <img src={`../../../../../user.png`} width={"60px"} />
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
      </div>
      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid
            item
            xs={6}
            style={{
              alignSelf: "center",
              display: "flex",
              flexDirection: "column",
              marginTop: "2rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <PageTitle>Edit Testimonial Order</PageTitle>
              <IconButton
                style={{ padding: "8px 16px" }}
                onClick={() => {
                  itemList.map((row, index) => {
                    row.index = index;
                    console.log("row=", row);
                  });
                  setItemList([...itemList]);
                  handleClose();
                }}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <div
              style={{
                width: "100%",
                marginTop: "2rem",
              }}
            >
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="some_id" direction="horizontal">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      style={{
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
                        display: "flex",
                        flexWrap: "wrap",
                        height: "min-content",
                      }}
                    >
                      {itemList.map((item, index) => {
                        return (
                          <Draggable
                            key={item.id.toString()}
                            draggableId={item.id.toString()}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                              >
                                <Badge
                                  badgeContent={index + 1}
                                  color="secondary"
                                >
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
                                        {item.data !== null ? (
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
                                                String.fromCharCode(
                                                  ...new Uint8Array(
                                                    item.data.data
                                                  )
                                                )
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
                                              src={`../../../../../user.png`}
                                              width={"60px"}
                                            />
                                          </Avatar>
                                        )}

                                        <div>
                                          <div>{item.value.split(",")[0]}</div>
                                          <div>
                                            {item.key.indexOf("Headline") !== -1
                                              ? item.value.split(",")[
                                                  item.key
                                                    .split(",")
                                                    .indexOf("Headline")
                                                ]
                                              : null}
                                          </div>
                                        </div>
                                      </Grid>
                                      <Grid
                                        item
                                        style={{ marginTop: "0.5rem" }}
                                      >
                                        <Rating
                                          readOnly
                                          value={item.rating}
                                          style={{
                                            color: ratingColor,
                                          }}
                                        />
                                      </Grid>
                                      <Grid
                                        item
                                        style={{ marginTop: "0.5rem" }}
                                      >
                                        {item.content}
                                      </Grid>
                                      <Grid
                                        item
                                        style={{ marginTop: "0.5rem" }}
                                      >
                                        {moment(item.date).format("ll")}
                                      </Grid>
                                    </Grid>
                                  </Card>
                                </Badge>
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Dialog>
      <Drawer
        anchor="right"
        open={drawerState}
        onClose={() => {
          setDrawerState(false);
        }}
      >
        <div>
          <Grid
            container
            spacing={1}
            style={{
              padding: "2rem",
              width: "512px",
              height: "140px",
              backgroundColor: "#6701e6",
            }}
          >
            <PageTitle style={{ color: "white" }}>
              Share your widget?🥳
            </PageTitle>
            <Description style={{ color: "#fff" }}>
              Follow the instructions to embed this on your website
            </Description>
          </Grid>
          <Grid container style={{ padding: "2rem", width: "500px" }}>
            <Grid item style={{ width: "100%" }}>
              Embed on your website
            </Grid>
            <Grid
              item
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                background: "rgb(55,65,81)",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <div
                style={{
                  color: "#fff",
                  padding: "0.5rem",
                  gap: "0.5rem",
                  display: "flex",
                }}
              >
                <ButtonBase
                  style={{
                    fontWeight: 500,
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    padding: "0.125rem",
                    background: "rgb(75,85,99)",
                  }}
                  onClick={() => {
                    let url;
                    setCode();
                  }}
                >
                  Javascript
                </ButtonBase>
                <ButtonBase
                  style={{
                    fontWeight: 500,
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    padding: "0.125rem",
                  }}
                >
                  URL
                </ButtonBase>
                <div style={{ flexGrow: 1 }}></div>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class=""
                  >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
              </div>
              <div>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {code}
                </SyntaxHighlighter>
              </div>
            </Grid>
          </Grid>
        </div>
      </Drawer>
    </Box>
  );
}
