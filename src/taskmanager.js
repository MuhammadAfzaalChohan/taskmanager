"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    //   add task function
    TaskManager.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    // get tasks by status function
    TaskManager.prototype.getTasksByStatus = function (status) {
        var taskTOBeReturned = [];
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].status === status) {
                taskTOBeReturned.push(this.tasks[i]);
            }
        }
        return taskTOBeReturned;
    };
    //   getting tasks by user
    TaskManager.prototype.getTasksByUser = function (userId) {
        var _a;
        var taskTOBeReturned = [];
        for (var i = 0; i < this.tasks.length; i++) {
            if (((_a = this.tasks[i].assignee) === null || _a === void 0 ? void 0 : _a.id) === userId) {
                taskTOBeReturned.push(this.tasks[i]);
            }
        }
        return taskTOBeReturned;
    };
    // finding tasks
    TaskManager.prototype.findtask = function (id) {
        if (typeof id === "number") {
            for (var i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].id === id) {
                    return this.tasks[i];
                }
            }
        }
        else if (typeof id === "string") {
            for (var i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].title === id) {
                    return this.tasks[i];
                }
            }
        }
        throw new Error("Task not found");
    };
    return TaskManager;
}());
exports.TaskManager = TaskManager;
