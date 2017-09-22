import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_ARTICLES,
  FETCH_PLAYLISTS,
  POST_ARTICLE,
  POST_PLAYLIST,
  DELETE_ARTICLE,
  DELETE_PLAYLIST,
  ADD_TO_PLAYLIST,
  REMOVE_FROM_PLAYLIST,
  SET_PLAYING_STATUS,
  SIGNUP_USER
 } from './types';

//const API_URL = 'http://localhost:3000';
const API_URL = 'https://article-articulator.herokuapp.com';

export function loginUser({ email, password }, fetchArticles, fetchPlaylists ) {
  return function(dispatch){
    axios.post(`${API_URL}/api/v1/auth/login`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user_id', response.data.id);
        fetchArticles();
        fetchPlaylists();
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
  return { type: UNAUTH_USER };
}

export function fetchArticles() {
  const user_id = localStorage.getItem('user_id');
  return function(dispatch) {
    axios.get(`${API_URL}/api/v1/users/${user_id}/articles`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).then(response => {
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
      dispatch({
        type: FETCH_PLAYLISTS,
        payload: response.data
      })
    });
  }
}

export function postArticle(url, fetchArticles){
  const users_id = localStorage.getItem('user_id');
  return function(dispatch){
    axios.post(`${API_URL}/api/v1/article`,
      {
        url,
        users_id
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          Id: users_id
       }
      }).then(response => {
        dispatch({
          type: POST_ARTICLE,
          payload: response.data
        });
        fetchArticles();
      });
  }
}

export function postPlaylist(name, fetchPlaylists){
  const users_id = localStorage.getItem('user_id');
  return function(dispatch){
    axios.post(`${API_URL}/api/v1/playlist`,
      {
        name,
        users_id
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          Id: users_id
       }
      }).then(response => {
        dispatch({
          type: POST_PLAYLIST,
          payload: response.data
        });
        fetchPlaylists();
      });
  }
}

export function deleteArticle(id, fetchArticles, fetchPlaylists){
  const users_id = localStorage.getItem('user_id');
  return function(dispatch){
    axios.delete(`${API_URL}/api/v1/article/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          Id: users_id
       }
      }).then(response => {
        dispatch({
          type: DELETE_ARTICLE,
          payload: response.data
        });
        fetchArticles();
        fetchPlaylists();
      });
  }
}

export function deletePlaylist(id, fetchPlaylists){
  const users_id = localStorage.getItem('user_id');
  return function(dispatch){
    axios.delete(`${API_URL}/api/v1/playlist/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          Id: users_id
       }
      }).then(response => {
        dispatch({
          type: DELETE_PLAYLIST,
          payload: response.data
        });
        fetchArticles();
        fetchPlaylists();
      });
  }
}

export function addToPlaylist(article_id, playlist_id, fetchPlaylists){
  const users_id = localStorage.getItem('user_id');
  return function(dispatch){
    axios.post(`${API_URL}/api/v1/article_playlist`,
      {
        article_id,
        playlist_id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          Id: users_id
       }
      }).then(response => {
        dispatch({
          type: ADD_TO_PLAYLIST,
          payload: response.data
        });
        fetchPlaylists();
      });
  }
}

export function removeFromPlaylist(id, fetchPlaylists){
  const users_id = localStorage.getItem('user_id');
  return function(dispatch){
    axios.delete(`${API_URL}/api/v1/article_playlist/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          Id: users_id
       }
      }).then(response => {
        dispatch({
          type: REMOVE_FROM_PLAYLIST,
          payload: response.data
        });
        fetchPlaylists();
      });
  }
}

export function setPlayingStatus(title, playing, paused){
  let data = {title, playing, paused};
  return function(dispatch){
    dispatch({
      type: SET_PLAYING_STATUS,
      payload: data
    });
  }
}

export function signUp({ email, password }, loginUser, fetchArticles, fetchPlaylists) {
  return function(dispatch){
    axios.post(`${API_URL}/api/v1/users`, { email, password })
      .then(response => {
        dispatch({ type: SIGNUP_USER });
        loginUser({email, password}, fetchArticles, fetchPlaylists);
        browserHistory.push('/');
      })
      .catch(error => {
        dispatch(authError(error.response.data.message));
      });
  }
}
