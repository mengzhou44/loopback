import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import registerServiceWorker from './registerServiceWorker';

import Home from './components/home';
import About from './components/about';
import NotFound from './components/not-found';

let routes = (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
