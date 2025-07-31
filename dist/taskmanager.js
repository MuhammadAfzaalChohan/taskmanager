"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    //   add task function
    addTask(task) {
        this.tasks.push(task);
    }
    // get tasks by status function
    getTasksByStatus(status) {
        const taskTOBeReturned = [];
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].status === status) {
                taskTOBeReturned.push(this.tasks[i]);
            }
        }
        return taskTOBeReturned;
    }
    //   getting tasks by user
    getTasksByUser(userId) {
        const taskTOBeReturned = [];
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].assignee.id === userId) {
                taskTOBeReturned.push(this.tasks[i]);
            }
        }
        return taskTOBeReturned;
    }
    // finding tasks
    findtask(id) {
        if (typeof id === "number") {
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].id === id) {
                    return this.tasks[i];
                }
            }
        }
        else if (typeof id === "string") {
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].title === id) {
                    return this.tasks[i];
                }
            }
        }
        throw new Error("Task not found");
    }
}
exports.TaskManager = TaskManager;
