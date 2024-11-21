'use strict';

module.exports = (sequelize, DataTypes) => {
  const ModePayment = sequelize.define('ModePayment', {
    //// create attributes to update Models
  }, {});

  ModePayment.associate = function(models) {
    // Add associations here if needed
    // models.ModePayment.hasMany(models.OtherModel, { foreignKey: 'OtherModel_id' });
  };

  return ModePayment;
};
