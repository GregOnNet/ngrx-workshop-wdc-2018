import { Action } from '@ngrx/store';
import {
  TaskboardActions,
  TaskboardActionTypes
} from '../actions/taskboard.actions';
import { Task } from '../models';

export interface Slice {
  entities: { [guid: string]: Task };
}

export const initialState: Slice = {
  entities: {}
};

export function reducer(state = initialState, action: TaskboardActions): Slice {
  switch (action.type) {
    case TaskboardActionTypes.LoadTaskboards:
      return state;

    default:
      return state;
  }
}
