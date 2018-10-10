import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TaskDetailsComponent } from './containers/task-details/task-details.component';
import { TasksDashboardComponent } from './containers/tasks-dashboard/tasks-dashboard.component';
import { TaskboardComponent } from './taskboard.component';

const routes: Route[] = [
  {
    path: '',
    component: TaskboardComponent,
    children: [
      { path: '', component: TasksDashboardComponent },
      { path: ':guid', component: TaskDetailsComponent }
    ]
  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class TaskboardRoutingModule {}
