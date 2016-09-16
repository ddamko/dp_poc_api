import Sequelize from 'sequelize';

const db = new Sequelize('dp_poc', 'ddamko', 'Proverbs39!', {
  host: '10.0.0.22',
  dialect: 'mssql',
  pool: {
    max: 5,
    min: 1,
    idle: 6000,
  },
});

const Customer = db.import(__dirname + "/models/custs");
const Item = db.import(__dirname + "/models/items");
const Price = db.import(__dirname + "/models/prices");
const User = db.import(__dirname + "/models/user");

Customer.hasMany(Price, { foreignKey: 'custs_cid' });
Item.hasMany(Price, { foreignKey: 'items_cid' });
User.hasOne(Customer, { foreignKey: 'cid'});

export { Customer, Item, Price, User };
