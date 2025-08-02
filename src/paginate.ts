
function paginate<T>(items: T[], pageSize: number, pageNumber: number): T[] {
  let startIndex = pageNumber * pageSize - pageSize;
  let endIndex = pageNumber * pageSize;
  return items.slice(startIndex, endIndex);
}

const mUser: IUser[] = [
  { id: 101, name: "afzaal", email: "a@a.com" },
  { id: 102, name: "ali", email: "ali@a.com" },
  { id: 103, name: "saad", email: "s@a.com" },
  { id: 1004, name: "waqar", email: "w@a.com" },
  { id: 1005, name: "yaqub", email: "y@a.com" }

  
];

const mTasks: Task[] = [
     {
    id: 1,
    title: "Fix login bug",
    description: "Fix the bug preventing users from logging in",
    assignee: { id: 101, name: "afzaal", email: "a@a.com" },
    status: TaskStatus.Pending,
     updateStatus(newStatus: TaskStatus) {
      this.status = newStatus;
    }
  },
   
//   new Task(
//     1,          
//     "Fix login bug",
//     "Fix the bug preventing users from logging in",
//     { id: 101, name: "afzaal", email: "a@a.com"},
//     TaskStatus.pending
//   ),
//   new Task(
//     2,
//     "buy coffee",
//     "Buy coffee from mart",
//     {id: 102, name: "ali", email: "ali@a.com"  },
//     TaskStatus.pending
//   ),
//   new Task(
//     3,
//     "eat apple",
//     "Eat apple from the basket",
//     { id: 103, name: "saad", email: "s@a.com" },
//     TaskStatus.Completed
//   ),
//   new Task(
//     4,
//     "go shopping",
//     "go shopping in the mart",
//     { id: 1004, name: "waqar", email: "w@a.com" },
//     TaskStatus.InProgress
//   ),
//   new Task(
//     5,
//     "watch a movie",
//     "o watch movie in the cinema",
//     { id: 1005, name: "yaqub", email: "y@a.com" },
//     TaskStatus.pending
//   )
];

async function fetchUsers(): Promise<IUser[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mUser);
    }, 5000);
  });
}
async function fetchTasks(): Promise<Task[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mTasks);
    }, 5000);
  });
}
