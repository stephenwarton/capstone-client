import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_ARTICLES,
  FETCH_PLAYLISTS
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

export function fetchArticles() {
  const user_id = localStorage.getItem('user_id');
  return function(dispatch) {
    axios.get(`${API_URL}/api/v1/users/${user_id}/articles`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).then(response => {
      //console.log(response.data);
      dispatch({
        type: FETCH_ARTICLES,
        payload: response.data
      })
    });
  }
}

export function fetchPlaylists() {
  const user_id = localStorage.getItem('user_id');
  return function(dispatch) {
    axios.get(`${API_URL}/api/v1/users/${user_id}/playlists`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).then(response => {
      console.log(response.data);
      dispatch({
        type: FETCH_PLAYLISTS,
        payload: response.data
      })
    });
  }
}
