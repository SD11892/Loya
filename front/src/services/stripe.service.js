import axios from 'axios';
import { isEmpty } from '../util/isEmpty';

const API_URL = '/api/payment/';
const payment = (data) => {
  console.log('jee');
  return axios.post(API_URL + 'pay', null, {
    params: {
      data,
    },
  });
};

export default {
  payment,
};
