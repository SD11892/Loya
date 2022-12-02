import { useNavigate } from "react-router-dom";
import BackwardButton from "../uielements/backwardButton";
import { Grid, IconButton } from "@mui/material";
import PageTitle from "../uielements/pageTitle";
import { ThemeSet } from "./ThemeSet";
import { Share as ShareIcon } from "../../icons/wall/share";

export const Pane = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Grid
        container
        pt={"2rem"}
        justifyContent="space-between"
        style={{ alignItems: "center" }}
      >
        <Grid item>
          <BackwardButton
            onClick={() => {
              navigate("/testimonials");
            }}
          >
            ← Dashboard
          </BackwardButton>
        </Grid>
        <Grid item>
          <IconButton style={{ border: "1px solid #ddd" }}>
            <ShareIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container pt={"2rem"}>
        <Grid item xs={12} style={{ marginBottom: "1rem" }}>
          <PageTitle>Wall of Love</PageTitle>
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        style={{
          padding: "1rem",
          marginBottom: "1rem",
          background: "#F3F4F6",
          overflowY: "auto",
        }}
      >
        <Grid item xs={1}>
          💡
        </Grid>
        <Grid item xs={11}>
          Share your testimonials with your customers using your wall of love.
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        style={{
          marginBottom: "1rem",
        }}
      >
        <ThemeSet />
      </Grid>
    </div>
  );
};
