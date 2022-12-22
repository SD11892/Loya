import { useNavigate } from "react-router-dom";
import BackwardButton from "../uielements/buttons/backwardButton";
import { Grid } from "@mui/material";
import PageTitle from "../uielements/pageTitle";
import MenuButton from "../uielements/buttons/menuButton";
import { Google } from "../../icons/google";
import { Facebook } from "../../icons/facebook";
import SiderText from "../uielements/siderText";
import { Pencil as PencilIcon } from "../../icons/pencil";
import { Camera as CameraIcon } from "../../icons/camera";

export const ImportSelection = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <Grid container pt={"2rem"}>
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
          <MenuButton active="true">
            <PencilIcon />
            <SiderText>Text Testimonial</SiderText>
          </MenuButton>
          <MenuButton>
            <CameraIcon />
            <SiderText>Video Testimonial</SiderText>
          </MenuButton>
          <MenuButton>
            <Google />
            <SiderText>Google</SiderText>
          </MenuButton>
          <MenuButton>
            <Facebook />
            <SiderText>Facebook</SiderText>
          </MenuButton>
        </Grid>
      </Grid>
    </div>
  );
};
