const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  discordId: { type: String, unique: true },
  username: String,
  // Add any other fields you want to store for a user
});

const User = mongoose.model('User', userSchema);

module.exports = User;
