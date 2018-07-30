import * as React from 'react';
import * as Loadable from 'react-loadable';

import { IUiRoute } from 'app/common/interfaces';
import { RouteManager } from 'app/helpers';

const routeManager = new RouteManager({ baseUrl: '/' });

export const LAYOUT_ROUTES: IUiRoute[] = routeManager
.getRoutes([
  {
    path: '',
    slug: 'home',
    exact: true,
    componentImport: import('app/views/Home'),
  },
]);
