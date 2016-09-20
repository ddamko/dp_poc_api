import Sequelize from 'sequelize';
import { Customer, Item, Price } from '../connector';

module.exports.get_customer_items = {
  auth: 'jwt',
  handler: function (request, reply) {

  Customer
    .findOne({
      include: [{
        model: Price,
        attributes: [ 'items_cid' ]
      }],
      attributes: [ 'cust_key', 'cust_name', 'cid' ],
      where: {
        cid: request.query.id
      }
    })
    .then(customer => {

      let prices = customer.prices;
      let items_id_array = [];

      prices.forEach(data => {
        items_id_array.push( data.items_cid );
      });

      Item
        .findAll({
          include: [{
            model: Price,
            where: { custs_cid: customer.cid },
            attributes: [ 'sell' ]
          }],
          attributes: [ 'item_key', 'id_no', 'short_name', 'descrip' ],
          where: { cid: { $in: items_id_array } }
        })
        .then(items => {
          return reply({ result: items });
        });
    });
  }
}
