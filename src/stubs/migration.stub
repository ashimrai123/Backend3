import { Knex } from 'knex';

const USERS_TABLE_NAME = 'users';
const TODOS_TABLE_NAME = 'todos';

/**
 * Create table for users.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  // Create users table
  await knex.schema.createTable(USERS_TABLE_NAME, (table) => {
    table.bigIncrements('id').primary();
    table.string('username').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
  });

  // Create todos table
  await knex.schema.createTable(TODOS_TABLE_NAME, (table) => {
    table.bigIncrements('id').primary();
    table.string('title').notNullable();
    table.boolean('completed').defaultTo(false);
    table.bigInteger('user_id').unsigned().references('id').inTable(USERS_TABLE_NAME);
  });
}

/**
 * Drop tables for users and todos.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  // Drop todos table
  await knex.schema.dropTableIfExists(TODOS_TABLE_NAME);

  // Drop users table
  await knex.schema.dropTableIfExists(USERS_TABLE_NAME);
}
