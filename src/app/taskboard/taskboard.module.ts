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
import { QuickAddComponent } from './quick-add/quick-add.component';
import { TaskboardEffects } from './store/effects/taskboard.effects';
import * as fromTaskboard from './store/reducers';
import { TaskCardComponent } from './task-card/task-card.component';
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
    EffectsModule.forFeature([TaskboardEffects])
  ],
  declarations: [TaskboardComponent, QuickAddComponent, TaskCardComponent]
})
export class TaskboardModule {}
