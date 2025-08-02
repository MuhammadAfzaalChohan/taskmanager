"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mTasks = void 0;
exports.fetchTasks = fetchTasks;
const TaskStatus_1 = require("./TaskStatus");
function fetchTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(exports.mTasks);
            }, 5000);
        });
    });
}
exports.mTasks = [
    {
        id: 1,
        title: "Fix login bug",
        description: "Fix the bug form login",
        assignee: { id: 101, name: "afzaal", email: "af@a.com" },
        status: TaskStatus_1.TaskStatus.Pending,
        updateStatus(newStatus) {
            this.status = newStatus;
        },
    },
    {
        id: 2,
        title: "wash car",
        description: "Take the car to the carwash",
        assignee: { id: 101, name: "ali", email: "al@a.com" },
        status: TaskStatus_1.TaskStatus.Completed,
        updateStatus(newStatus) {
            this.status = newStatus;
        },
    },
    {
        id: 3,
        title: "Eat apple",
        description: "Go in the kitchen and eat apple",
        assignee: { id: 102, name: "zain", email: "za@a.com" },
        status: TaskStatus_1.TaskStatus.InProgress,
        updateStatus(newStatus) {
            this.status = newStatus;
        },
    },
    {
        id: 4,
        title: "Drink coffee",
        description: "Ask your wife to make coffee and drink coffee",
        assignee: { id: 103, name: "Ahmed", email: "ah@a.com" },
        status: TaskStatus_1.TaskStatus.Completed,
        updateStatus(newStatus) {
            this.status = newStatus;
        },
    },
    {
        id: 5,
        title: "do the assignment",
        description: "Do the assignment assigned by Haji sb.",
        assignee: { id: 104, name: "Pasha", email: "pa@a.com" },
        status: TaskStatus_1.TaskStatus.Pending,
        updateStatus(newStatus) {
            this.status = newStatus;
        },
    },
];
