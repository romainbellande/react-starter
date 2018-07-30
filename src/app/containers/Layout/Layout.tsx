import './Layout.scss';
import * as React from 'react';
import { Switch } from 'react-router';

import { ContainerBase } from '../ContainerBase';
import { LAYOUT_ROUTES } from './layout.router';

export class Layout extends ContainerBase<{}, {}> {
  public render() {
    return (
      <section className="Layout">
        <Switch>
          {this.renderRoutes(LAYOUT_ROUTES)}
        </Switch>
      </section>
    );
  }
}
