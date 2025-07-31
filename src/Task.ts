console.log(" afzaal CHohan is mister programmer the best");

 class Task implements ITask {
  id: number;
  title: string;
  description: string;
  assignee: IUser;
  status: TaskStatus;

  constructor(
    id: number,
    title: string,
    description: string,
    assignee: IUser,
    status: TaskStatus
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.assignee = assignee;
    this.status = status;
  }

  updateStatus(newstatus: TaskStatus): void {
    this.status = newstatus;
  }
}
