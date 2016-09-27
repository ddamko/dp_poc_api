
const Customer = require('./handlers/customer');
const User = require('./handlers/user');

exports.register = (plugin, options, next) => {

  plugin.route([
    { method: 'POST',  path: '/customer/item', config: Customer.get_customer_items },
    { method: 'POST', path: '/user/register', config: User.register_user },
    { method: 'POST', path: '/auth/login', config: User.validate_user },
    { method: 'GET',  path: '/user/{token}/authorize', config: User.authenticate_user }
  ]);

  next();
};

exports.register.attributes = {
  name: 'api'
};
