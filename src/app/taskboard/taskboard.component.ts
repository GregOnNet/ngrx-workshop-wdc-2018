import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { newGuid } from 'ts-guid';
import * as fromTaskboard from './reducers';
import { CreateTask } from './actions/taskboard.actions';
import { Task, TaskDraft } from './models';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private _store: Store<fromTaskboard.State>) {
    this.tasks$ = this._store.pipe(
      select(state => state.taskboard.tasks.entities),
      map(entities => Object.values(entities))
    );
  }

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
