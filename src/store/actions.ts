import {ActionType, createAction} from 'typesafe-actions';
import {TaskDetailModel} from '@models';

const addTask = createAction('TaskBeam/addTask', (task: TaskDetailModel) => ({
  task,
}))();

const editTask = createAction(
  'TaskBeam/editTask',
  <K extends keyof TaskDetailModel>(
    id: string,
    key: K,
    value: TaskDetailModel[K],
  ) => ({
    id,
    key,
    value,
  }),
)();

const deleteTasks = createAction('TaskBeam/deleteTasks', (ids: string[]) => ({
  ids,
}))();

export const taskBeamAction = {
  addTask,
  editTask,
  deleteTasks,
};

export type TaskBeamAction = ActionType<typeof taskBeamAction>;
