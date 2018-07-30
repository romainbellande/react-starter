import { Observable, of } from 'rxjs';

import { TODO_MOCK } from './todo.mock';
import { ITodo } from './todo.interface';

export class TodoService {
  findAll = (): Observable<ITodo[]> => of(TODO_MOCK)
}
