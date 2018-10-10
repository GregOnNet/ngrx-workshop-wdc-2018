import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadAllTasks } from './store/actions/taskboard.actions';
import * as fromTaskboard from './store/reducers';

@Component({
  selector: 'app-taskboard',
  template: `<router-outlet></router-outlet>`
})
export class TaskboardComponent implements OnInit {
  constructor(private _store: Store<fromTaskboard.State>) {}

  ngOnInit() {
    this._store.dispatch(new LoadAllTasks());
  }
}
