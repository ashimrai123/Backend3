import {Knex} from 'knex';
import db from '../db';
import {task} from '../models/tasks';

const tableName = 'todos';

export const getAllTasks = async (): Promise<task[]> => {
    return await db(tableName).select('*');
};

export const createTask = async (title:string):Promise<task> =>{
    const [newTask] = await db(tableName)
        .insert({title, completed:false})
        .returning('*');

    return newTask as task;
};

export const getTaskByTitle = async (title:string): Promise<task[]> =>{
    return await db(tableName).select('*').where(`title','like','%${title}%`);
};