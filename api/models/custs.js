/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('custs', {
    cid: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      defaultValue: '(newid())',
      primaryKey: true
    },
    cust_key: {
      type: DataTypes.CHAR,
      allowNull: false,
      primaryKey: true
    },
    cust_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    active: {
      type: 'BIT',
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
    cu_city: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cu_state: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cu_zip: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact_fax: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fax: {
      type: DataTypes.STRING,
      allowNull: false
    },
    other: {
      type: DataTypes.STRING,
      allowNull: false
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cntrys_cid: {
      type: DataTypes.UUIDV4,
      allowNull: true
    },
    ship2s_cid: {
      type: DataTypes.UUIDV4,
      allowNull: true
    },
    ship_txt: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    reps_cid: {
      type: DataTypes.UUIDV4,
      allowNull: true
    },
    ops_cid: {
      type: DataTypes.UUIDV4,
      allowNull: true
    },
    sps_cid: {
      type: DataTypes.UUIDV4,
      allowNull: true
    },
    agents_cid: {
      type: DataTypes.UUIDV4,
      allowNull: true
    },
    agent_meth: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    agent_disc_1: {
      type: 'NUMERIC',
      allowNull: false
    },
    agent_disc_2: {
      type: 'NUMERIC',
      allowNull: false
    },
    agent_disc_3: {
      type: 'NUMERIC',
      allowNull: false
    },
    agent_lvl1: {
      type: 'MONEY',
      allowNull: false
    },
    agent_lvl2: {
      type: 'MONEY',
      allowNull: false
    },
    agent_lvl3: {
      type: 'MONEY',
      allowNull: false
    },
    cust_type: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: 'BONUS DOSES'
    },
    bonus_1: {
      type: 'MONEY',
      allowNull: false
    },
    bonus_2: {
      type: 'MONEY',
      allowNull: false
    },
    bonus_3: {
      type: 'MONEY',
      allowNull: false
    },
    calc_meth: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cust_disc_1: {
      type: 'NUMERIC',
      allowNull: false
    },
    cust_disc_2: {
      type: 'NUMERIC',
      allowNull: false
    },
    cust_disc_3: {
      type: 'NUMERIC',
      allowNull: false
    },
    no_griddisc: {
      type: 'BIT',
      allowNull: false
    },
    freight_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tank_pref: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    tank_model: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    tank_note: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tank_seal: {
      type: 'BIT',
      allowNull: false,
      defaultValue: '((0))'
    },
    new_bull: {
      type: 'BIT',
      allowNull: false
    },
    breed_eq: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cust_po: {
      type: DataTypes.STRING,
      allowNull: false
    },
    po_pack: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pmt_terms: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vat_no: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    eu_qual: {
      type: 'BIT',
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
    birth_check: {
      type: 'BIT',
      allowNull: false
    },
    recessive: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    ejac_reqd: {
      type: 'BIT',
      allowNull: false,
      defaultValue: '((0))'
    },
    comment_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    memo_field: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    doc_chgs: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    doc_link_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    doc_link_2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    doc_link_3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    special: {
      type: 'BIT',
      allowNull: false,
      defaultValue: '((0))'
    },
    bill2_cid: {
      type: DataTypes.UUIDV4,
      allowNull: true
    },
    proc_fee1: {
      type: 'BIT',
      allowNull: true
    },
    proc_fee2: {
      type: 'BIT',
      allowNull: true
    },
    pmt_ts_cid: {
      type: DataTypes.UUIDV4,
      allowNull: true
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
      allowNull: false
    }
  }, {
    tableName: 'custs',
    timestamps: false,
  });
};
