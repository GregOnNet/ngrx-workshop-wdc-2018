import { Action } from '@ngrx/store';

export enum TaskboardActionTypes {
  LoadTaskboards = '[Taskboard] Load Taskboards'
}

export class LoadTaskboards implements Action {
  readonly type = TaskboardActionTypes.LoadTaskboards;
}

export type TaskboardActions = LoadTaskboards;
