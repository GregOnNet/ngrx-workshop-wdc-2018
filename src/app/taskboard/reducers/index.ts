import * as fromRoot from '../../reducers';
import * as fromTasks from './taskboard.reducer';

import { ActionReducerMap } from '@ngrx/store';

export interface State extends fromRoot.State {
  tasks: fromTasks.Slice;
}

export const reducers: ActionReducerMap<State> = {
  tasks: fromTasks.reducer
};

