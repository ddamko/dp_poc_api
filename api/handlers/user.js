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

    console.log(request.payload);

    User
      .findOne({
        attributes: [ 'id', 'token', 'custs_cid', 'username', 'email', 'first_name', 'last_name', 'password_hash' ],
        where: { username: request.payload.username }
      })
      .then(user => {

        if (user === null) {
          return reply({ message: 'INVALID REQUEST' }).code(401);
        }

        bcrypt_then.compare(request.payload.password, user.get().password_hash).then(valid => {
          if (valid) {
            return reply({
              data: {
                msg: 'LOGIN SUCCESSFUL',
              },
              meta: {
                id: user.get().id,
                token: user.get().token,
                expires: '2020-01-01',
                profile: {
                  firstName: user.get().first_name,
                  lastName: user.get().last_name,
                },
              },
            }).code(200);
          }
            return reply({ message: 'LOGIN FAILED' }).code(401);
        });

      });
  }
}

module.exports.authenticate_user = {
  handler: function (request, reply) {

    User
      .findOne({
        attributes: [ 'token' ],
        where: { token: request.params.token }
      })
      .then(token => {

        if (token === null) {
          return reply(false);
        } else {
          return reply(true);
        }

      });
  }
}
