import * as React from "react";
import { useNavigate } from "react-router-dom";
import FormLabel from "../../components/uielements/form/FormLabel";
import FormGrid from "../../components/uielements/form/FormGrid";
import PageTitle from "../../components/uielements/pageTitle";
import { FormLink } from "../../icons/formLink";
import DefaultButton from "../../components/uielements/buttons/defaultButton";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Grid, ButtonBase, Button } from "@mui/material";
import { login } from "../../actions/auth";
import { useDispatch } from "react-redux";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Ready = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const copyContent = async () => {
    let text =
      window.location.protocol +
      "//" +
      window.location.host +
      "/forms/p/" +
      `${localStorage.getItem("project")}` +
      "/r/" +
      window.location.href.replace("/ready", "").slice(-6);

    try {
      console.log("text=", text);
      var inputc = document.body.appendChild(document.createElement("input"));
      inputc.value = text;
      inputc.select();
      document.execCommand("copy");
      inputc.parentNode.removeChild(inputc);
      setOpen(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <Grid
      containter
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Grid
        item
        style={{
          alignItems: "center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ width: "460px" }}>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              fontSize: "1.5rem",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            👍
            <img src="../../../../heart.png" width="32px" height="32px" />
            🎉
          </div>
          <FormGrid>
            <PageTitle style={{ textAlign: "center" }}>
              Congratulations!"checkout Testimonial Form" is ready
            </PageTitle>
          </FormGrid>
          <FormGrid>
            <FormLabel style={{ textAlign: "center" }}>
              Share the link to collect testimonials
            </FormLabel>
          </FormGrid>
          <FormGrid>
            <ButtonBase
              style={{
                background: "#F9FAFB",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                gap: "0.5rem",
                border: "1px solid #ddd",
                color: "#333",
              }}
              onClick={copyContent}
            >
              {window.location.protocol +
                "//" +
                window.location.host +
                "/forms/p/" +
                `${localStorage.getItem("project")}` +
                "/r/" +
                window.location.href.replace("/ready", "").slice(-6)}
              <FormLink />
            </ButtonBase>
          </FormGrid>
          <FormGrid>
            <FormLabel style={{ textAlign: "center" }}>
              Or add it to your website
            </FormLabel>
          </FormGrid>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <ButtonBase
              style={{ border: "1px solid #ddd", borderRadius: "0.375rem" }}
            >
              <img
                src="../../../embed-inline.jpg"
                width="220px"
                height="144px"
              />
            </ButtonBase>
            <ButtonBase
              style={{ border: "1px solid #ddd", borderRadius: "0.375rem" }}
            >
              <img
                src="../../../embed-popup.jpg"
                width="220px"
                height="144px"
              />
            </ButtonBase>
          </div>
          <DefaultButton
            primary="#6701e6"
            onClick={() => {
              let email = localStorage.getItem("email");
              let password = localStorage.getItem("password");
              dispatch(login(email, password)).then((res) => {
                if (res.CODE === "200") {
                  localStorage.setItem("signIn", true);
                  navigate("/testimonials");
                } else {
                  alert("Invalid User or password");
                }
              });
            }}
          >
            Go to the Dashboard
          </DefaultButton>
        </div>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
      >
        <Alert
          onClose={handleCloseSnack}
          severity="success"
          sx={{ width: "100%" }}
        >
          Copied to Clipboard
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Ready;
