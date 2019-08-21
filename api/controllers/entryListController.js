'use strict';

const mongoose = require('mongoose');
const Entry = mongoose.model('Entries');

// controller methods as exports
exports.list_all_entries = function(res, req) {
  Entry.find({}, function(err, entry) {
    if(err) {
      res.send(err)
    }

    res.json(entry)
  })

}

exports.create_an_entry = function(res, req) {
  var newTask = new Entry(req.body);

  newTask.save(function(err, entry) {
    if(err) {
      res.send(err)
    }

    res.json(entry)
  })
}

exports.read_entry = function(res, req) {
  Entry.findById(req.params.entryId, function(err, entry) {
    if(err) {
      res.send(err)
    }

    res.json(entry)
  })
}

exports.update_entry = function(res, req) {
  Entry.findOneAndUpdate(
    { _id: req.params.entryId },
    req.body,
    { new: true },
    function(err, entry) {
      if(err) {
        res.send(err)
      }
      res.json(entry)
    }
  )
}

exports.delete_entry = function(res, req) {
  Entry.remove({
    _id: req.params.entryId,
  },
  function(err, entry) {
    if(err) {
      res.send(err)
    }

    res.json(entry)
  }
 )
}
