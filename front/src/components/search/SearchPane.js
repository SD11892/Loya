import { useNavigate, Link } from "react-router-dom";
import BackwardButton from "../uielements/backwardButton";
import { Grid, InputBase, Button } from "@mui/material";
import PageTitle from "../uielements/pageTitle";
import { Googlesm } from "../../icons/google_sm";
import { Facebooksm } from "../../icons/facebook_sm";
import { Star } from "../../icons/star";

export const SearchPane = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
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
          <PageTitle>Search</PageTitle>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            marginBottom: "1rem",
          }}
        >
          <InputBase
            style={{
              padding: "0.5rem",
              width: "100%",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
            placeholder="Search for a name,a job title or an name"
          />
        </Grid>
        <Grid item xs={12} style={{ marginBottom: "1rem" }}>
          <div style={{ marginTop: "1rem", fontWeight: "500" }}>
            Filter By Name
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            marginBottom: "1rem",
            color: "#52525b",
            fontSize: "0.7rem",
            fontWeight: "600",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "unset",
              color: "#52525b",
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "4px 8px",
              margin: "4px",
            }}
          >
            <Googlesm />
            Google
          </Link>
          <Link
            to="/"
            style={{
              textDecoration: "unset",
              color: "#52525b",
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "4px 8px",
              margin: "4px",
            }}
          >
            <Facebooksm />
            Facebook
          </Link>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: "1rem" }}>
          <div style={{ marginTop: "1rem", fontWeight: "500" }}>
            Filter By Rating
          </div>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: "1rem" }}>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </Grid>
        <Grid item xs={12} style={{ marginBottom: "1rem" }}>
          <div style={{ marginTop: "1rem", fontWeight: "500" }}>
            Filter By Tag
          </div>
        </Grid>
        <Grid item xs={2} style={{ marginBottom: "1rem" }}>
          <Button
            style={{
              borderRadius: "1rem",
              background: "#000",
              color: "#fff",
              width: "100%",
              fontSize: "0.7rem",
            }}
          >
            Create tag
          </Button>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: "1rem" }}>
          <div style={{ marginTop: "1rem", fontWeight: "500" }}>
            By Job Title
          </div>
        </Grid>
        <Grid item xs={2} style={{ marginBottom: "1rem" }}>
          <Button
            style={{
              borderRadius: "1rem",
              background: "#fff",
              color: "#000",
              width: "100%",
              fontSize: "0.7rem",
            }}
          >
            Founder 2
          </Button>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: "1rem" }}>
          <div style={{ marginTop: "1rem", fontWeight: "500" }}>Word Cloud</div>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: "1rem" }}>
          <img
            alt="wordCloud"
            src="wordCloud.png"
            width="100%"
            height="100%"
            style={{}}
          />
        </Grid>
      </Grid>
    </div>
  );
};
