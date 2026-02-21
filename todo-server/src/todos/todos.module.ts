import { Module } from '@nestjs/common';
//defines a NestJS module
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
//connect your entity to TypeORM
import { Todo } from './todo.entity';

// el module hwa container t3 feature
@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodosController],  //Registers your controller
  providers: [TodosService],  //Registers your service
})
export class TodosModule {}
//without this file ,repository wouldn't inject, controller wouldn't exist, service wouldn't be available, feature wouldn't be registered