import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'http://localhost:3000',
});

export default {
  /**
   * @description fetch all users from the API.
   */
  fetchAllUsers: () => {
    return axiosApi.get('/user/');
  },
};
