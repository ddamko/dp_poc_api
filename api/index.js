const Home = require('./handlers/home');
const Customer = require('./handlers/customer_v2');

exports.register = (plugin, options, next) => {

  plugin.route([
    { method: 'GET', path: '/', config: Home.hello },
    { method: 'GET', path: '/restricted', config: Home.restricted },
    { method: 'GET', path: '/{path*}', config: Home.notFound },
    { method: 'GET', path: '/customer/item', config: Customer.get_customer_items }
  ]);

  next();
};

exports.register.attributes = {
  name: 'api'
};