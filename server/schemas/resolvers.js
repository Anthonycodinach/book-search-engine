const { AuthenticationError } = require('apollo-server-express');
const { User , Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getSingleUser: async () => {
      return await User.findOne({
        $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
      });
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (user, body) => {
      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: user._id },
          { $addToSet: { savedBooks: body } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    deleteBook: async (user, params) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { savedBooks: { _id: params._id } } },
        { new: true }
      );
      if (!updatedUser) {
        return console.log("Couldn't find user with this id!")
      }
      return updatedUser;
    },
  },
};

module.exports = resolvers;
