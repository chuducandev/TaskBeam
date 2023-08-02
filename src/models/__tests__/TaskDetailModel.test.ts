import {TaskDetailModel} from '../TaskDetailModel';

describe('TaskDetailModel', () => {
  it('should construct an instance correctly', () => {
    const id = 'id1';
    const title = 'task1';
    const notes = 'notes for task1';
    const isCompleted = false;
    const dueDate = new Date(2023, 7, 30);
    const reminderDate = new Date(2023, 7, 29);

    const task = new TaskDetailModel(
      id,
      title,
      notes,
      isCompleted,
      dueDate,
      reminderDate,
    );

    expect(task).toBeInstanceOf(TaskDetailModel);
    expect(task.id).toBe(id);
    expect(task.title).toBe(title);
    expect(task.notes).toBe(notes);
    expect(task.isCompleted).toBe(isCompleted);
    expect(task.dueDate).toEqual(dueDate);
    expect(task.reminderDate).toEqual(reminderDate);
  });

  it('should handle optional fields correctly', () => {
    const id = 'id1';
    const title = 'task1';
    const notes = 'notes for task1';
    const isCompleted = false;

    const task = new TaskDetailModel(id, title, notes, isCompleted);

    expect(task).toBeInstanceOf(TaskDetailModel);
    expect(task.id).toBe(id);
    expect(task.title).toBe(title);
    expect(task.notes).toBe(notes);
    expect(task.isCompleted).toBe(isCompleted);
    expect(task.dueDate).toBeUndefined();
    expect(task.reminderDate).toBeUndefined();
  });

  it('should create a new instance using the from method', () => {
    const id = 'id1';
    const title = 'task1';
    const notes = 'notes for task1';
    const isCompleted = false;
    const dueDate = new Date(2023, 7, 30);
    const reminderDate = new Date(2023, 7, 29);

    const originalTask = new TaskDetailModel(
      id,
      title,
      notes,
      isCompleted,
      dueDate,
      reminderDate,
    );
    const newTask = TaskDetailModel.from(originalTask);

    expect(newTask).toBeInstanceOf(TaskDetailModel);
    expect(newTask).not.toBe(originalTask); // Check they are not the same instance
    expect(newTask.id).toBe(id);
    expect(newTask.title).toBe(title);
    expect(newTask.notes).toBe(notes);
    expect(newTask.isCompleted).toBe(isCompleted);
    expect(newTask.dueDate).toEqual(dueDate);
    expect(newTask.reminderDate).toEqual(reminderDate);
  });
});
