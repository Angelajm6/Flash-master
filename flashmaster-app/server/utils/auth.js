const jwt = require('jsonwebtoken');

const secret = 'mastersofflash';
const expiration = '4h';

module.exports = {
  signToken: function ({ email, password, _id }) {
    const payload = { email, password, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
