import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuickAddComponent } from './quick-add/quick-add.component';
import { TaskboardComponent } from './taskboard.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TaskboardComponent, QuickAddComponent]
})
export class TaskboardModule {}
