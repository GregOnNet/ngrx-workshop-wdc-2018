import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ApiTasks } from '../../lib';
import {
  CreateTask,
  CreateTaskSucceeded,
  LoadAllSucceeded,
  TaskboardActionTypes
} from '../actions/taskboard.actions';

@Injectable()
export class TaskboardEffects {
  @Effect()
  loadAll = this._actions$.pipe(
    ofType(TaskboardActionTypes.LoadAll),
    switchMap(() => this._tasks.loadAll()),
    map(tasks => new LoadAllSucceeded(tasks))
  );

  @Effect()
  create = this._actions$.pipe(
    ofType<CreateTask>(TaskboardActionTypes.Create),
    switchMap(({ payload }) => this._tasks.create(payload)),
    map(task => new CreateTaskSucceeded(task))
  );

  constructor(private _actions$: Actions, private _tasks: ApiTasks) {}
}
