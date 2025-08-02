export class TaskManager {
  private tasks: Task[] = [];

  //   add task function
  addTask(task: Task) {
    this.tasks.push(task);
  }
  // get tasks by status function

  getTasksByStatus(status: TaskStatus): Task[] {
    const taskTOBeReturned: Task[] = [];
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].status === status) {
        taskTOBeReturned.push(this.tasks[i]);
      }
    }
    return taskTOBeReturned;
  }

  //   getting tasks by user

  getTasksByUser(userId: number): Task[] {
    const taskTOBeReturned: Task[] = [];
    for (let i = 0; i < this.tasks.length; i++) {
      if ( this.tasks[i].assignee?.id === userId) {
        taskTOBeReturned.push(this.tasks[i]);
      }
    }
    return taskTOBeReturned;
  }

  // finding tasks

  findtask(id: string | number): Task {
    if (typeof id === "number") {
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id === id) {
          return this.tasks[i];
        }
      }
    } else if (typeof id === "string") {
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].title === id) {
          return this.tasks[i];
        }
      }
    }
    throw new Error("Task not found");
  }
}
