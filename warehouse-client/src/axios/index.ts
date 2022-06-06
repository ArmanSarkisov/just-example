import axios from 'axios';
import axiosRetry from 'axios-retry';

// constants
import { BASE_URL } from '../constants';

const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// If our server is down we will retry 3 times, after that we will show error message (not from server)
axiosRetry(request, {
  retries: 3,
  retryDelay: (retryCount) => {
    console.log(`retry attempt: ${retryCount}`);
    return retryCount * 2000;
  },
  retryCondition: (error) => {
    return error.response?.status === 503;
  },
});

export default request;
