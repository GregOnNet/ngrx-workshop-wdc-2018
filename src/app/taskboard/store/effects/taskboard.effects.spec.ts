import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { ApiTasks } from '../../lib';
import { Task } from '../../models';
import {
  CreateTask,
  CreateTaskSucceeded,
  TaskboardActionTypes
} from '../actions/taskboard.actions';
import { TaskboardEffects } from './taskboard.effects';

import { marbles } from 'rxjs-marbles/jest';

describe('Taskboard Effects', () => {
  describe(`${TaskboardActionTypes.Create}`, () => {
    let effects: TaskboardEffects;
    let actions$: Observable<any>;
    let apiTasks: ApiTasks;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          TaskboardEffects,
          provideMockActions(() => actions$),
          {
            provide: ApiTasks,
            useFactory() {
              return {
                create: () => of()
              };
            }
          }
        ]
      });

      effects = TestBed.get(TaskboardEffects);
      actions$ = TestBed.get(Actions);
      apiTasks = TestBed.get(ApiTasks);
    });

    describe('When action is raised', () => {
      it(
        'should add a task',
        marbles(m => {
          const task = { guid: '123' } as Task;
          const action = new CreateTask(task);
          const completion = new CreateTaskSucceeded(task);

          actions$ = m.hot('-a', { a: action });
          apiTasks.create = jest.fn(() => m.cold('---t', { t: task }));

          const expected = m.cold('----c', { c: completion });

          m.expect(effects.create).toBeObservable(expected);
        })
      );
    });
  });
});
