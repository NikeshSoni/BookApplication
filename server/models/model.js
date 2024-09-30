const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  bookName: String,
  category: String,
  author:String,
  rentPerDay: Number,
});

module.exports = mongoose.model('User', UserSchema);
