import { Task } from '../../models';
import {
  TaskboardActions,
  TaskboardActionTypes
} from '../actions/taskboard.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface Slice extends EntityState<Task> {}
export const adapter = createEntityAdapter<Task>({
  selectId: task => task.guid
});

const initialState = adapter.getInitialState();

export function reducer(slice = initialState, action: TaskboardActions): Slice {
  switch (action.type) {
    case TaskboardActionTypes.CreateSucceeded:
      return action.payload.guid
        ? adapter.addOne(action.payload, slice)
        : slice;

    case TaskboardActionTypes.LoadAllSucceeded:
      return adapter.addAll(action.payload, slice);

    default:
      return slice;
  }
}
