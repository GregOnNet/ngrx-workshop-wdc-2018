import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ApiTasks } from '../lib/api-tasks.service';
import {
  TaskboardActionTypes,
  CreateTask,
  CreateTaskSucceeded,
  LoadAllSucceeded
} from '../actions/taskboard.actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class TaskboardEffects {
  @Effect()
  loadAll = this.actions$.pipe(
    ofType(TaskboardActionTypes.LoadAll),
    switchMap(() => this._tasks.loadAll()),
    map(tasks => new LoadAllSucceeded(tasks))
  );

  @Effect()
  create = this.actions$.pipe(
    ofType<CreateTask>(TaskboardActionTypes.Create),
    switchMap(({ payload }) => this._tasks.create(payload)),
    map(task => new CreateTaskSucceeded(task))
  );

  constructor(private actions$: Actions, private _tasks: ApiTasks) {}
}
