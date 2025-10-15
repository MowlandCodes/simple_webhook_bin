import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("webhooks", (table) => {
    table.uuid("id").primary();
    table.text("headers").notNullable();
    table.text("body").notNullable();
    table.timestamp("received_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("webhooks");
}
