import * as React from 'react';
import { Grid, Box, Tab } from '@mui/material';
import PageTitle from '../components/uielements/pageTitle';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import General from '../components/project/general';
import DefaultButton from '../components/uielements/buttons/defaultButton';
import { getAll, deleteProject } from '../actions/project';
import { useDispatch, useSelector } from 'react-redux';
import toastr from 'toastr';
import Description from '../components/uielements/description';
import { useNavigate } from 'react-router-dom';

const Project = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const projects = useSelector((state) => state.project.payload);
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      style={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        style={{
          width: '100%',
          lineHeight: '0.8rem',
          marginLeft: '2rem',
          alignItems: 'center',
        }}
      >
        <Grid item>
          <PageTitle>Project Settings</PageTitle>
        </Grid>
        <Box sx={{ width: '100%' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange}>
                <Tab label="General" value="1" key="1" />
                <Tab label="Danger Zone" value="2" key="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <General />
            </TabPanel>
            <TabPanel value="2">
              <Grid container style={{ marginTop: '2rem' }}>
                <Grid item>
                  <PageTitle>Delete Project</PageTitle>
                </Grid>
                <Grid item>
                  <Description>
                    This will permanently delete your entire project. All your
                    testimonials, forms and widgets will be deleted permanently.
                  </Description>
                </Grid>
                <Grid item>
                  <DefaultButton
                    primary="#EF4444"
                    disabled={projects.length === 1 ? true : false}
                    onClick={() => {
                      const pid = localStorage.getItem('projectId');
                      deleteProject(pid).then(() => {
                        dispatch(getAll()).then((res) => {
                          let projectId = res.data.projects[0].id;
                          localStorage.setItem('projectId', projectId);
                          navigate(`/settings/${projectId}`);
                          document.location.reload(true);
                          toastr.success('Delete Success');
                        });
                      });
                    }}
                  >
                    Delete Project
                  </DefaultButton>
                </Grid>
                <Grid item>
                  {projects.length === 1 ? (
                    <Description>
                      You can't delete this project until you create a new one.
                    </Description>
                  ) : null}
                </Grid>
              </Grid>
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </div>
  );
};

export default Project;
