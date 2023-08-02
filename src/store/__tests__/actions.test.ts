import {TaskDetailModel} from '@models';
import {taskBeamAction} from '../actions';

describe('TaskBeam actions', () => {
  it('should create an addTask action', () => {
    const task = new TaskDetailModel('1', 'Task 1', 'Notes 1', false);
    const expectedAction = {
      type: 'TaskBeam/addTask',
      payload: {
        task,
      },
    };

    expect(taskBeamAction.addTask(task)).toEqual(expectedAction);
  });

  it('should create an editTask action', () => {
    const id = '1';
    const key = 'title';
    const value = 'Updated Title';
    const expectedAction = {
      type: 'TaskBeam/editTask',
      payload: {
        id,
        key,
        value,
      },
    };

    expect(taskBeamAction.editTask(id, key, value)).toEqual(expectedAction);
  });

  it('should create a deleteTasks action', () => {
    const ids = ['1', '2', '3'];
    const expectedAction = {
      type: 'TaskBeam/deleteTasks',
      payload: {
        ids,
      },
    };

    expect(taskBeamAction.deleteTasks(ids)).toEqual(expectedAction);
  });
});
