import { Task } from '../../models';
import {
  CreateTaskSucceeded,
  TaskboardActionTypes
} from '../actions/taskboard.actions';
import { reducer, Slice } from './taskboard.reducer';

describe('Taskboard Actions', () => {
  describe(`${TaskboardActionTypes.Create}`, () => {
    describe('When action is raised', () => {
      it('should create a task', () => {
        const task = { guid: '123' } as Task;
        const initialState: Slice = { entities: {} };
        const action = new CreateTaskSucceeded(task);

        const state = reducer(initialState, action);

        expect(state).toMatchSnapshot();
      });
    });
  });
});
