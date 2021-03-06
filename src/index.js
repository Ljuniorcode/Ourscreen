import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/settings/colors.css';
import './styles/reset.css';

import App from './App';
import Video from './styles/pages/Video';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={App} />k
        <Route path="/video/new" component={Video} />

      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
