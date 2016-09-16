import Sequelize from 'sequelize';
import { Customer, User } from '../connector';
let bcrypt = require('bcryptjs');

module.exports.register_user = {
  handler: function (request, reply) {
    const salt = bcrypt.genSaltSync(15);
    const hash = bcrypt.hashSync(request.query.pass, salt);

    User
      .create({
        username: request.query.username,
        custs_cid: request.query.customer_id,
        password_hash: hash,
        password_salt: salt
      })
      .then(function(user) {
        console.log(user)
        return reply({ result: 'Testing..' })
      });
  }
}
