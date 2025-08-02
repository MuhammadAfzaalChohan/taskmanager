"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
console.log(" afzaal CHohan is mister programmer the best");
var Task = /** @class */ (function () {
    function Task(id, title, description, assignee, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.assignee = assignee;
        this.status = status;
    }
    Task.prototype.updateStatus = function (newstatus) {
        this.status = newstatus;
    };
    return Task;
}());
exports.Task = Task;
