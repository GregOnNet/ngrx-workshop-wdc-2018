import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailsComponent } from './taskboard/containers/task-details/task-details.component';
import { TaskboardComponent } from './taskboard/taskboard.component';

const routes: Routes = [
  { path: '', component: TaskboardComponent, pathMatch: 'full' },
  { path: ':guid', component: TaskDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
