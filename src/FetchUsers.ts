import { fetchTasks } from "./fetchTasks";
import { mTasks } from "./fetchTasks";
import { Task } from "./Task";
import { User } from "./User";
import { IUser } from "./IUser";



export async function fetchUsers(): Promise<IUser[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mUser);
    }, 1000);
  });
}




export const mUser: User[] = [
  {
    id: 101,
    name: "afzaal",
    email: "a@a.com",
    assigntask(newTask: Task) {
      newTask = mTasks[0];
    },
  },
  {
    id: 102,
    name: "ali",
    email: "ali@a.com",
    assigntask(newTask: Task) {
      newTask = mTasks[1];
    },
  },
  {
    id: 103,
    name: "saad",
    email: "s@a.com",
    assigntask(newTask: Task) {
      newTask = mTasks[2];
    },
  },
  {
    id: 104,
    name: "waqar",
    email: "w@a.com",
    assigntask(newTask: Task) {
      newTask = mTasks[3];
    },
  },
  {
    id: 105,
    name: "yaqub",
    email: "y@a.com",
    assigntask(newTask: Task) {
      newTask = mTasks[5];
    },
  },
];