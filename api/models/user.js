/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      defaultValue: '(newsequentialid())',
      primaryKey: true
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password_salt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true
    },
    customer_id: {
      type: DataTypes.UUIDV4,
      allowNull: true,
      references: {
        model: 'custs',
        key: 'cid'
      }
    }
  }, {
    tableName: 'user'
  });
};
