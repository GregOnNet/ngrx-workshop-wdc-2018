import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router-state-url';

export interface State {
  router: RouterReducerState<RouterStateUrl>;
}
