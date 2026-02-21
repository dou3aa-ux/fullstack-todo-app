import { Injectable } from '@nestjs/common';
import { InjectRepository }  from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDTo , UpdateTodoDTo } from './dto/create-todo.dto';
import { NotFoundException } from '@nestjs/common';

// @Injectable means: "najm nanjectih fi classet o5rin"

@Injectable()
export class TodosService {
    constructor(
        @InjectRepository(Todo)
        private todosRepository: Repository<Todo>,
    ){}

    //bsh traje3 tableau fih Todo objects
    // async = this function returns a Promise
    async findAll(): Promise<Todo[]>{
        // .find() queries the database: SELECT * FROM todos
        return this.todosRepository.find({
            order: {created_at: 'DESC'}
        });
    }

    async create(createTodoDto: CreateTodoDTo): Promise<Todo>{
        const todo=this.todosRepository.create(createTodoDto);
    return this.todosRepository.save(todo);
    }

    async update(id: number, updateTodoDto: UpdateTodoDTo): Promise<Todo> {
    await this.todosRepository.update(id, updateTodoDto);

    const updatedTodo = await this.todosRepository.findOne({
    where: { id },
    });

    if (!updatedTodo) {
    throw new NotFoundException(`Todo with id ${id} not found`);
    }

    return updatedTodo;
}

    async remove(id:number): Promise<void> {
        await this.todosRepository.delete(id);
    }
}
