// import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    <div>
  <Router routes={routes} history={browserHistory} />
  </div>,
  document.getElementById('app')
);