export class TaskDetailModel {
  public constructor(
    public id: string,
    public title: string,
    public notes: string,
    public isCompleted: boolean,
    public dueDate?: Date,
    public reminderDate?: Date,
  ) {}

  static from(task: TaskDetailModel) {
    return new TaskDetailModel(
      task.id,
      task.title,
      task.notes,
      task.isCompleted,
      task.dueDate,
      task.reminderDate,
    );
  }
}
