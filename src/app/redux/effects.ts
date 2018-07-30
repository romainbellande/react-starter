import { combineEpics } from 'redux-observable';

import { todoEffects } from './todo';

const rootEffects = combineEpics(todoEffects);
export default rootEffects;
