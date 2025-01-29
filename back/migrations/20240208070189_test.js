const { generateUUID } = require("./helpers/uuid");
exports.up = async function (knex) {
  if (knex.client.config.client === "pg") {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
  }
  if (knex.client.config.client === "postgresql") {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
  }
  return knex.schema
    .createTable("privilegeA", function (table) {
      table.string("privilege").unique();
      table.string("description");
      table.timestamps(true, true);
    })
    .createTable("usersB", function (table) {
      table.uuid("id").primary().defaultTo(knex.raw(generateUUID(knex)));
      table.string("name");
      table.string("lastname");
      table.string("username").unique();
      table.string("description");
      table.string("privilege");
      table.integer("status").defaultTo(0);
      table.string("email").unique();
      table.string("password");
      table.boolean("is_admin").defaultTo(false);
      table.timestamp("last_login");
      table.timestamps(true, true);
    })
    .createTable("organization_gen_infoc", function (table) {
      table.uuid("id").primary().defaultTo(knex.raw(generateUUID(knex)));
      table.string("name");
      table.string("phone");
      table.integer("status").defaultTo(0);
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("organization_gen_info")
    .dropTableIfExists("users")
    .dropTableIfExists("privilege");
};


