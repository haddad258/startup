exports.up = function (knex) {
  // Add the extension only if it doesn't exist
  return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .then(() => knex.schema
      .createTable("privilege", function (table) {
        table.string("privilege").unique();
        table.string("description");
        table.timestamps(true, true);  // Raccourci pour ajouter les champs created_at et updated_at
      })
      .createTable("users", function (table) {
        table.uuid("id").notNullable().defaultTo(knex.raw('uuid_generate_v4()')).primary();
        table.string("name");
        table.string("lastname");
        table.string("username").unique();
        table.string("description");
        table.string("privilege");
        table.integer("status").defaultTo(0);
        table.string("email").unique();  // Exemple d'un champ email unique
        table.string("password");  // Exemple d'un champ pour stocker le mot de passe
        table.boolean("is_admin").defaultTo(false);  // Exemple d'un champ pour indiquer si l'utilisateur est un administrateur
        table.timestamp("last_login");  // Exemple d'un champ pour enregistrer la dernière connexion
        table.timestamps(true, true);  // Raccourci pour ajouter les champs created_at et updated_at
      })
      .createTable("organization_gen_info", function (table) {
        table.uuid("id").notNullable().defaultTo(knex.raw('uuid_generate_v4()')).primary();
        table.string("name");
        table.string("phone");
        table.integer("status").defaultTo(0);
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
    );
};

exports.down = function (knex) {
  return knex.schema.dropTable('Users');
};
