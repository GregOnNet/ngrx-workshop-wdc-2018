import { Action } from '@ngrx/store';
import { Task } from '../models';

export enum TaskboardActionTypes {
  Create = '[Taskboard] Create new Task',
  CreateSucceeded = '[Tasks] Create new Task succeeded'
}

export class CreateTask implements Action {
  readonly type = TaskboardActionTypes.Create;

  constructor(public payload: Task) {}
}

export class CreateTaskSucceeded implements Action {
  readonly type = TaskboardActionTypes.CreateSucceeded;

  constructor(public payload: Task) {}
}

export type TaskboardActions = CreateTask | CreateTaskSucceeded;
