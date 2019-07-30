'use strict';

var mongoose = require('mongoose');
Entry = mongoose.model('Entries');

exports.list_all_entries = (res, req) => {
  Entry.find({}, (err, entry) => {
    if(err) {
      res.send(err)
    }
    
    res.json(entryListController)
  })
}
