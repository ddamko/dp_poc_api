/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prices', {
    cid: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      defaultValue: '(newid())',
      primaryKey: true
    },
    items_cid: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    cntrys_cid: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    custs_cid: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    tier_type: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    low_qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    high_qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cost: {
      type: DataTypes.DECIMAL(7, 2),
      allowNull: false
    },
    sell: {
      type: DataTypes.DECIMAL(7, 2),
      allowNull: false
    },
    special: {
      type: DataTypes.DECIMAL(7, 2),
      allowNull: false
    },
    note_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    added_on: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '(getdate())'
    },
    added_by: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    updated_on: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '(getdate())'
    },
    updated_by: {
      type: DataTypes.CHAR,
      allowNull: false
    }
  }, {
    tableName: 'prices',
    timestamps: false
  });
};
