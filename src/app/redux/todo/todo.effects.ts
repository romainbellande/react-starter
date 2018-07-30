import { combineEpics } from 'redux-observable';

import { reduxEffect } from '../helpers';

import { TodoService } from './todo.service';
import { TodoActions } from './todo.actions';

const todoService = new TodoService();

const findAll$ = reduxEffect(
  TodoActions.findAll,
  todoService.findAll
);

export const todoEffects = combineEpics(findAll$);
