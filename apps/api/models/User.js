const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  name: { type: String, required: true },
  avatar: { type: String },
});

module.exports = mongoose.model('User', UserSchema)
