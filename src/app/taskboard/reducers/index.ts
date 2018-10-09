import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromTasks from './taskboard.reducer';

export interface TaskboardState {
  tasks: fromTasks.Slice;
}

export interface State extends fromRoot.State {
  taskboard: TaskboardState;
}

export const reducers: ActionReducerMap<TaskboardState> = {
  tasks: fromTasks.reducer
};

const visitTaskboard = createFeatureSelector<TaskboardState>('taskboard');

export const all = createSelector(visitTaskboard, s =>
  Object.values(s.tasks.entities)
);
