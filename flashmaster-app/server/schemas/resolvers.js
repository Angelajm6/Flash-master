const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const { User } = require('../models/user');

const resolvers = {
    Query: {
      users: async () => {
        return await Users.find();
      },
      user: async (parent, context) => {
        if (context.user) {
         return await user.find();
        }
  
        throw new AuthenticationError('Not logged in');
      },

    },
    Mutation: {
        addUser: async (parent, {name, email, password}) => {
            const user = await User.create(name, email, password);
            const token = signToken(user);

            return { token, user };
          },
        updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw new AuthenticationError('Not logged in');
          },
          
        }
};





module.exports = resolvers;