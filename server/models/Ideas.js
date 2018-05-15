const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IdeasSchema = new Schema({
  title: String,
  category: String,
  description: String,
  status: String,
  userId: Number,
  createdAt: {
    type: Date,
    default: new Date()
  },
  isArchived: Boolean
});

module.exports = mongoose.model('ideas', IdeasSchema);
