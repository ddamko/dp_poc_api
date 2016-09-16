import Sequelize from 'sequelize';
import { Customer, User } from '../connector';
let bcrypt = require('bcrypt');

module.exports.register_user = {
  handler: function (request, reply) {
    const saltRounds = 10;

    var password = {};

    bcrypt.genSalt(saltRounds, function(error, salt) {
      bcrypt.hash(request.query.pass, salt, function(error, hash) {
        password.hash = hash;
        password.salt = salt;
        return password;
      });
    });

    console.log(password);

    return reply({ result: 'Password Hashed!' })

  }
}
