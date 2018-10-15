import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { QuickAddComponent } from './components/quick-add/quick-add.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskDetailsComponent } from './containers/task-details/task-details.component';
import { TasksDashboardComponent } from './containers/tasks-dashboard/tasks-dashboard.component';
import { TaskboardRoutingModule } from './taskboard-routing.module';
import { TaskboardComponent } from './taskboard.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    TaskboardRoutingModule
  ],
  declarations: [
    TaskboardComponent,
    TasksDashboardComponent,
    TaskDetailsComponent,
    QuickAddComponent,
    TaskCardComponent
  ]
})
export class TaskboardModule {}
