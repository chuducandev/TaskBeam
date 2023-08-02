import {TaskDetailModel} from '@models';
import {CommonUtils} from '@utils';

export const MockUpTasks: TaskDetailModel[] = [
  {
    id: CommonUtils.generateUniqueId(),
    title: 'Finish Computer Science Assignment',
    notes: 'Finish the lecture and lab assignments',
    isCompleted: true,
    dueDate: new Date(new Date().getTime() + 5 * 60 * 1000),
    reminderDate: undefined,
  },
  {
    id: CommonUtils.generateUniqueId(),
    title: 'Go to the gym',
    notes: 'Take the gym bag with you',
    isCompleted: false,
    dueDate: new Date(
      new Date().getTime() + 24 * 60 * 60 * 1000 + 5 * 60 * 1000,
    ),
    reminderDate: new Date(new Date().getTime() + 23 * 60 * 60 * 1000),
  },
  {
    id: CommonUtils.generateUniqueId(),
    title: 'Have dinner with friends',
    notes: 'Remember to bring the gift',
    isCompleted: false,
    dueDate: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
    reminderDate: undefined,
  },
  {
    id: CommonUtils.generateUniqueId(),
    title: 'Go to the supermarket',
    notes: 'Buy some milk and eggs',
    isCompleted: false,
    dueDate: new Date(
      new Date().getTime() + 2 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000,
    ),
    reminderDate: undefined,
  },
];
