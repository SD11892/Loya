import { ImportChannel } from "../../components/import/importChannel";
import { ImportSelection } from "../../components/import/importSelection";
import { Grid } from "@mui/material";
import { ImportHistory } from "../../components/import/importHistory";

const ImportTest = () => {
  return (
    <div
      style={{
        paddingTop: "2.5rem",
        background: "rgb(250,250,250)",
        height: "100vh",
      }}
    >
      <Grid container justifyContent="space-between">
        <Grid
          item
          xs={2}
          style={{
            background: "rgb(250,250,250)",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          <ImportSelection />
        </Grid>
        <Grid item xs={5}>
          <ImportChannel />
        </Grid>
        <Grid
          item
          xs={5}
          style={{
            background: "rgb(250,250,250)",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          <ImportHistory />
        </Grid>
      </Grid>
    </div>
  );
};

export default ImportTest;
