/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reps', {
    cid: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      defaultValue: '(newid())',
      primaryKey: true
    },
    rep_key: {
      type: DataTypes.CHAR,
      allowNull: false,
      primaryKey: true
    },
    rep_desc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rep_type: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address_2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address_3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    state: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    zip: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    plat_rep: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cntrys_cid: {
      type: DataTypes.UUIDV4,
      allowNull: true
    },
    phone: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    phone_desc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone_2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phn_2_desc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mobile: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    fax_1: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    fax_1_desc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fax_2: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    fax_2_desc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comment_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    doc_link1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    inactive_on: {
      type: DataTypes.DATE,
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
    }
  }, {
    tableName: 'reps'
  });
};
