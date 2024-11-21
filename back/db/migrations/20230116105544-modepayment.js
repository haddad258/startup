'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').

      then(() => {
        queryInterface.createTable('ModePayment', {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.literal('uuid_generate_v4()'),
          },
          mode: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          description: {
            type: Sequelize.STRING,
            defaultValue: false,
          },
          nameapp: {
            type: Sequelize.STRING,
            defaultValue: false,
          },
          Client_ID: {
            type: Sequelize.STRING,
          },
          Secret: {
            type: Sequelize.STRING,
          },
          expiry_date: {
            type: Sequelize.STRING,
          },
        });
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CustomersPayment');

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
