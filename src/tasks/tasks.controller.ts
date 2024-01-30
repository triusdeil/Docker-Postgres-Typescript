import { Controller, Get, Put, Post, Delete, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service'
import {CreateTaskDto, UpdateTaskDto} from './dto/task.dto'

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

    @Delete(':id')
    deleteTask(@Param('id') id:string){
        this.tasksService.deleteTask(id)
    }
    
    @Put(':id')
    updateTask(@Param('id') id: string , @Body() updatedFields: UpdateTaskDto){
        return this.tasksService.updateTask(id, updatedFields)
    }
}
