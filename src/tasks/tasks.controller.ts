import { Controller, Get, Put, Post, Delete, Body } from '@nestjs/common';
import { TasksService } from './tasks.service'
import {CreateTaskDto} from './dto/task.dto'

@Controller('tasks')
export class TasksController {
    
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks()
    }

    @Post()
    createTask(@Body() newTask : CreateTaskDto){
        return this.tasksService.createTasks(newTask.title, newTask.description)
    }
}
