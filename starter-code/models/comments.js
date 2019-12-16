'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      maxlength: 140,
      minlength: 1
    },
    image: {
      type: String
    },
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    restaurant: {
      type: String
    }
    // restaurant: {
    //   type: mongoose.Types.ObjectId,
    //   required: true,
    //   ref: 'Restaurants'
    // }
  },
  {
    timestamps: {
      createdAt: 'creationDate',
      updatedAt: 'updateDate'
    }
  }
);

module.exports = mongoose.model('Comments', schema);
