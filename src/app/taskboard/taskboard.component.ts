import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { newGuid } from 'ts-guid';
import * as fromRoot from '../reducers';
import { Task, TaskDraft } from './models';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit {
  constructor(private _store: Store<fromRoot.State>) {}

  ngOnInit() {}

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

export class CreateTask {
  readonly type = 'Create';

  constructor(public payload: Task) {}
}
