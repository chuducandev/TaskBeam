import {useDispatch, useGlobalState} from '@hooks';
import {useCallback, useMemo} from 'react';
import {createEmptyTask, getHighlightedTask, isTaskEmpty} from './Home.utils';
import {taskBeamAction} from '@store';
import {TaskDetailModel} from '@models';

export const useViewModel = (onFinishEditing: () => void) => {
  const state = useGlobalState();
  const dispatch = useDispatch();

  const highlightedTask = useMemo(
    () => getHighlightedTask(state.tasks),
    [state.tasks],
  );

  const finishEditing = useCallback(() => {
    const emptyTaskIds = state.tasks.filter(isTaskEmpty).map(task => task.id);

    if (emptyTaskIds.length > 0) {
      dispatch(taskBeamAction.deleteTasks(emptyTaskIds));
    }

    onFinishEditing();
  }, [dispatch, onFinishEditing, state.tasks]);

  const createTask = useCallback((): string => {
    const newTask = createEmptyTask();
    dispatch(taskBeamAction.addTask(newTask));
    return newTask.id;
  }, [dispatch]);

  const updateTask = useCallback(
    <K extends keyof TaskDetailModel>(
      taskId: string,
      key: K,
      value: TaskDetailModel[K],
    ) => {
      dispatch(taskBeamAction.editTask(taskId, key, value));
    },
    [dispatch],
  );

  return {
    state,
    highlightedTask,
    finishEditing,
    createTask,
    updateTask,
  };
};
