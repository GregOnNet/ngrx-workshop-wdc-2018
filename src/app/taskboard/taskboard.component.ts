import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskboard',
  template: `<router-outlet></router-outlet>`,
})
export class TaskboardComponent implements OnInit {
  ngOnInit() {
    /* TODO: Dispatch Action to load all Tasks. */
  }
}
