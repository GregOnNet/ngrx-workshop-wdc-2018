import { Component, Input } from '@angular/core';
import { Task } from '../../models';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styles: [
    `
      mat-card {
        margin: 16px;
      }
    `
  ]
})
export class TaskCardComponent {
  @Input()
  task: Task;
}
