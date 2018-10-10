import { Action } from '@ngrx/store';
import { Task } from '../../models';

export enum TaskboardActionTypes {
  LoadAll = '[Taskboard/API] Load all Tasks',
  LoadAllSucceeded = '[Taskboard/API] Load all Tasks succeeded',
  Create = '[Taskboard/API] Create new Task',
  CreateSucceeded = '[Taskboard/API] Create new Task succeeded'
}

export class LoadAllTasks implements Action {
  readonly type = TaskboardActionTypes.LoadAll;
}

export class LoadAllSucceeded implements Action {
  readonly type = TaskboardActionTypes.LoadAllSucceeded;

  constructor(public payload: Task[]) {}
}

export class CreateTask implements Action {
  readonly type = TaskboardActionTypes.Create;

  constructor(public payload: Task) {}
}

export class CreateTaskSucceeded implements Action {
  readonly type = TaskboardActionTypes.CreateSucceeded;

  constructor(public payload: Task) {}
}

export type TaskboardActions =
  | CreateTask
  | CreateTaskSucceeded
  | LoadAllTasks
  | LoadAllSucceeded;
