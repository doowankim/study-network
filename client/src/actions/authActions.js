import {GET_ERRORS, SET_CURRENT_USER} from './type';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_code from 'jwt-decode';

export const registerUser = (userData, history) => dispatch => {
  axios
    .post ('users/signup', userData)
    .then (res => history.push ('/login'))
    .catch (err =>
      dispatch ({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const loginUser = userData => dispatch => {
  axios
    .post ('users/login', userData)
    .then (res => {
      const {tokenInfo} = res.data;

      localStorage.setItem ('jwtToken', tokenInfo);

      setAuthToken (tokenInfo);

      const decode = jwt_code (tokenInfo);

      dispatch (setCurrentUser (decode));
    })
    .catch (err =>
      dispatch ({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem ('jwtToken');
  setAuthToken (false);
  dispatch (setCurrentUser ({}));
};
