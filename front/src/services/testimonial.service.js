import axios from 'axios';
import { isEmpty } from '../util/isEmpty';

const API_URL = 'https://dashboard.tryloya.com:9000/api/testimonial/';

const create = (info, data) => {
  const formData = new FormData();
  if (data) {
    formData.append('file', data, data.name);
  }
  return axios.post(
    API_URL + 'create',
    formData,
    {
      params: { info },
    },
    {
      headers: { 'Content-Type': 'multi-part/form-data' },
    }
  );
};

const importAll = (array) => {
  return axios({
    method: 'post',
    url: API_URL + 'import',
    headers: { 'Content-Type': 'multi-part/form-data' },
    params: {
      array,
    },
  });
};

const update = (info, data) => {
  const formData = new FormData();
  if (data) {
    formData.append('file', data, data.name);
  }
  return axios.post(
    API_URL + 'update',
    formData,
    { params: { info } },
    {
      headers: { 'Content-Type': 'multi-part/form-data' },
    }
  );
};

const getAll = (searchData) => {
  let userId = `${localStorage.getItem('userId')}`;
  let projectId = localStorage.getItem('projectId');
  console.log('++++++++++++', projectId + userId);
  return axios
    .post(API_URL + `all`, null, { params: { userId, projectId, searchData } })
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

const getById = (id) => {
  return axios
    .post(API_URL + `byId`, null, { params: { id } })
    .then((res) => {
      return {
        CODE: 200,
        message: 'success',
        data: res,
      };
    })
    .catch((err) => {
      console.log('Err=', err);
    });
};

const getByFormUrl = async (url) => {
  try {
    const res = await axios.post(API_URL + ':' + id + '/');
    return {
      CODE: 200,
      message: 'success',
      data: res,
    };
  } catch (err) {
    console.log('createErr=', err);
  }
};

const getImport = async () => {
  let userId = `${localStorage.getItem('userId')}`;
  let projectId = `${localStorage.getItem('projectId')}`;
  return axios
    .post(API_URL + `history`, null, {
      params: { userId, projectId },
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

const search_target = (newData) => {
  console.log(newData);
  return axios.post(
    API_URL + 'all',
    null,
    {
      params: {
        newData,
      },
    },
    {
      headers: { 'Content-Type': 'multi-part/form-data' },
    }
  );
};

const deleteTest = (id) => {
  return axios.post(API_URL + 'delete', null, {
    params: {
      id,
    },
  });
};

const uploadVideo = (info, data) => {
  const formData = new FormData();
  if (data) {
    formData.append('file', data, 'video.mp4');
  }
  return axios.post(
    API_URL + 'upload/video',
    formData,
    { params: { info } },
    {
      headers: { 'Content-Type': 'multi-part/form-data' },
    }
  );
};

const googleReviews = (info) => {
  console.log('infoooooooo=', info);
  return axios.post(API_URL + 'googleReviews', null, {
    params: {
      info,
    },
  });
};

export default {
  getImport,
  create,
  getAll,
  importAll,
  getByFormUrl,
  deleteTest,
  update,
  search_target,
  getById,
  uploadVideo,
  googleReviews,
};
