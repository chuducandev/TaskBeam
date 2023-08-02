import {TaskDetailModel} from '@models';
import {CommonUtils} from '@utils';

export const createEmptyTask = (): TaskDetailModel => {
  return {
    id: CommonUtils.generateUniqueId(),
    title: '',
    notes: '',
    isCompleted: false,
  };
};

export const isTaskEmpty = (task: TaskDetailModel): boolean => {
  return task.title === '';
};

export const getHighlightedTask = (
  tasks: TaskDetailModel[],
): TaskDetailModel | undefined => {
  const incompleteTasks = tasks.filter(task => !task.isCompleted);
  if (incompleteTasks.length === 0) {
    return undefined;
  }

  const now = new Date();
  const highlightedTask = incompleteTasks.reduce((prev, curr) => {
    const prevDueDate = prev.dueDate ?? prev.reminderDate;
    const currDueDate = curr.dueDate ?? curr.reminderDate;
    if (prevDueDate === undefined) {
      return curr;
    }
    if (currDueDate === undefined) {
      return prev;
    }
    return prevDueDate.getTime() - now.getTime() <
      currDueDate.getTime() - now.getTime()
      ? prev
      : curr;
  }, incompleteTasks[0]);

  return highlightedTask;
};
