'use strict';
module.exports = (sequelize, DataTypes) => {
  const party = sequelize.define('party', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    numClowns: DataTypes.INTEGER
  }, {});
  party.associate = function(models) {
    // x party : 1 user
    models.party.belongsTo(models.user);
    // x clowns : x party
    models.party.belongsToMany(models.clown, {through: "partyClown"})
  };
  return party;
};