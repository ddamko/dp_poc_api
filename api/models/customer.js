/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer', {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      defaultValue: '(newsequentialid())',
      primaryKey: true
    },
    customer_key: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country_iso: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'customer'
  });
};
