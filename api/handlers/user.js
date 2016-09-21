import Sequelize from 'sequelize';
import { Customer, User } from '../connector';
const bcrypt = require('bcryptjs');
const bcrypt_then = require('bcrypt-then');

module.exports.register_user = {
  handler: function (request, reply) {
    const salt = bcrypt.genSaltSync(15);
    const hash = bcrypt.hashSync(request.query.pass, salt);

    User
      .create({
        username: request.query.username,
        custs_cid: request.query.customer_id,
        password_hash: hash,
        password_salt: salt,
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFudGhvbnkgVmFsaWQgVXNlciIsImlhdCI6MTQyNTQ3MzUzNX0.KA68l60mjiC8EXaC2odnjFwdIDxE__iDu5RwLdN1F2A"
      })
      .then(user => {
        console.log(user);
        return reply({ result: 'Testing...' });
      });
  }
}

module.exports.validate_user = {
  handler: function (request, reply) {

    User
      .findOne({
        attributes: [ 'token', 'custs_cid', 'password_hash' ],
        where: { username: request.params.username }
      })
      .then(user => {

        bcrypt_then.compare(request.query.pass, user.get().password_hash).then(valid => {
          if (valid) {
            return reply({ result: { token: user.get().token, custs_cid: user.get().custs_cid } });
          }
            return reply({ result: valid });
        });

      });
  }
}
