import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../models';

import * as fromTaskboard from '../../store/reducers';
import { Store, select } from '@ngrx/store';
import { LoadAll } from '../../store/actions/taskboard.actions';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task$: Observable<Task>;

  constructor(private _store: Store<fromTaskboard.State>) {
    this.task$ = this._store.pipe(select(fromTaskboard.currentTask));
  }

  ngOnInit() {
    this._store.dispatch(new LoadAll());
  }
}
