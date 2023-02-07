import projectService from '../services/project.service';
import { ALL_PROJECT } from './types';

export const getAll = () => (dispatch) => {
  return projectService.getAll().then(
    (res) => {
      dispatch({
        type: ALL_PROJECT,
        payload: res.data,
      });
      return Promise.resolve(res);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return Promise.reject();
    }
  );
};

export const createProject = (name, id, slug, url) => {
  return projectService.create(name, id, slug, url);
};

export const updateProject = (info) => {
  return projectService.update(info);
};

export const deleteProject = (id) => {
  return projectService.deletePro(id);
};

export const getByProjectId = (id) => {
  return projectService.getById(id).then(
    (data) => {
      return Promise.resolve(data);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return Promise.reject();
    }
  );
};

// export const saveIndex = (info) => (dispatch) => {
//   console.log("info=", info);
//   dispatch({
//     type: SAVE_INDEX,
//     payload: info,
//   });
// };
