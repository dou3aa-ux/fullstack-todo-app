import {Entity , Column ,PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
// entity: dtabase structure
@Entity('todos')
export class Todo{
    //auto-increments
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ default:false})
    completed: boolean;

    //the database automatically saves the current date ,time.
    @CreateDateColumn()
    created_at: Date;
}