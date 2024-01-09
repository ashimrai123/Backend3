import { Knex } from 'knex';

const USERS_TABLE_NAME = 'users';
const TODOS_TABLE_NAME = 'todos';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries from tables
  await knex(USERS_TABLE_NAME).del();
  await knex(TODOS_TABLE_NAME).del();

  // Insert seed entries for users
  await knex(USERS_TABLE_NAME).insert([
    { id: 1, username: 'user1', email: 'user1@gmail.com', password: 'password1' },
    { id: 2, username: 'user2', email: 'user2@gmail.com', password: 'password2' },
  ]);

  // Insert seed entries for todos
  await knex(TODOS_TABLE_NAME).insert([
    { id: 1, title: 'Task 1', completed: false, user_id: 1 },
    { id: 2, title: 'Task 2', completed: true, user_id: 1 },
    { id: 3, title: 'Task 3', completed: false, user_id: 2 },
  ]);
}
