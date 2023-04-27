const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const { User, Flash, Comment } = require('../models');

const resolvers = {
    Query: {
      users: async () => {
        return await Users.find();
      },
      user: async (parent, { name }) => {
        return User.findOne({ name });
      },
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id }).populate('flash');
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      flashcards: async (parent, { topic, id }) => {
        const params = {};
  
        if (topic) {
          params.topic = topic;
        }
  
        if (id) {
          params.id = {
            $regex: id
          };
        }
  
        return await Flashcards.find(params).populate('topic');
      },
      flash: async (parent, { _id }) => {
        return await Flash.findById(_id).populate('topic');
      },
      
      comments: async (parent, { flash, user_id }) => {
        const params = {};
  
        if (flash) {
          params.flash = flash;
        }
  
        if (user_id) {
          params.user_id = {
            $regex: user_id
          };
        }
  
        return await comments.find(params).populate('flash');
      },
      comment: async (parent, { _id }) => {
        return await Comment.findById(_id).populate('topic');
      },
      donation: async (parent, { _id }, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate('donation');
  
          return user.donation.id(_id);
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
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
          
        }
};





module.exports = resolvers;