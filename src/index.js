import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

const store = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={store(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'));
