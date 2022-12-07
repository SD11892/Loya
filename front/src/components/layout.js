import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Sidebar } from "./sideBar";

const LayoutRoot = styled("div")(() => ({
  backgroundColor: "#ffffff",
  display: "flex",
  height: "100%",
  overflow: "hidden",
  width: "100%",
}));

const LayoutContent = styled("div")(() => ({
  position: "relative",
  flexGrow: "1",
  overflowY: "scroll",
  height: "100%",
}));

const LayoutContainer = styled("div")(() => ({
  flexDirection: "column",
  paddingTop: "2rem",
  maxWidth: "82rem",
  width: "80%",
  paddingBottom: "2.5rem",
  height: "100%",
}));

export const Layout = () => (
  <LayoutRoot>
    <Sidebar />
    <LayoutContent>
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </LayoutContent>
  </LayoutRoot>
);
