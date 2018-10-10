import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { QuickAddComponent } from './components/quick-add/quick-add.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskDetailsComponent } from './containers/task-details/task-details.component';
import { TasksDashboardComponent } from './containers/tasks-dashboard/tasks-dashboard.component';
import { TaskboardEffects } from './store/effects/taskboard.effects';
import * as fromTaskboard from './store/reducers';
import { TaskboardRoutingModule } from './taskboard-routing.module';
import { TaskboardComponent } from './taskboard.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    StoreModule.forFeature('taskboard', fromTaskboard.reducers),
    EffectsModule.forFeature([TaskboardEffects]),

    TaskboardRoutingModule
  ],
  declarations: [
    TaskboardComponent,
    TaskCardComponent,
    TasksDashboardComponent,
    TaskDetailsComponent,
    QuickAddComponent
  ]
})
export class TaskboardModule {}
