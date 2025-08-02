// import from TaskManager
import { TaskManager } from "./taskmanager";
// import from FetchUsers
import { fetchUsers } from "./FetchUsers";
import { mUser } from "./FetchUsers";
// import from FetchTasks
import  {fetchTasks}  from "./fetchTasks";
import  {mTasks}  from "./fetchTasks";

// import from user
import { User } from "./User";
// import from task
import { Task } from "./Task";

import { TaskStatus } from "./TaskStatus";

import { paginate } from "./paginate";

import { ITask } from "./ITask";


import { IUser } from "./IUser";


export async function main() {
 
  const users = await fetchUsers();
  const tasks = await fetchTasks();
  
  // users[]
  const assigneduser: User=mUser[0];
  assigneduser.assigntask(mTasks[0])
  // mUser[0]
  mUser[1].assigntask(mTasks[1])
  mUser[2].assigntask(mTasks[2])
  mUser[3].assigntask(mTasks[3])



  

  const taskManager = new TaskManager();
  tasks.forEach(task => taskManager.addTask(task));

  
  const pendingTasks = taskManager.getTasksByStatus(TaskStatus.Completed);
  console.log("Pending Tasks:", pendingTasks);

  
  const afzaalTasks = taskManager.getTasksByUser(102); 
  console.log("Afzaal's Tasks:", afzaalTasks);

 
  const allTasks = taskManager['tasks']; 
  const firstPageTasks = paginate<Task>(allTasks, 2, 1);
  console.log("Page 1 (2 tasks per page):", firstPageTasks);
}


main();


