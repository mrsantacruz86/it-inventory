import axios from 'axios';

const setAuthToken = token => {
  sessionStorage.setItem('jwToken', token);

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};
export default setAuthToken;
