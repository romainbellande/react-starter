import * as React from 'react';
import * as Loadable from 'react-loadable';
import { IUiRoute } from 'app/common/interfaces';

export interface IRouteManagerItem extends IUiRoute {
  componentImport: Promise<any>;
}

export interface IRouteManagerConfig {
  loading?: () => JSX.Element;
  baseUrl?: string;
}

export class RouteManager {
  private loading: () => JSX.Element = () => <div>Loading...</div>;

  constructor(private config?: IRouteManagerConfig) {
    if (config) {
      const { loading } = config;
      if (loading) {
        this.loading = loading;
      }
    }
  }

  component = (compImport: Promise<any>) =>
    Loadable({
      loading: this.loading,
      loader: () => compImport,
    })

  getRoutes = (routes: IRouteManagerItem[]): IUiRoute[] =>
    routes.map(this.add)

  private add = ({ componentImport, ...route }: IRouteManagerItem): IUiRoute =>
  ({
    ...route,
    component: this.component(componentImport),
    path: this.getPath(route.path),
  })

  private getPath = (path: string): string =>
    this.config && this.config.baseUrl ?
    this.config.baseUrl + path :
    path
}
