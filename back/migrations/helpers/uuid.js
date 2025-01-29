const generateUUID = (knex) => {
    const dbClient = knex.client.config.client;
  
    if (dbClient === "pg") {
      return "uuid_generate_v4()";
    }
    if (dbClient === "postgresql") {
        return "uuid_generate_v4()";
      }
    if (dbClient === "mysql" || dbClient === "mariadb") {
      return "UUID()";
    }
  
    throw new Error(`Unsupported database client: ${dbClient}`);
  };
  
  module.exports = { generateUUID };
  