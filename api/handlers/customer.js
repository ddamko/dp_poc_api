import { Customer, Country, Item, Price } from '../connector';

module.exports.get_customer_items = {
	handler: function (request, reply) { 

  Customer
    .findOne({
      attributes: [ 'cntrys_cid' ],
      where: { cust_key: request.query.key }
    })
    .then(function(customer_key) {
      
      Price
        .findAll({
          where: { cntrys_cid: customer_key.get().cntrys_cid }
        })
        .then(function(prices) {

          console.log(prices)
          
          // Item
          //   .findAll({
          //     where: { cid: prices.get().items_cid  }
          //   })
          //   .then(function(items_with_prices){
          //     return reply({ result: items_with_prices })
          //   })

          return reply({ result: "Look at the concole." })
        })
    });
  }
}