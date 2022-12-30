import { useNavigate } from "react-router-dom";
import BackwardButton from "../uielements/buttons/backwardButton";
import { Grid, ToggleButtonGroup } from "@mui/material";
import PageTitle from "../uielements/pageTitle";
import MenuButton from "../uielements/buttons/menuButton";
import { Google } from "../../icons/google";
import { Facebook } from "../../icons/facebook";
import SiderText from "../uielements/siderText";
import { Pencil as PencilIcon } from "../../icons/pencil";
import { Camera as CameraIcon } from "../../icons/camera";

export const ImportSelection = (props) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <Grid container>
        <BackwardButton
          onClick={() => {
            navigate("/testimonials");
          }}
        >
          <SiderText>← Testimonials</SiderText>
        </BackwardButton>
        <Grid item xs={12} style={{ marginBottom: "1rem" }}>
          <PageTitle>Import your testimonials</PageTitle>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ paddingTop: "1rem", borderTop: "1px solid #ddd" }}
        >
          <ToggleButtonGroup
            value={props.select}
            style={{ flexDirection: "column", width: "100%" }}
          >
            <MenuButton
              value="text"
              key="text"
              onClick={() => {
                props.setSelect("text");
              }}
            >
              <PencilIcon />
              <SiderText>Text Testimonial</SiderText>
            </MenuButton>
            <MenuButton
              value="video"
              key="video"
              onClick={() => {
                props.setSelect("video");
              }}
            >
              <CameraIcon />
              <SiderText>Video Testimonial</SiderText>
            </MenuButton>
            <MenuButton
              value="google"
              key="google"
              onClick={() => {
                props.setSelect("google");
              }}
            >
              <Google />
              <SiderText>Google</SiderText>
            </MenuButton>
            <MenuButton
              value="facebook"
              key="facebook"
              onClick={() => {
                props.setSelect("facebook");
              }}
            >
              <Facebook />
              <SiderText>Facebook</SiderText>
            </MenuButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </div>
  );
};
