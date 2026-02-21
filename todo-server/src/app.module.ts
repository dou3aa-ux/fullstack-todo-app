import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';
//Connects your app to the database
//Registers feature modules
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'todo_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], //automatically loads all entity files
      // synchronize: auto-creates database tables from entities
      synchronize: true,
    }),
    // Import TodosModule which contains all todo-related code
    TodosModule,
  ],
})
export class AppModule {}