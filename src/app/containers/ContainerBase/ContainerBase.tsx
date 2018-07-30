import * as React from 'react';
import { Route } from 'react-router';

import { IUiRoute } from 'app/common/interfaces';

export abstract class ContainerBase<P, S> extends React.Component<P, S> {
  public renderRoutes(routes: IUiRoute[]): JSX.Element[] {
    return routes.map(this.renderRoute);
  }

  public renderRoute = (route: IUiRoute, index: number): JSX.Element => (
    route.component ?
    (
      <Route
        key={'route-' + index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ) :
    null
  )
}
