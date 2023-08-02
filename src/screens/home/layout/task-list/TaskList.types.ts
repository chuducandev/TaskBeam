import {TaskDetailModel} from '@models';

export type TaskListProps = {
  tasks: TaskDetailModel[];
  editingTaskId: string | undefined;
  showCompletedTasks: boolean;
  isExpanded: boolean;
  onExpandButtonPress: (id: string) => void;
  onTaskFocus: (id: string) => void;
  updateTask: <K extends keyof TaskDetailModel>(
    taskId: string,
    key: K,
    value: TaskDetailModel[K],
  ) => void;
  header?: React.ReactNode;
  keyboardHeight: number;
};
