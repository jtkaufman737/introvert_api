'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var reqMsg = 'This field is required';

var EntrySchema = new Schema({
  submitter: {
    type: String,
    required: reqMsg
  },
  attributedTo: {
    type: String
  },
  body: {
    type: String,
    required: reqMsg
  },
  tags: {
    type: Array
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Entries', EntrySchema);
