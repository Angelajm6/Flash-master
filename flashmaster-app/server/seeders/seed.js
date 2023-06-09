const db = require('../config/connection');
const { User, Comment, Flash } = require('../models');
const userSeeds = require('./userSeeds.json');
const flashSeeds = require('./flashdeck.json');
const commentSeeds = require('./commentSeeds.json');

db.once('open', async () => {
  try {
    // clean database
    await User.deleteMany({});
    await Comment.deleteMany({});
    await Flash.deleteMany({});

    // bulk create each model
    const newUser = await User.insertMany(userSeeds);
    const newFlash = await Flash.insertMany(flashSeeds);
    const newComment = await Comment.insertMany(commentSeeds);

    console.log(newUser);
    console.log(newFlash);
    console.log(newComment);
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
