import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { newGuid } from 'ts-guid';
import { CreateTask, LoadAll } from './actions/taskboard.actions';
import { Task, TaskDraft } from './models';
import * as fromTaskboard from './reducers';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private _store: Store<fromTaskboard.State>) {
    this.tasks$ = this._store.pipe(select(fromTaskboard.all));
  }

  ngOnInit() {
    this._store.dispatch(new LoadAll());
  }

  buildTask(draft: TaskDraft) {
    this._store.dispatch(
      new CreateTask({
        guid: newGuid(),
        isInProgress: false,
        isDone: false,
        ...draft
      })
    );
  }
}
