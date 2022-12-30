import * as React from "react";
import { useNavigate } from "react-router-dom";
import { deepPurple } from "@mui/material/colors";
import {
  Grid,
  Avatar,
  Popover,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SideDrawer from "./uielements/drawer";
import SiderButton from "./uielements/buttons/siderButton";
import MenuButton from "./uielements/buttons/menuButton";
import SiderText from "./uielements/siderText";
import Label from "./uielements/label";
import { Form as FormIcon } from "../icons/form";
import { Import as ImportIcon } from "../icons/import";
import { Testimonial as TestimonialIcon } from "../icons/testimonial";
import { Search as SearchIcon } from "../icons/search";
import { Tags as TagsIcon } from "../icons/tags";
import { Wall as WallIcon } from "../icons/wall";
import { Setting as SettingIcon } from "../icons/setting";
import { UpDown as UpDownIcon } from "../icons/upDown";
import { Widget as WidgetIcon } from "../icons/widget";
import { DownArrow } from "../icons/downArrow";
import ButtonGroup from "./uielements/ButtonGroup";
import { getAll } from "../actions/project";

export const Sidebar = () => {
  const projects = useSelector((state) => state.project.payload);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchor, setAnchor] = React.useState(null);
  const [menu, setMenu] = React.useState(
    `${window.location.pathname.replace(/\//g, "")}`
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);
  const openPop = Boolean(anchor);
  const id = open ? "simple-popover" : undefined;
  const index = openPop ? "simple-popover" : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleUpDownClose = () => {
    setAnchor(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleUpDownClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleToggleChange = (event, newAlignment) => {
    setMenu(newAlignment);
  };
  const handleProject = () => {};

  React.useEffect(() => {}, [menu, openPop, projects]);
  React.useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <div
      style={{
        backgroundColor: "rgb(250 250 250 / 1)",
        borderColor: "rgb(244 244 245)",
      }}
    >
      <SideDrawer
        key="side"
        open
        variant="permanent"
        style={{ width: "14rem" }}
      >
        <SiderButton onClick={handleClick}>
          <div style={{ flex: "none" }}>
            <Avatar
              sx={{
                bgcolor: deepPurple[500],
                fontSize: "0.7rem",
                width: "28px",
                height: "28px",
              }}
            ></Avatar>
          </div>
          <div style={{ fontSize: "0.9rem", fontWeight: "600" }}>
            {JSON.parse(localStorage.getItem("user")).username}
          </div>
          <DownArrow />
        </SiderButton>

        <ButtonGroup
          value={menu}
          onChange={handleToggleChange}
          style={{ flexDirection: "column" }}
        >
          <Grid container mb={2}>
            <Label>COLLECT</Label>
          </Grid>
          <MenuButton
            value="forms"
            key="forms"
            onClick={() => {
              navigate("/forms");
            }}
          >
            <FormIcon />
            <SiderText>Forms</SiderText>
          </MenuButton>
          <MenuButton
            value="import"
            key="import"
            onClick={() => {
              navigate("/import");
            }}
          >
            <ImportIcon />
            <SiderText>Import Testimonials</SiderText>
          </MenuButton>
          <Grid container mb={2}>
            <Label>MANAGE</Label>
          </Grid>
          <MenuButton
            key="testimonials"
            value="testimonial"
            onClick={() => {
              navigate("/testimonials");
            }}
          >
            <TestimonialIcon />
            <SiderText>Testmonials</SiderText>
          </MenuButton>
          <MenuButton
            value="search"
            key="search"
            onClick={() => {
              navigate("/search");
            }}
          >
            <SearchIcon />
            <SiderText>Search</SiderText>
          </MenuButton>
          <MenuButton value="tags" key="tags">
            <TagsIcon />
            <SiderText>Tags</SiderText>
          </MenuButton>
          <Grid container mb={2}>
            <Label>SHARE</Label>
          </Grid>
          <MenuButton
            value="walls"
            key="walls"
            onClick={() => {
              navigate("/walls");
            }}
          >
            <WallIcon />
            <SiderText>Wall of Love</SiderText>
          </MenuButton>
          <MenuButton
            value="widgets"
            key="widgets"
            onClick={() => {
              navigate("/widgets");
            }}
          >
            <WidgetIcon />
            <SiderText>Widgets</SiderText>
          </MenuButton>
        </ButtonGroup>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          style={{ padding: "0.5rem" }}
        >
          <MenuButton sx={{ p: 2 }} key="1">
            {localStorage.getItem("user").username}
          </MenuButton>
          <MenuButton sx={{ p: 2 }} key="2">
            Account and Billing
          </MenuButton>
          <MenuButton sx={{ p: 2 }} key="3">
            Upgrade
          </MenuButton>
          <MenuButton sx={{ p: 2 }} key="4">
            Roadmap
          </MenuButton>
          <MenuButton
            key="5"
            sx={{ p: 2 }}
            style={{ color: "#6701e6" }}
            onClick={() => {
              navigate("/");
              localStorage.clear();
            }}
          >
            Sign Out
          </MenuButton>
        </Popover>
      </SideDrawer>
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100%",
          borderTop: "1px solid #ddd",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: "1rem 1rem",
            alignSelf: "flex-end",
            borderTop: "1px solid #ddd",
            justifyContent: "space-between",
          }}
          onClick={handleProject}
        >
          <div
            style={{
              gap: "0.5rem",
              display: "flex",
              alignItems: "center",
              fontWeight: "500",
            }}
          >
            <div
              style={{
                alignItems: "center",
                display: "flex",
                background: "#ddd",
                padding: "0.2rem",
                borderRadius: "0.2rem",
              }}
            >
              <img src="../heart.png" width="16px" height="16px" />
            </div>
            {projects.map((row, index) => {
              if (index === 0) return row.name;
            })}
          </div>
          <div style={{ display: "flex" }}>
            <IconButton
              onClick={() => {
                navigate(`/settings/${Object.values(projects)[0].id}`);
              }}
            >
              <SettingIcon />
            </IconButton>
            <IconButton onClick={handleUpDownClick}>
              <UpDownIcon />
            </IconButton>
          </div>

          <Popover
            id={index}
            open={openPop}
            anchorEl={anchor}
            onClose={handleUpDownClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            {projects.map((row, index) => {
              return (
                <MenuButton key={index} sx={{ p: 2 }}>
                  {row.name}
                </MenuButton>
              );
            })}
            <MenuButton
              sx={{ p: 2 }}
              style={{ background: "#000", color: "#fff" }}
            >
              Create a New Project
            </MenuButton>
          </Popover>
        </div>
      </div>
    </div>
  );
};
