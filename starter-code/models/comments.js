'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  image: {
    type: String
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Comments', schema);