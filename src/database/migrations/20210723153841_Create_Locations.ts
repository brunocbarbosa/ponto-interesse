import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('locations', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('coord_x').notNullable();
        table.integer('coord_y').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('locations')
}

