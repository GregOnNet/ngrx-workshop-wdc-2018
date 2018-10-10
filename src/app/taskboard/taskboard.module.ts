import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskboardRoutingModule } from './taskboard-routing.module';
import { TasksDashboardComponent } from './containers/tasks-dashboard/tasks-dashboard.component';
import { TaskDetailsComponent } from './containers/task-details/task-details.component';
import { TaskboardComponent } from './taskboard.component';

@NgModule({
  imports: [CommonModule, TaskboardRoutingModule],
  declarations: [
    TaskboardComponent,
    TasksDashboardComponent,
    TaskDetailsComponent
  ]
})
export class TaskboardModule {}
