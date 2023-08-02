import {TaskDetailModel} from '@models';

export type TaskCardProps = {
  task: TaskDetailModel;
  isExpanded: boolean;
  isEditing: boolean;
  onExpandButtonPress: (id: string) => void;
  onTaskFocus: (id: string) => void;
  updateTask: <K extends keyof TaskDetailModel>(
    taskId: string,
    key: K,
    value: TaskDetailModel[K],
  ) => void;
  scrollOffset: (offset: number) => void;
  keyboardHeight: number;
};
