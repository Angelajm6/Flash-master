const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const { User, Flash, Comment } = require('../models');

const resolvers = {
    Query: {
      users: async () => {
        return await User.find();
      },
      user: async (parent, context) => {
        if (context.user) {
         return await User.find();
        }
      user: async (parent, { name }) => {
        return User.findOne({ name });
      },
      user: async (parent, { name }) => {
        return User.findOne({ name });
      },

      // --Flagged for possible deletion: Throws error message.--

      // user: async (parent, context) => {
      //   if (context.user) {
      //    return await User.find();
      //   }
  
      //   throw new AuthenticationError('Not logged in');
      // },


      
      // me: async (parent, args, context) => {
      //   if (context.user) {
      //     return User.findOne({ _id: context.user._id }).populate('flash');
      //   }
      //   throw new AuthenticationError('You need to be logged in!');
      // },

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