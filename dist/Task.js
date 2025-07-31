"use strict";
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
