const jwt = require('jsonwebtoken');
//require('dotenv').config();

const secret = 'masteroffflash';
const expiration = '4h';

module.exports = {
  signToken: function ({ email, password, _id }) {
    const payload = { email, password, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
