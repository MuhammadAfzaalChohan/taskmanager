console.log(" afzaal CHohan is mister programmer the best");

import { ITask } from "./ITask";
import { IUser } from "./IUser";
import { TaskStatus } from "./TaskStatus";
 export class Task implements ITask {
  id: number;
  title: string;
  description: string;
  assignee: IUser | null;
  status: TaskStatus;

  constructor(
    id: number,
    title: string,
    description: string,
    assignee: IUser | null,
    status: TaskStatus
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.assignee = assignee ;
    this.status = status ;
  }

  updateStatus(newstatus: TaskStatus): void {
    this.status = newstatus;
  }
}
