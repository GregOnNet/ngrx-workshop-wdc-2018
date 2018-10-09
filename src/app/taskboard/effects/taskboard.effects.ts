import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TaskboardActionTypes } from '../actions/taskboard.actions';

@Injectable()
export class TaskboardEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(TaskboardActionTypes.LoadTaskboards));

  constructor(private actions$: Actions) {}
}
