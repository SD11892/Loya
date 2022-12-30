import * as React from "react";
import { Grid, FormLabel, ButtonBase } from "@mui/material";
import Description from "../uielements/description";
import PageTitle from "../uielements/pageTitle";
import FormGrid from "../uielements/form/FormGrid";
import FormInput from "../uielements/form/FormInput";
import MainButton from "../uielements/buttons/mainButton";
import { getByProjectId } from "../../actions/project";

const General = () => {
  const id = window.location.pathname.replace("/settings/", "");
  const [projectName, setProjectName] = React.useState("");
  const [projectSlug, setProjectSlug] = React.useState("");
  const [projectUrl, setProjectUrl] = React.useState("");
  React.useEffect(() => {
    getByProjectId(id).then((res) => {
      const result = res.data.data.result[0];
      setProjectName(result.name);
      setProjectSlug(result.slug);
      setProjectUrl(result.url);
    });
  }, []);
  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <FormGrid>
        <FormLabel>Project Name</FormLabel>
        <FormInput
          value={projectName}
          onChange={(e) => {
            setProjectName(e.target.value);
          }}
        />
      </FormGrid>
      <FormGrid>
        <FormLabel>Project Slug</FormLabel>
        <FormInput
          value={projectSlug}
          onChange={(e) => {
            setProjectSlug(e.target.value);
          }}
        />
        <Description>https://getloya.co/p/{projectSlug}</Description>
      </FormGrid>
      <FormGrid>
        <FormLabel>Project URL</FormLabel>
        <FormInput
          value={projectUrl}
          onChange={(e) => {
            setProjectUrl(e.target.value);
          }}
        />
      </FormGrid>
      <div style={{ display: "flex", marginLeft: "0.5rem" }}>
        <MainButton>Update</MainButton>
      </div>
      <Grid container style={{ marginTop: "2rem" }}>
        <Grid item>
          <PageTitle>Custom Domain</PageTitle>
        </Grid>
        <Grid item>
          <Description>
            Personalize the url of your Senja page by connecting a custom
            domain. You can use any subdomain that you own.
          </Description>
        </Grid>
        <Grid item>
          <ButtonBase
            style={{
              width: "100%",
              background: "#6701E60D",
              color: "#6701E6",
              gap: "0.5rem",
              display: "flex",
              padding: "1rem 2rem",
              borderRadius: "0.5rem",
            }}
          >
            <img src="../heart.png" />
            Upgrade to pro or higher to add a custom domain to your Loya pages
            and forms.
          </ButtonBase>
        </Grid>
      </Grid>
    </div>
  );
};
export default General;
