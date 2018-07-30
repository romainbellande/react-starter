import { Reducer } from 'redux';

import { defaultInitialState } from './../helpers/entity';
import { ITodoState } from './todo.state';
import { All, TodoActions, TodoFindAllSuccess } from './todo.actions';

export const todoReducer: Reducer<ITodoState> =
  (state = defaultInitialState, action: All) => {
    switch (action.type) {
      case TodoActions.findAll.success(): {
        const { payload } = action as TodoFindAllSuccess;
        console.log('payload', payload);
        return {
          ...state,
          ids: payload.map((item) => item.id),
          entities: payload,
        };
      }

      default: {
        return state;
      }
    }
  }
