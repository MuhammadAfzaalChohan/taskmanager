"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
console.log(" afzaal CHohan is mister programmer the best");
class Task {
    constructor(id, title, description, assignee, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.assignee = assignee;
        this.status = status;
    }
    updateStatus(newstatus) {
        this.status = newstatus;
    }
}
exports.Task = Task;
