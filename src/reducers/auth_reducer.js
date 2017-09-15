import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_ARTICLES,
  FETCH_PLAYLISTS
} from '../actions/types'

export default function(state = {}, action){
  switch(action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case UNAUTH_USER:
      return{ ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case FETCH_ARTICLES:
      return { ...state, articles: action.payload };
    case FETCH_PLAYLISTS:
      return { ...state, playlists: action.payload };
  }
  return state;
}
