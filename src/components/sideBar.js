import { Link, useNavigate } from "react-router-dom";
import { deepPurple } from "@mui/material/colors";
import { Grid, Avatar } from "@mui/material";
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
  const navigate = useNavigate();

  return (
    <SideDrawer open variant="permanent" style={{ width: "14rem" }}>
      <SiderButton>
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
          <MenuButton>
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
    </SideDrawer>
  );
};
