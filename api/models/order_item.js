/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_item', {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      defaultValue: '(newsequentialid())',
      primaryKey: true
    },
    order_id: {
      type: DataTypes.UUIDV4,
      allowNull: true,
      references: {
        model: 'order',
        key: 'id'
      }
    },
    item_id: {
      type: DataTypes.UUIDV4,
      allowNull: true,
      references: {
        model: 'item',
        key: 'id'
      }
    }
  }, {
    tableName: 'order_item'
  });
};
