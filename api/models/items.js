/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('items', {
    cid: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      defaultValue: '(newid())',
      primaryKey: true
    },
    item_key: {
      type: DataTypes.CHAR,
      allowNull: false,
      primaryKey: true
    },
    short_name: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    itypes_cid: {
      type: DataTypes.UUIDV4,
      allowNull: true
    },
    descrip: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    do_not_ord: {
      type: 'BIT',
      allowNull: true
    },
    id_no: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    vends_cid: {
      type: DataTypes.UUIDV4,
      allowNull: true
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true
    },
    allocated: {
      type: 'BIT',
      allowNull: false
    },
    breed: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cntrys_cid: {
      type: DataTypes.UUIDV4,
      allowNull: true
    },
    dead: {
      type: 'BIT',
      allowNull: false
    },
    prove_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    prove_stat: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    inactive: {
      type: 'BIT',
      allowNull: false
    },
    class_scor: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    bull_status: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    sire_name: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    dam_name: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    mgs_name: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    eu_qual: {
      type: 'BIT',
      allowNull: false
    },
    health: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    ibr: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    ibrr: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    leu: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    bt: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    birth_state: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    recessive: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    qual: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    conc: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    kc: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    note_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    empty_lbs: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    full_lbs: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    full_kilos: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    empty_kilo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ln_liters: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ln_kilos: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    dimensions: {
      type: DataTypes.STRING,
      allowNull: false
    },
    upd_sire: {
      type: 'BIT',
      allowNull: false
    },
    doc_link1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    doc_link2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    on_handtxt: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: '  '
    },
    on_hand: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((99999))'
    },
    inventory: {
      type: 'BIT',
      allowNull: false,
      defaultValue: '((0))'
    },
    prods_cid: {
      type: DataTypes.UUIDV4,
      allowNull: true
    },
    health_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    inven_type: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
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
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'items',
    timestamps: false,
  });
};
