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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
// import from TaskManager
var taskmanager_1 = require("./taskmanager");
// import from FetchUsers
var FetchUsers_1 = require("./FetchUsers");
var FetchUsers_2 = require("./FetchUsers");
// import from FetchTasks
var fetchTasks_1 = require("./fetchTasks");
var fetchTasks_2 = require("./fetchTasks");
var TaskStatus_1 = require("./TaskStatus");
var paginate_1 = require("./paginate");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var users, tasks, assigneduser, taskManager, pendingTasks, afzaalTasks, allTasks, firstPageTasks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, FetchUsers_1.fetchUsers)()];
                case 1:
                    users = _a.sent();
                    return [4 /*yield*/, (0, fetchTasks_1.fetchTasks)()];
                case 2:
                    tasks = _a.sent();
                    assigneduser = FetchUsers_2.mUser[0];
                    assigneduser.assigntask(fetchTasks_2.mTasks[0]);
                    // mUser[0]
                    FetchUsers_2.mUser[1].assigntask(fetchTasks_2.mTasks[1]);
                    FetchUsers_2.mUser[2].assigntask(fetchTasks_2.mTasks[2]);
                    FetchUsers_2.mUser[3].assigntask(fetchTasks_2.mTasks[3]);
                    taskManager = new taskmanager_1.TaskManager();
                    tasks.forEach(function (task) { return taskManager.addTask(task); });
                    pendingTasks = taskManager.getTasksByStatus(TaskStatus_1.TaskStatus.Completed);
                    console.log("Pending Tasks:", pendingTasks);
                    afzaalTasks = taskManager.getTasksByUser(102);
                    console.log("Afzaal's Tasks:", afzaalTasks);
                    allTasks = taskManager['tasks'];
                    firstPageTasks = (0, paginate_1.paginate)(allTasks, 2, 1);
                    console.log("Page 1 (2 tasks per page):", firstPageTasks);
                    return [2 /*return*/];
            }
        });
    });
}
main();
