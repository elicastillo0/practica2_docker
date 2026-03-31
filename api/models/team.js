const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: String,
  city: String
}, {
  collection: 'teams',
  versionKey: false
});

module.exports = mongoose.model('Team', TeamSchema);
