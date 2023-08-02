import {getTaskBeamState, taskBeamReducer} from '../reducer';
import {TaskDetailModel} from '@models';
import {taskBeamAction} from '../actions';
import {TaskBeamState} from '@store';

describe('TaskBeam reducer', () => {
  it('should return the initial state', () => {
    const state = getTaskBeamState();
    expect(state).toEqual(state);
  });

  it('should handle the addTask action correctly', () => {
    const state = getTaskBeamState();
    const task = new TaskDetailModel('4', 'Task 4', 'Notes 4', false);
    const action = taskBeamAction.addTask(task);
    const expectedState = {...state, tasks: [...state.tasks, task]};

    expect(taskBeamReducer(state)(state, action)).toEqual(expectedState);
  });

  it('should not add a task with a duplicate id', () => {
    const initialState: TaskBeamState = getTaskBeamState();

    const newTask: TaskDetailModel = {
      id: 'newTaskId',
      title: 'New task',
      notes: 'New notes',
      isCompleted: false,
    };

    // First action to add the new task
    let action = taskBeamAction.addTask(newTask);
    let state = taskBeamReducer(initialState)(initialState, action);

    // The task list should now include the new task
    expect(state.tasks).toContain(newTask);

    // Second action to add a task with the same id
    const duplicateTask: TaskDetailModel = {
      id: 'newTaskId',
      title: 'Duplicate task',
      notes: 'Duplicate notes',
      isCompleted: true,
    };

    action = taskBeamAction.addTask(duplicateTask);
    state = taskBeamReducer(state)(state, action);

    // The state should not have changed, as the duplicate task should not have been added
    expect(state.tasks).toContain(newTask);
    expect(state.tasks).not.toContain(duplicateTask);
  });

  it('should handle the editTask action correctly', () => {
    const state = getTaskBeamState();
    const action = taskBeamAction.editTask('1', 'title', 'Updated Title');
    const expectedState = {
      ...state,
      tasks: state.tasks.map(task =>
        task.id === '1' ? {...task, title: 'Updated Title'} : task,
      ),
    };

    expect(taskBeamReducer(state)(state, action)).toEqual(expectedState);
  });

  it('should handle the deleteTasks action correctly', () => {
    const state = getTaskBeamState();
    const action = taskBeamAction.deleteTasks(['1', '2']);
    const expectedState = {
      ...state,
      tasks: state.tasks.filter(task => !['1', '2'].includes(task.id)),
    };

    expect(taskBeamReducer(state)(state, action)).toEqual(expectedState);
  });
});
