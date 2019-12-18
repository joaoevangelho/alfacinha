'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  location: {
    type: String
  },
  latitude: {
    type: String
  },
  longitude: {
    type: String
  },
  averageCost: {
    type: String
  },
  rating: {
    type: String
  },
  image: {
    type: String
  },
  comments: {
    type: mongoose.Types.ObjectId,
    ref: 'Comments'
  }
});

module.exports = mongoose.model('Restaurants', schema);

