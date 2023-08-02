import {act, renderHook} from '@testing-library/react-hooks';
import {useViewModel} from '../Home.viewModel';
import {useDispatch, useGlobalState} from '@hooks';
import {taskBeamAction} from '@store';

jest.mock('@hooks', () => ({
  useGlobalState: jest.fn(),
  useDispatch: jest.fn(),
}));

const onFinishEditing = jest.fn();

describe('useViewModel', () => {
  beforeEach(() => {
    jest.resetAllMocks();

    (useGlobalState as jest.Mock).mockImplementation(() => ({
      tasks: [],
    }));

    (useDispatch as jest.Mock).mockImplementation(() => jest.fn());
  });

  it('should initialize values correctly', () => {
    const {result} = renderHook(() => useViewModel(onFinishEditing));
    expect(result.current.highlightedTask).toBeUndefined();
  });

  it('should handle task creation correctly', () => {
    const {result} = renderHook(() => useViewModel(onFinishEditing));
    const newTaskId = result.current.createTask();
    expect(typeof newTaskId).toBe('string');
    expect(newTaskId.length).toBeGreaterThan(0);
  });

  it('should handle task editing correctly', () => {
    const dispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(dispatch);

    const {result} = renderHook(() => useViewModel(onFinishEditing));
    const taskId = 'testId';

    act(() => {
      result.current.updateTask(taskId, 'title', 'Test task');
    });

    expect(dispatch).toHaveBeenCalledWith(
      taskBeamAction.editTask(taskId, 'title', 'Test task'),
    );
  });
});
