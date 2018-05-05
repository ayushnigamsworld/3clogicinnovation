const mongoose = require('mongoose');

const IdeasSchema = new mongoose.Schema({
  userId : String,
  idea : 
        {
          title : String,
          category :  String,
          description : String
        }
});

module.exports = mongoose.model('ideas', IdeasSchema);