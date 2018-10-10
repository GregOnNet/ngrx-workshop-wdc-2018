import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskboardComponent } from './taskboard.component';
import { TasksDashboardComponent } from './containers/tasks-dashboard/tasks-dashboard.component';
import { TaskDetailsComponent } from './containers/task-details/task-details.component';

const routes: Routes = [{
  path: '',
  component: TaskboardComponent,
  children: [
    { path: '', component: TasksDashboardComponent },
    { path: ':guid', component: TaskDetailsComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskboardRoutingModule { }
