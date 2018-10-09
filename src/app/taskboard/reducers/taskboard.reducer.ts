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

export function reducer(slice = initialState, action: TaskboardActions): Slice {
  switch (action.type) {
    case TaskboardActionTypes.Create:
      return {
        ...slice,
        entities: { ...slice.entities, [action.payload.guid]: action.payload }
      };

    default:
      return slice;
  }
}
