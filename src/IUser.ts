interface IUser {
  id: number;
  name: string;
  email: string;
}

interface ITask {
    id: number
    title: string
    description: string
    assignee :IUser
    status:TaskStatus
}


enum TaskStatus
{
    pending,
    InProgress,
    Completed
}
