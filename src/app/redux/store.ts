import { createStore, applyMiddleware, compose, Store, Middleware } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';

import { ENV } from 'src/environment';
import { history } from 'app/history';

import rootEffects from './effects';
import rootReducer from './reducer';
import { IStore } from './IStore';


export function configureStore(browserHistory, initialState?: IStore): Store<IStore> {
  const epicMiddleware = createEpicMiddleware();

  const middlewares: Middleware[] = [
    routerMiddleware(browserHistory),
    epicMiddleware,
    reduxThunk,
  ];

  /** Add Only Dev. Middlewares */
  if (ENV.NODE_ENV !== 'production' && ENV.BROWSER) {
    const logger = createLogger();
    middlewares.push(logger);
  }

  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const appStore: Store<IStore> = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares),
    ),
  );

  epicMiddleware.run(rootEffects);

  if (ENV.NODE_ENV === 'development' && (module as any).hot) {
    (module as any).hot.accept('./', () => {
      appStore.replaceReducer((require('./reducer')));
    });
  }

  return appStore;
}

export const store = configureStore(
  history,
  window.__INITIAL_STATE__,
);
