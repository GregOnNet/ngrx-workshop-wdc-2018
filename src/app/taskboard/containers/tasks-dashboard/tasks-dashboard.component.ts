import { Component, OnInit } from '@angular/core';
import { empty, Observable } from 'rxjs';
import { Task, TaskDraft } from '../../models';

@Component({
  selector: 'app-tasks-dashboard',
  templateUrl: './tasks-dashboard.component.html',
  styleUrls: ['./tasks-dashboard.component.scss']
})
export class TasksDashboardComponent implements OnInit {
  // TODO: Replace with values from store
  tasks$: Observable<Task[]> = empty();

  constructor(/* inject Store<any> */) {}

  createTask(draft: TaskDraft) {
    /* TODO
     * dispatch task
     * create guid for draft
     */
  }

  ngOnInit() {}
}
