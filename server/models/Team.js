const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name : String,
  idea : String,
  members : Array,
  status : String
});

module.exports = mongoose.model('teams', TeamSchema);