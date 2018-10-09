import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskDraft } from '../models';

@Component({
  selector: 'app-quick-add',
  templateUrl: './quick-add.component.html',
  styleUrls: ['./quick-add.component.css']
})
export class QuickAddComponent {
  @Output()
  create = new EventEmitter<TaskDraft>();

  taskDraft = this._declareForm();

  constructor(private _fb: FormBuilder) {}

  private _declareForm(): FormGroup {
    return this._fb.group({
      title: ['', [Validators.required]],
      text: ['']
    });
  }
}
