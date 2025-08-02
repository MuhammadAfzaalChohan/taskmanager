import { Task } from "./Task";
import { TaskStatus } from "./TaskStatus";

export async function fetchTasks(): Promise<Task[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mTasks);
    }, 5000);
  });
}



export const mTasks: Task[] = [
  {
    id: 1,
    title: "Fix login bug",
    description: "Fix the bug form login",
    assignee: { id: 101, name: "afzaal", email: "af@a.com" },
    status: TaskStatus.Pending,
    updateStatus(newStatus: TaskStatus) {
      this.status = newStatus;
    },
  },
  {
    id: 2,
    title: "wash car",
    description: "Take the car to the carwash",
    assignee: { id: 101, name: "ali", email: "al@a.com" },
    status: TaskStatus.Completed,
    updateStatus(newStatus: TaskStatus) {
      this.status = newStatus;
    },
  },
  {
    id: 3,
    title: "Eat apple",
    description: "Go in the kitchen and eat apple",
    assignee: { id: 102, name: "zain", email: "za@a.com" },
    status: TaskStatus.InProgress,
    updateStatus(newStatus: TaskStatus) {
      this.status = newStatus;
    },
  },
  {
    id: 4,
    title: "Drink coffee",
    description: "Ask your wife to make coffee and drink coffee",
    assignee: { id: 103, name: "Ahmed", email: "ah@a.com" },
    status: TaskStatus.Completed,
    updateStatus(newStatus: TaskStatus) {
      this.status = newStatus;
    },
  },
  {
    id: 5,
    title: "do the assignment",
    description: "Do the assignment assigned by Haji sb.",
    assignee: { id: 104, name: "Pasha", email: "pa@a.com" },
    status: TaskStatus.Pending,
    updateStatus(newStatus: TaskStatus) {
      this.status = newStatus;
    },
  },
];


