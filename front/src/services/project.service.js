import axios from 'axios';
import { isEmpty } from '../util/isEmpty';

const API_URL = 'https://dashboard.tryloya.com:9000/api/project/';

const create = (name, id, slug, url) => {
  return axios.post(
    API_URL + 'create',
    null,
    {
      params: { name, id, slug, url },
    },
    {
      headers: { 'Content-Type': 'multi-part/form-data' },
    }
  );
};

const update = (info) => {
  console.log('Are you here???', info);
  return axios.post(
    API_URL + 'update',
    null,
    { params:{info} },
    {
      headers: { 'Content-Type': 'multi-part/form-data' },
    }
  );
};

const getAll = () => {
  const userId = `${localStorage.getItem('userId')}`;
  if (userId !== null) {
    console.log('userId2=======================', userId);
    return axios
      .post(API_URL + `all`, null, {
        params: {
          userId: userId,
        },
      })
      .then((response) => {
        if (isEmpty(response.data)) {
          return {
            CODE: '200',
            message: 'Empty',
          };
        } else {
          localStorage.setItem(
            'projects',
            JSON.stringify(response.data.projects)
          );
          return {
            CODE: '200',
            message: 'Get All Projects Successfully',
            data: response.data,
          };
        }
      })
      .catch((err) => {
        if (err.code === 'ERR_BAD_REQUEST') {
          return { CODE: '404', message: 'Failed getting projects' };
        }
      });
  }
};

const getById = async (Id) => {
  try {
    const res = await axios.get(API_URL + ':' + Id + '/');
    return {
      CODE: 200,
      message: 'success',
      data: res,
    };
  } catch (err) {
    console.log('createErr=', err);
  }
};

const deletePro = (id) => {
  return axios.post(API_URL + 'delete', null, {
    params: {
      id,
    },
  });
};

export default {
  create,
  getAll,
  getById,
  deletePro,
  update,
};
