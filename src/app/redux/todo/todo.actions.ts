import { Action } from 'redux';

import { ReduxActions } from '../helpers';
import { ITodo } from './todo.interface';

const actions = new ReduxActions('todo');

export class TodoActions {
  static readonly findAll = actions.setAction('findAll');
}

export class TodoFindAll implements Action {
  public readonly type = TodoActions.findAll.default();
}

export class TodoFindAllFailed implements Action {
  public readonly type = TodoActions.findAll.failed();
  constructor(public payload: any) {}
}

export class TodoFindAllSuccess implements Action {
  public readonly type = TodoActions.findAll.success();
  constructor(public payload: ITodo[]) {}
}

export type All =
  TodoFindAllFailed |
  TodoFindAllSuccess;
