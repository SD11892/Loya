import axios from 'axios';
import { isEmpty } from '../util/isEmpty';

const API_URL = 'https://dashboard.tryloya.com:9000/api/payment/';
const payment = (data) => {
  return axios.post(API_URL + 'pay', null, {
    params: {
      data,
    },
  });
};

export default {
  payment,
};
