import * as React from "react";
import { Grid, Box, Tab } from "@mui/material";
import PageTitle from "../components/uielements/pageTitle";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import General from "../components/project/general";

const Project = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-between"
      style={{
        width: "100%",
        lineHeight: "0.8rem",
        marginLeft: "2rem",
        alignItems: "center",
      }}
    >
      <Grid item>
        <PageTitle>Project Settings</PageTitle>
      </Grid>
      <Box sx={{ width: "100%" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="General" value="1" key="1" />
              <Tab label="Members" value="2" key="2" />
              <Tab label="Integrations" value="3" key="3" />
              <Tab label="Danger Zone" value="4" key="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <General />
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
          <TabPanel value="4">Item Three</TabPanel>
        </TabContext>
      </Box>
    </Grid>
  );
};

export default Project;
