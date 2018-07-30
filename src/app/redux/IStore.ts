import { RouterState } from 'connected-react-router';

import { ITodoState } from './todo';

export interface IStore {
  todo: ITodoState;
  router?: RouterState;
}
