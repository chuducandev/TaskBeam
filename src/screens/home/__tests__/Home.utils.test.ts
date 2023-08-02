import {createEmptyTask, getHighlightedTask, isTaskEmpty} from '../Home.utils';
import {TaskDetailModel} from '@models';

jest.mock('@utils', () => ({
  CommonUtils: {
    generateUniqueId: jest.fn(() => 'uniqueId'),
  },
}));

describe('Home.utils', () => {
  describe('createEmptyTask', () => {
    it('should return a new task object with empty properties', () => {
      const task = createEmptyTask();
      expect(task).toEqual({
        id: 'uniqueId',
        title: '',
        notes: '',
        isCompleted: false,
      });
    });
  });

  describe('isTaskEmpty', () => {
    it('should return true when task title is empty', () => {
      const task: TaskDetailModel = {
        id: '1',
        title: '',
        notes: 'Task Note',
        isCompleted: false,
      };
      expect(isTaskEmpty(task)).toBeTruthy();
    });

    it('should return false when task title is not empty', () => {
      const task: TaskDetailModel = {
        id: '1',
        title: 'Task Title',
        notes: 'Task Note',
        isCompleted: false,
      };
      expect(isTaskEmpty(task)).toBeFalsy();
    });
  });

  describe('getHighlightedTask', () => {
    it('should return undefined when no incomplete tasks', () => {
      const tasks: TaskDetailModel[] = [
        {
          id: '1',
          title: 'Task 1',
          notes: 'Task Note 1',
          isCompleted: true,
        },
        {
          id: '2',
          title: 'Task 2',
          notes: 'Task Note 2',
          isCompleted: true,
        },
      ];
      expect(getHighlightedTask(tasks)).toBeUndefined();
    });

    it('should return the task with nearest due date', () => {
      const tasks: TaskDetailModel[] = [
        {
          id: '1',
          title: 'Task 1',
          notes: 'Task Note 1',
          isCompleted: false,
          dueDate: new Date(Date.now() + 10000), // 10 seconds from now
        },
        {
          id: '2',
          title: 'Task 2',
          notes: 'Task Note 2',
          isCompleted: false,
          dueDate: new Date(Date.now() + 20000), // 20 seconds from now
        },
      ];
      expect(getHighlightedTask(tasks)).toEqual(tasks[0]);
    });

    it('should return the task with nearest reminder date if no due dates are present', () => {
      const tasks: TaskDetailModel[] = [
        {
          id: '1',
          title: 'Task 1',
          notes: 'Task Note 1',
          isCompleted: false,
          reminderDate: new Date(Date.now() + 10000), // 10 seconds from now
        },
        {
          id: '2',
          title: 'Task 2',
          notes: 'Task Note 2',
          isCompleted: false,
          reminderDate: new Date(Date.now() + 20000), // 20 seconds from now
        },
      ];
      expect(getHighlightedTask(tasks)).toEqual(tasks[0]);
    });
  });
});
