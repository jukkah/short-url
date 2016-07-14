import React, { Component } from 'react';
import { IndexRoute, Router, Route, browserHistory as history } from 'react-router';

import App from './App.jsx';
import * as Pages from './Pages';

export default class AppRouter extends Component {
  static routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Pages.New} />
      <Route path="/:shortUrl" component={Pages.Redirect} />
      <Route path="/:shortUrl/edit" component={Pages.Edit} />
      <Route path="*" component={Pages.NotFound} />
    </Route>
  );

  render() {
    return (
      <Router history={history} routes={AppRouter.routes} />
    );
  }
}
