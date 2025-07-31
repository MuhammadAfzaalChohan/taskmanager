"use strict";
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["pending"] = 0] = "pending";
    TaskStatus[TaskStatus["InProgress"] = 1] = "InProgress";
    TaskStatus[TaskStatus["Completed"] = 2] = "Completed";
})(TaskStatus || (TaskStatus = {}));
