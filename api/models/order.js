/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order', {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      defaultValue: '(newsequentialid())',
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.UUIDV4,
      allowNull: true,
      references: {
        model: 'customer',
        key: 'id'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'order'
  });
};
