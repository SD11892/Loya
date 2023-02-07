import axios from 'axios';
import { isEmpty } from '../util/isEmpty';

const create = (url, parentId, userId, name) => {
  console.log('service =', parentId);
  return axios.post(
    'https://dashboard.tryloya.com:9000/api/form/' + 'create',
    null,
    {
      params: {
        url,
        userId,
        parentId,
        name,
      },
    }
  );
};

const update = (info, data) => {
  const formData = new FormData();
  if (data) {
    formData.append('file', data, data.name);
  }
  return axios.post(
    'https://dashboard.tryloya.com:9000/api/form/' + 'update',
    formData,
    { params: { info } },
    {
      headers: { 'Content-Type': 'multi-part/form-data' },
    }
  );
};

const getAll = () => {
  const projectId = localStorage.getItem('projectId');
  const userId = `${localStorage.getItem('userId')}`;
  return axios
    .post('https://dashboard.tryloya.com:9000/api/form/' + `all`, null, {
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
          message: 'Get All Froms Successfully',
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

const getByFormUrl = async (url) => {
  try {
    const res = await axios.get(
      'https://dashboard.tryloya.com:9000/api/form/' + ':' + url + '/'
    );
    return {
      CODE: 200,
      message: 'success',
      data: res,
    };
  } catch (err) {
    console.log('createErr=', err);
  }
};

const deleteForms = (ids) => {
  return axios.post(
    'https://dashboard.tryloya.com:9000/api/form/' + 'delete',
    null,
    {
      params: {
        ids,
      },
    }
  );
};

export default {
  create,
  getAll,
  getByFormUrl,
  deleteForms,
  update,
};
