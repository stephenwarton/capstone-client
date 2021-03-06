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
} from '../actions/types'

export default function(state = {}, action){
  switch(action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case UNAUTH_USER:
      state = {};
      return{ state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case FETCH_ARTICLES:
      return { ...state, articles: action.payload };
    case FETCH_PLAYLISTS:
      return { ...state, playlists: action.payload };
    case POST_ARTICLE:
      return { ...state, post: action.payload };
    case POST_PLAYLIST:
      return { ...state, post: action.payload };
    case DELETE_ARTICLE:
      return { ...state, delete: action.payload };
    case DELETE_PLAYLIST:
      return { ...state, delete: action.payload };
    case ADD_TO_PLAYLIST:
      return { ...state, add: action.payload };
    case REMOVE_FROM_PLAYLIST:
      return { ...state, delete: action.payload };
    case SET_PLAYING_STATUS:
      return { ...state, status: action.payload };
    case SIGNUP_USER:
      return { ...state, signup: true };
    default:
  }
  return state;
}
