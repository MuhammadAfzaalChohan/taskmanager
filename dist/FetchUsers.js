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
exports.mUser = void 0;
exports.fetchUsers = fetchUsers;
const fetchTasks_1 = require("./fetchTasks");
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(exports.mUser);
            }, 5000);
        });
    });
}
exports.mUser = [
    {
        id: 101,
        name: "afzaal",
        email: "a@a.com",
        assigntask(newTask) {
            newTask = fetchTasks_1.mTasks[0];
        },
    },
    {
        id: 102,
        name: "ali",
        email: "ali@a.com",
        assigntask(newTask) {
            newTask = fetchTasks_1.mTasks[1];
        },
    },
    {
        id: 103,
        name: "saad",
        email: "s@a.com",
        assigntask(newTask) {
            newTask = fetchTasks_1.mTasks[2];
        },
    },
    {
        id: 104,
        name: "waqar",
        email: "w@a.com",
        assigntask(newTask) {
            newTask = fetchTasks_1.mTasks[3];
        },
    },
    {
        id: 105,
        name: "yaqub",
        email: "y@a.com",
        assigntask(newTask) {
            newTask = fetchTasks_1.mTasks[5];
        },
    },
];
