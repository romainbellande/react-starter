import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { ReduxAction } from './redux-action';

interface IReduxEffectOptions {
  withParams: boolean;
}

interface IPayloadAction extends Action {
  payload?: any;
}

export const reduxEffect = <T extends IPayloadAction>(
  reduxAction: ReduxAction,
  method: (params?: any) => Observable<any>,
  options?: IReduxEffectOptions) => (actions$: ActionsObservable<T>) =>
    actions$.pipe(
      ofType(reduxAction.default()),
      switchMap(action => (options && options.withParams ? method(action.payload) : method())
        .pipe(map(payload => ({ payload, type: reduxAction.success() })))
        .pipe(catchError(payload => of({ payload, type: reduxAction.failed() })))));
