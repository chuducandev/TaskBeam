import {createReducer} from 'typesafe-actions';
import {TaskBeamAction, taskBeamAction} from './actions';
import {TaskBeamState} from './types';
import {MockUpTasks} from '../mocks';

export const getTaskBeamState = (): TaskBeamState => {
  return {
    tasks: MockUpTasks,
  };
};

export const taskBeamReducer = (initialState: TaskBeamState) => {
  return createReducer<TaskBeamState, TaskBeamAction>(initialState)
    .handleAction(taskBeamAction.addTask, (state, action): TaskBeamState => {
      const newTask = action.payload.task;

      if (state.tasks.some(task => task.id === newTask.id)) {
        return state;
      }

      const tasks = [...state.tasks, newTask];

      return {
        ...state,
        tasks,
      };
    })
    .handleAction(taskBeamAction.editTask, (state, action): TaskBeamState => {
      const {id, key, value} = action.payload;

      const tasks = state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            [key]: value,
          };
        }

        return task;
      });

      return {
        ...state,
        tasks,
      };
    })
    .handleAction(
      taskBeamAction.deleteTasks,
      (state, action): TaskBeamState => {
        const {ids} = action.payload;

        const tasks = state.tasks.filter(task => !ids.includes(task.id));

        return {
          ...state,
          tasks,
        };
      },
    );
};
