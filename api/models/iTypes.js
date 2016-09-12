/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('iTypes', {
    cid: {
      type: DataTypes.UUIDV4,
      allowNull: true
    },
    inven_type: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    type_desc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: '(space((20)))'
    },
    issemen: {
      type: 'BIT',
      allowNull: false,
      defaultValue: '((0))'
    },
    itypes_gl: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: '     '
    },
    type_plat: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    nav_gl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    revx_gl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cogs_gl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cogsx_gl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inv_gl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    added_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    added_by: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    updated_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'iTypes'
  });
};
