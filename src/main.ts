import { TaskManager } from "./taskmanager";

async function main() {
 
  const users = await fetchUsers();
  const tasks = await fetchTasks();


  const taskManager = new TaskManager();
  tasks.forEach(task => taskManager.addTask(task));

  
  const pendingTasks = taskManager.getTasksByStatus(TaskStatus.Pending);
  console.log("Pending Tasks:", pendingTasks);

  
  const afzaalTasks = taskManager.getTasksByUser(101); 
  console.log("Afzaal's Tasks:", afzaalTasks);

 
  const allTasks = taskManager['tasks']; 
  const firstPageTasks = paginate<Task>(allTasks, 2, 1);
  console.log("Page 1 (2 tasks per page):", firstPageTasks);
}

main();
