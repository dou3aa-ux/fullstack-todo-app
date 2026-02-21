import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDTo, UpdateTodoDTo } from './dto/create-todo.dto';

//define el API endpoints
// This handles HTTP requests from the frontend

// "All routes in this file ybdou b '/api/todos'"
@Controller('api/todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Get()
    findAll() {
    return this.todosService.findAll();
    }

    @Post()
    create(@Body() createTodoDto: CreateTodoDTo) {
    return this.todosService.create(createTodoDto);
    }
    // @Body() extracts data from the request body
    // createTodoDto contains whatever frontend sent: { title: "..." }
    // Pass it to service to create in database


    @Put(':id')
    update(@Param('id') id: string,  // Extract ID from URL
    @Body() updateTodoDto: UpdateTodoDTo) {// Extract data from body
    return this.todosService.update(+id, updateTodoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
    return this.todosService.remove(+id);
    }
}