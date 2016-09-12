import Sequelize from 'sequelize';
import { Customer, Item, Price } from '../connector';

module.exports.get_customer_items = {
	handler: function (request, reply) { 

  Customer
    .findOne({
      include: [{
        model: Price,
        attributes: [ 'items_cid' ]
      }],
      attributes: [ 'cust_key', 'cust_name', 'cid' ],
      where: {
        cust_key: request.query.key
      }
    })
    .then(function(customer) {

      let prices = customer.get().prices
      let items_id_array = []

      prices.forEach(function (data) {
        items_id_array.push( data.get('items_cid') )
      })

      Item
        .findAll({
          include: [{
            model: Price,
            where: { custs_cid: customer.get('cid') },
            attributes: [ 'tier_type','sell','note_1' ]
          }],
          attributes: [ 'item_key', 'id_no', 'short_name', 'descrip' ],
          where: { cid: { $in: items_id_array } }
        })
        .then(function(items){
          return reply({ result: items })
        })
      
    });

    
  }
}