import { combineReducers, Reducer } from 'redux';


import { IStore } from './IStore';
import { todoReducer } from './todo';

const rootReducer: Reducer<IStore> = combineReducers<IStore>({
  todo: todoReducer,
});

export default rootReducer
