const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

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
      flashcard: async (parent, { topic, id }) => {
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

    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
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