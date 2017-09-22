import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import './styles/main.css';
import { AUTH_USER } from './actions/types';
import logger from 'redux-logger';

import App from './containers/App';
import Logout from './components/Logout';
import RequireAuth from './components/require_auth';
import Signup from './components/Signup';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore);
//const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);


const token = localStorage.getItem('token');
if(token){
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="logout" component={RequireAuth(Logout)} />
      </Route>
      <Route path="signup" component={Signup} />
    </Router>
  </Provider>,
  document.getElementById('root'));
