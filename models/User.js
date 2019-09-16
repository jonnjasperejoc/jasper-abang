const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
      fname: {
            type: String,
            required: true
      },
      lname: {
            type: String,
            required: true
      },
      email: {
            type: String,
            required: true,
            unique: true
      },
      pword: {
            type: String,
            required: true
      },
      date: {
          type: Date,
          default: Date.now
      }
  });

module.exports = User = mongoose.model('users', UserSchema);