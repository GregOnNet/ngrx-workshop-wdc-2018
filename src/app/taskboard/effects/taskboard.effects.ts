import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TaskboardActionTypes, CreateTask, CreateTaskSucceeded } from '../actions/taskboard.actions';
import { switchMap, map } from 'rxjs/operators';
import { ApiTasksService } from '../lib/api-tasks.service';

@Injectable()
export class TaskboardEffects {
  @Effect()
  create = this.actions$.pipe(
    ofType<CreateTask>(TaskboardActionTypes.Create),
    switchMap(({ payload: task }) => this._apiTasks.create(task)),
    map(task => new CreateTaskSucceeded(task))
  );

  constructor(private actions$: Actions, private _apiTasks: ApiTasksService) {}
}
