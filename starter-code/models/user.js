"use strict";

const mongoose = require("mongoose");

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
  aboutMe: {
    type: String,
    minlength: 1,
    maxlenght: 140
  }

  /*  image: [{
    type: mongoose.Types.ObjectId,
    ref: 'Image'
  }] */
}, {
  timestamps: {
    createdAt: "creationDate",
    updatedAt: "updateDate"
  }
});

module.exports = mongoose.model("User", schema);
