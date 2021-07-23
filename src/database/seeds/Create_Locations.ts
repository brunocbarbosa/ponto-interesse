import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("locations").del();

    // Inserts seed entries
    await knex("locations").insert([
        { name: "Lanchonete", coord_x: "27", coord_y: "12" },
        { name: "Posto", coord_x: "31", coord_y: "18" },
        { name: "Joalheria", coord_x: "15", coord_y: "12" },
        { name: "Floricultura", coord_x: "19", coord_y: "21" },
        { name: "Pub", coord_x: "12", coord_y: "8" },
        { name: "Supermercado", coord_x: "23", coord_y: "6" },
        { name: "Churrascaria", coord_x: "28", coord_y: "2" }
        
        
    ]);
};
