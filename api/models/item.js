/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item', {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      defaultValue: '(newsequentialid())',
      primaryKey: true
    },
    item_key: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tier_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    short_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: true
    },
    species: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cost_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    sell_pice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    special: {
      type: 'BIT',
      allowNull: true
    },
    allocated: {
      type: 'BIT',
      allowNull: true
    },
    dead: {
      type: 'BIT',
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    customer_id: {
      type: DataTypes.UUIDV4,
      allowNull: true,
      references: {
        model: 'customer',
        key: 'id'
      }
    }
  }, {
    tableName: 'item'
  });
};
