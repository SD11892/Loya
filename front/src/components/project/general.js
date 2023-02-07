import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Grid, ButtonBase } from '@mui/material';

import Description from '../uielements/description';
import PageTitle from '../uielements/pageTitle';
import FormGrid from '../uielements/form/FormGrid';
import FormInput from '../uielements/form/FormInput';
import FormLabel from '../uielements/form/FormLabel';
import MainButton from '../uielements/buttons/mainButton';

import { getByProjectId, updateProject, getAll } from '../../actions/project';
import toastr from 'toastr';

const General = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [projectName, setProjectName] = React.useState('');
  const [projectSlug, setProjectSlug] = React.useState('');
  const [projectUrl, setProjectUrl] = React.useState('');
  const inf = {
    name: '',
    slug: '',
    url: '',
    projectId: localStorage.getItem('projectId'),
  };

  const handleUpdate = () => {
    inf.name = projectName;
    inf.slug = projectSlug;
    inf.url = projectUrl;
    updateProject(inf)
      .then((r) => {
        dispatch(getAll()).then(() => {
          toastr.success('Updated successfully');
        });
      })
      .catch((err) => {
        console.log('updateErr==========', err);
        toastr.error('Update Error');
      });
  };

  React.useEffect(() => {
    const id = window.location.pathname.replace('/settings/', '');
    getByProjectId(id).then((row) => {
      console.log('projectRow=======', row);
      let result = row.data.data.result[0];
      setProjectName(result.name);
      setProjectSlug(result.slug);
      setProjectUrl(result.url);
    });
  }, []);
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
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
      <div style={{ display: 'flex', marginLeft: '0.5rem' }}>
        <MainButton
          onClick={() => {
            handleUpdate();
          }}
        >
          Update
        </MainButton>
      </div>
      <Grid container style={{ marginTop: '2rem' }}>
        <Grid item>
          <ButtonBase
            style={{
              width: '100%',
              background: '#6701E60D',
              color: '#6701E6',
              gap: '0.5rem',
              display: 'flex',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
            }}
            onClick={() => {
              window.open('/upgrade', '_blank');
            }}
          >
            {/* <img src="../heart.png" /> */}
            Upgrade to pro or higher to add project to Loya.
          </ButtonBase>
        </Grid>
      </Grid>
    </div>
  );
};
export default General;
