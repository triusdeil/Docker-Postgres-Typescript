import { Injectable } from '@nestjs/common';
import {v4} from 'uuid'
import {Task, TaskStatus} from './task.entity'

@Injectable()
export class TasksService {

    private tasks: Task[] = [
        {
            id: '1',
            title: 'first task',
            description: 'some task',
            status: TaskStatus.PENDING
        }
    ]

    getAllTasks() {
       return this.tasks
    }

    getTaskById(){
    }

    createTasks(title: string, description: string) {
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }   
        this.tasks.push(task)
        return task
    }

    updateTask() {

    }

    deleteTask() {

    }

}
