import './App.scss';

import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'

import { store } from './redux';
import { history } from './history';
import { AppRouter } from './AppRouter';

@hot(module)
export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AppRouter />
        </ConnectedRouter>
      </Provider>
    );
  }
}
