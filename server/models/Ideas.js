const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IdeasSchema = new Schema({
  
  user : String,
  idea : 
        {
          title : String,
          category :  String,
          description : String
        }
});

module.exports = mongoose.model('ideas', IdeasSchema);