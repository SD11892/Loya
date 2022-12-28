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
} from "@mui/material";
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
import { Widget as WidgetIcon } from "../icons/widget";
import { DownArrow } from "../icons/downArrow";

export const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menu, setMenu] = React.useState(
    `${window.location.pathname.replace(/\//g, "")}`
  );
  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleToggleChange = (event, newAlignment) => {
    setMenu(newAlignment);
  };

  React.useEffect(() => {}, [menu]);
  return (
    <SideDrawer open variant="permanent" style={{ width: "14rem" }}>
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

      <ToggleButtonGroup
        value={menu}
        onChange={handleToggleChange}
        style={{ flexDirection: "column" }}
      >
        <Grid container mb={2}>
          <Label>COLLECT</Label>
        </Grid>
        <MenuButton
          value="forms"
          onClick={() => {
            navigate("/forms");
          }}
        >
          <FormIcon />
          <SiderText>Forms</SiderText>
        </MenuButton>
        <MenuButton
          value="import"
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
          onClick={() => {
            navigate("/search");
          }}
        >
          <SearchIcon />
          <SiderText>Search</SiderText>
        </MenuButton>
        <MenuButton value="tags">
          <TagsIcon />
          <SiderText>Tags</SiderText>
        </MenuButton>
        <Grid container mb={2}>
          <Label>SHARE</Label>
        </Grid>
        <MenuButton
          value="walls"
          onClick={() => {
            navigate("/walls");
          }}
        >
          <WallIcon />
          <SiderText>Wall of Love</SiderText>
        </MenuButton>
        <MenuButton
          value="widgets"
          onClick={() => {
            navigate("/widgets");
          }}
        >
          <WidgetIcon />
          <SiderText>Widgets</SiderText>
        </MenuButton>
      </ToggleButtonGroup>
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
        <MenuButton sx={{ p: 2 }}>
          {localStorage.getItem("user").username}
        </MenuButton>
        <MenuButton sx={{ p: 2 }}>Account and Billing</MenuButton>
        <MenuButton sx={{ p: 2 }}>Upgrade</MenuButton>
        <MenuButton sx={{ p: 2 }}>Roadmap</MenuButton>
        <MenuButton
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
  );
};
