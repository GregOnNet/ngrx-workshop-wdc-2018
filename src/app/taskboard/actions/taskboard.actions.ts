import { Action } from '@ngrx/store';
import { Task } from '../models';

export enum TaskboardActionTypes {
  Create = '[Taskboard] Create new Task'
}

export class CreateTask implements Action {
  readonly type = TaskboardActionTypes.Create;

  constructor(public payload: Task) {}
}

export type TaskboardActions = CreateTask;
