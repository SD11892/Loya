import * as React from "react";
import { useNavigate } from "react-router-dom";
import { deepPurple } from "@mui/material/colors";
import { Grid, Avatar, Popover, Typography } from "@mui/material";
import SideDrawer from "./uielements/drawer";
import SiderButton from "./uielements/siderButton";
import MenuButton from "./uielements/menuButton";
import SiderText from "./uielements/siderText";
import Label from "./uielements/label";
import { Form as FormIcon } from "../icons/form";
import { Import as ImportIcon } from "../icons/import";
import { Heart as HeartIcon } from "../icons/heart";
import { Search as SearchIcon } from "../icons/search";
import { Tags as TagsIcon } from "../icons/tags";
import { Wall as WallIcon } from "../icons/wall";
import { Widget as WidgetIcon } from "../icons/widget";
import { Rich as RichIcon } from "../icons/rich";
import { DownArrow } from "../icons/downArrow";

export const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

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
          >
            W
          </Avatar>
        </div>
        <div style={{ fontSize: "0.9rem", fontWeight: "600" }}>
          William Williams
        </div>
        <DownArrow />
      </SiderButton>
      <Grid container mb={2}>
        <Label>COLLECT</Label>
        <Grid xs={12}>
          <MenuButton
            onClick={() => {
              navigate("/forms");
            }}
          >
            <FormIcon />
            <SiderText>Forms</SiderText>
          </MenuButton>
        </Grid>
        <Grid xs={12}>
          <MenuButton
            onClick={() => {
              navigate("/import");
            }}
          >
            <ImportIcon />
            <SiderText>Import Testimonials</SiderText>
          </MenuButton>
        </Grid>
      </Grid>
      <Grid container mb={2}>
        <Label>MANAGE</Label>
        <Grid xs={12}>
          <MenuButton
            onClick={() => {
              navigate("/testimonials");
            }}
          >
            <HeartIcon />
            <SiderText>Testmonials</SiderText>
          </MenuButton>
        </Grid>
        <Grid xs={12}>
          <MenuButton
            onClick={() => {
              navigate("/search");
            }}
          >
            <SearchIcon />
            <SiderText>Search</SiderText>
          </MenuButton>
        </Grid>
        <Grid xs={12}>
          <MenuButton>
            <TagsIcon />
            <SiderText>Tags</SiderText>
          </MenuButton>
        </Grid>
      </Grid>
      <Grid container mb={2}>
        <Label>SHARE</Label>
        <Grid xs={12}>
          <MenuButton
            onClick={() => {
              navigate("/wall");
            }}
          >
            <WallIcon />
            <SiderText>Wall of Love</SiderText>
          </MenuButton>
        </Grid>
        <Grid xs={12}>
          <MenuButton onClick={() => {
              navigate("/widgets");
            }}>
            <WidgetIcon />
            <SiderText>Widgets</SiderText>
          </MenuButton>
        </Grid>
        <Grid xs={12}>
          <MenuButton>
            <RichIcon />
            <SiderText>Rich Snippet</SiderText>
          </MenuButton>
        </Grid>
      </Grid>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Typography sx={{ p: 2 }} style={{ cursor: "pointer" }}>
          Signed in as dev@jovanni.services
        </Typography>
        <Typography sx={{ p: 2 }} style={{ cursor: "pointer" }}>
          Account and Billing
        </Typography>
        <Typography sx={{ p: 2 }} style={{ cursor: "pointer" }}>
          Upgrade
        </Typography>
        <Typography sx={{ p: 2 }} style={{ cursor: "pointer" }}>
          Roadmap
        </Typography>
        <Typography sx={{ p: 2 }} style={{ cursor: "pointer" }}>
          Sign Out
        </Typography>
      </Popover>
    </SideDrawer>
  );
};
