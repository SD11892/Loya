import { useNavigate } from "react-router-dom";
import BackwardButton from "../uielements/backwardButton";
import { Grid } from "@mui/material";
import PageTitle from "../uielements/pageTitle";
import MenuButton from "../uielements/menuButton";
import { Google } from "../../icons/google";
import { Facebook } from "../../icons/facebook";

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
          ← Testimonials
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
            <Facebook />
            Facebook
          </MenuButton>
          <MenuButton>
            <Google />
            Google
          </MenuButton>
        </Grid>
      </Grid>
    </div>
  );
};
