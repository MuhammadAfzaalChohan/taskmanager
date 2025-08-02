import { IUser } from "./IUser"
import { TaskStatus } from "./TaskStatus"

export interface ITask {
    id: number
    title: string
    description: string
    assignee :IUser | null
    status:TaskStatus
}