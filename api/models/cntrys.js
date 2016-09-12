/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cntrys', {
    cid: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      defaultValue: '(newid())',
      primaryKey: true
    },
    cntry_key: {
      type: DataTypes.CHAR,
      allowNull: false,
      primaryKey: true
    },
    cntry_name: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cntry_plat: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    cntry_iso: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    doc_link_1: {
      type: DataTypes.STRING,
      allowNull: false
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
    tableName: 'cntrys'
  });
};
