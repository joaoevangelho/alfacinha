'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  favourites: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Comments'
      }
    ]
  }
});

module.exports = mongoose.model('User', schema);
