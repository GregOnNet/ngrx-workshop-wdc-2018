import { Task } from '../../models';
import {
  TaskboardActions,
  TaskboardActionTypes
} from '../actions/taskboard.actions';

export interface Slice {
  entities: { [guid: string]: Task };
}

export const initialState: Slice = {
  entities: {}
};

export function reducer(slice = initialState, action: TaskboardActions): Slice {
  switch (action.type) {
    case TaskboardActionTypes.CreateSucceeded:
      return action.payload.guid
        ? {
            ...slice,
            entities: {
              ...slice.entities,
              [action.payload.guid]: action.payload
            }
          }
        : slice;

    case TaskboardActionTypes.LoadAllSucceeded:
      return {
        ...slice,
        entities: action.payload.reduce(
          (tasks, task) => ({ ...tasks, [task.guid]: task }),
          {}
        )
      };

    default:
      return slice;
  }
}
