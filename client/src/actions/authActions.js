import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { LOGIN, LOGOUT, REGISTER } from './types';
import history from '../history';

// Login
export const login = user => async dispatch => {
  const response = await axios.post('/login', user);
  if (!response.data.token) {
    console.log('The account credentials are not valid. Please try again');
  } else {
    dispatch({
      type: LOGIN,
      payload: response.data
    });
    setAuthToken(response.data.token);
    history.goBack();
  }
};

// Register
export const register = user => async dispatch => {
  const response = axios.post('/register', user);
  if (!response.data.err) {
    console.log('Unable to create the user.', response.data.err);
  } else {
    dispatch({
      type: REGISTER,
      payload: { message: 'Account was successfully created!' }
    });
  }
};

// Logout
export const logout = () => {
  sessionStorage.removeItem('jwToken');
  history.push('/');
  return {
    type: LOGOUT
  };
};
