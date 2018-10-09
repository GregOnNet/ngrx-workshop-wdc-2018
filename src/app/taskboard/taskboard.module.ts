import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TaskboardEffects } from './effects/taskboard.effects';
import { QuickAddComponent } from './quick-add/quick-add.component';
import * as fromTaskboard from './reducers';
import { TaskboardComponent } from './taskboard.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    StoreModule.forFeature('taskboard', fromTaskboard.reducers),
    EffectsModule.forFeature([TaskboardEffects])
  ],
  declarations: [TaskboardComponent, QuickAddComponent]
})
export class TaskboardModule {}
