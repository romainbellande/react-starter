import * as React from 'react';
import { Switch, Route } from 'react-router';
const { withRouter } = require('react-router');

import { Layout } from 'app/containers';

// @withRouter
export class AppRouter extends React.Component<{}, {}> {
  public render() {
    return (
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    );
  }
}
