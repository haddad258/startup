/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('privilege').del()
  await knex('privilege').insert([
    { privilege: "SUADMIN", description: 'description admin' },
    { privilege: "SUADMINRH", description: 'description SUADMINRH' },
    { privilege: "RH", description: 'description design' },
    { privilege: "config", description: 'description config' }

  ])
  await knex('users').insert([
    {
      privilege: "SUADMIN",
      name: "HaddadLCS",
      lastname: "Rafik",
      email:"haddadrafik258@gmail.com",
      description: "this user is created by seed migrations",
      username: 'haddadrafik258@gmail.com',
      password: "$2a$10$I0aARcnKuvL0GD6/1B3lzuvoyPR2nffdr0LePjQGdhf.QazsBazbS",
    },
  ])

};
