
const Customer = require('./handlers/customer');
const User = require('./handlers/user');

exports.register = (plugin, options, next) => {

  plugin.route([
    { method: 'GET', path: '/customer/item', config: Customer.get_customer_items },
    { method: 'POST', path: '/user/register', config: User.register_user },
    { method: 'GET', path: '/user/{username}/login', config: User.validate_user }
  ]);

  next();
};

exports.register.attributes = {
  name: 'api'
};
