exports.up = function (knex) {
  return knex.schema
    .createTable("privilege", function (table) {
      table.string("privilege").unique();
      table.string("description");
      table.timestamps(true, true);
    })
    .createTable("users", function (table) {
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
    .createTable("organization_gen_info", function (table) {
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

// Fonction pour générer un UUID en fonction du client
function generateUUID(knex) {
  const dbClient = knex.client.config.client;

  // PostgreSQL utilise uuid_generate_v4()
  if (dbClient === "pg") {
    return "uuid_generate_v4()";
  }

  // MySQL utilise UUID()
  if (dbClient === "mysql" || dbClient === "mariadb") {
    return "UUID()";
  }

  throw new Error(`Unsupported database client: ${dbClient}`);
}
