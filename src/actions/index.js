import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
 } from './types';

const API_URL = 'http://localhost:3000';

export function loginUser({ email, password }) {
  return function(dispatch){
    axios.post(`${API_URL}/api/v1/auth/login`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user_id', response.data.id);
        browserHistory.push('/dashboard');
      })
      .catch(error => {
        dispatch(authError(error.response.data.message));
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function logoutUser(){
  localStorage.removeItem('token');
  localStorage.removeItem('user_id');
  browserHistory.push('/');
  return { type: UNAUTH_USER };
}
