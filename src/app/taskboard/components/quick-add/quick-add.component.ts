import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskDraft } from '../../models';

@Component({
  selector: 'app-quick-add',
  templateUrl: './quick-add.component.html',
  styles: [
    `
      :host {
        display: block;
        margin: 16px;
      }
    `
  ]
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
