module.exports = app => {
  var entryList = require('../controllers/entryListController');

  app.route('/entries')
    .get(entryList.list_all_entries)
    .post(entryList.create_an_entry)

  app.route('/entries/:entryId')
    .get(entryList.read_entry)
    .put(entryList.update_entry)
    .delete(entryList.delete_entry)  
}
