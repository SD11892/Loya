import * as React from 'react';
import FormGrid from '../components/uielements/form/FormGrid';
import FormInput from '../components/uielements/form/FormInput';
import FormLabel from '../components/uielements/form/FormLabel';
import MainButton from '../components/uielements/buttons/mainButton';
import PageTitle from '../components/uielements/pageTitle';
import { createProject } from '../actions/project';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import toastr from 'toastr';
import { useNavigate } from 'react-router-dom';
import { getAll } from '../actions/project';
import { useDispatch, useSelector } from 'react-redux';

const NewProject = () => {
  const userId = localStorage.getItem('userId');
  const [projectName, setProjectName] = React.useState('');
  const [projectSlug, setProjectSlug] = React.useState('');
  const [projectUrl, setProjectUrl] = React.useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {}, []);

  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <Grid container style={{ padding: '0.2rem 1.5rem' }}>
        <PageTitle>New Project</PageTitle>
      </Grid>
      <Divider />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          gap: '1rem',
        }}
      >
        <FormGrid>
          <FormLabel>Project Name</FormLabel>
          <FormInput
            value={projectName}
            placeholder="Loya"
            onChange={(e) => {
              setProjectName(e.target.value);
            }}
          />
        </FormGrid>
        <FormGrid>
          <FormLabel>Project Slug</FormLabel>
          <FormInput
            value={projectSlug}
            placeholder="https://tryloya.com/p/loya"
            onChange={(e) => {
              setProjectSlug(e.target.value);
            }}
          />
        </FormGrid>
        <FormGrid>
          <FormLabel>Project URL</FormLabel>
          <FormInput
            value={projectUrl}
            placeholder="https://tryloya.com"
            onChange={(e) => {
              setProjectUrl(e.target.value);
            }}
          />
        </FormGrid>
        <div style={{ marginTop: '1rem', marginLeft: '0.5rem' }}>
          <MainButton
            onClick={() => {
              createProject(projectName, userId, projectSlug, projectUrl)
                .then(async (res) => {
                  const Id = res.data.projects.id;
                  localStorage.setItem('projectId', Id);
                  dispatch(getAll()).then(() => {
                    toastr.success(
                      `${projectName} project created successfully`
                    );
                    navigate(`/settings/${Id}`);
                  });
                })
                .catch((err) => {
                  console.log('projectCreateErr=', err);
                  toastr.error('Something went wrong');
                });
            }}
          >
            Create
          </MainButton>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
