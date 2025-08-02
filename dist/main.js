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
exports.main = main;
// import from TaskManager
const taskmanager_1 = require("./taskmanager");
// import from FetchUsers
const FetchUsers_1 = require("./FetchUsers");
const FetchUsers_2 = require("./FetchUsers");
// import from FetchTasks
const fetchTasks_1 = require("./fetchTasks");
const fetchTasks_2 = require("./fetchTasks");
const TaskStatus_1 = require("./TaskStatus");
const paginate_1 = require("./paginate");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield (0, FetchUsers_1.fetchUsers)();
        const tasks = yield (0, fetchTasks_1.fetchTasks)();
        // users[]
        const assigneduser = FetchUsers_2.mUser[0];
        assigneduser.assigntask(fetchTasks_2.mTasks[0]);
        // mUser[0]
        FetchUsers_2.mUser[1].assigntask(fetchTasks_2.mTasks[1]);
        FetchUsers_2.mUser[2].assigntask(fetchTasks_2.mTasks[2]);
        FetchUsers_2.mUser[3].assigntask(fetchTasks_2.mTasks[3]);
        const taskManager = new taskmanager_1.TaskManager();
        tasks.forEach(task => taskManager.addTask(task));
        const pendingTasks = taskManager.getTasksByStatus(TaskStatus_1.TaskStatus.Pending);
        console.log("Pending Tasks:", pendingTasks);
        const afzaalTasks = taskManager.getTasksByUser(101);
        console.log("Afzaal's Tasks:", afzaalTasks);
        const allTasks = taskManager['tasks'];
        const firstPageTasks = (0, paginate_1.paginate)(allTasks, 2, 1);
        console.log("Page 1 (2 tasks per page):", firstPageTasks);
    });
}
main();
