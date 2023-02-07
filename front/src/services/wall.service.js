import axios from 'axios';
import { isEmpty } from '../util/isEmpty';

const API_URL = 'https://dashboard.tryloya.com:9000/api/wall/';

const create = (url, name, projectId, userId) => {
  return axios.post(API_URL + 'create', null, {
    params: {
      url,
      name,
      projectId,
      userId,
    },
  });
};

const update = (info) => {
  return axios.post(
    API_URL + 'update',
    null,
    { params: { info } },
    {
      headers: { 'Content-Type': 'multi-part/form-data' },
    }
  );
};

const getAll = () => {
  const projectId = JSON.parse(localStorage.getItem('projectId'));
  const userId = `${localStorage.getItem('userId')}`;
  return axios
    .post(API_URL + `all`, null, {
      params: {
        projectId,
        userId,
      },
    })
    .then((response) => {
      if (isEmpty(response.data)) {
        return {
          CODE: '200',
          message: 'Empty',
        };
      } else {
        return {
          CODE: '200',
          message: 'Get All Walls Successfully',
          data: response.data,
        };
      }
    })
    .catch((err) => {
      if (err.code === 'ERR_BAD_REQUEST') {
        return { CODE: '404', message: 'Failed getting forms' };
      }
    });
};

const getByUrl = async (url) => {
  try {
    const res = await axios.get(API_URL + ':' + url + '/');
    return {
      CODE: 200,
      message: 'success',
      data: res,
    };
  } catch (err) {
    console.log('createErr=', err);
  }
};

const deleteWalls = (ids) => {
  return axios.post(API_URL + 'delete', null, {
    params: {
      ids,
    },
  });
};

export default {
  create,
  getAll,
  getByUrl,
  deleteWalls,
  update,
};
