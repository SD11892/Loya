import * as React from "react";
import { ImportChannel } from "../../components/import/importChannel";
import { ImportSelection } from "../../components/import/importSelection";
import { Grid } from "@mui/material";
import { ImportHistory } from "../../components/import/importHistory";

const ImportTest = () => {
  const [select, setSelect] = React.useState("text");
  React.useEffect(() => {}, [select]);
  return (
    <div
      style={{
        paddingTop: "1rem",
        background: "rgb(250,250,250)",
        height: "100vh",
        display: "flex",
      }}
    >
      <Grid
        item
        style={{
          background: "rgb(250,250,250)",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          maxWidth: "20rem",
        }}
      >
        <ImportSelection setSelect={setSelect} select={select} />
      </Grid>
      <Grid item style={{ minWidth: "40rem" }}>
        <ImportChannel select={select} />
      </Grid>
      <Grid
        item
        style={{
          background: "rgb(250,250,250)",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        <ImportHistory />
      </Grid>
    </div>
  );
};

export default ImportTest;
