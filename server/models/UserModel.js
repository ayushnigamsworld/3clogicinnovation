const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const MemberSchema = new mongoose.Schema({
  userId: String,
  name : String,
  email : String,
  usernameAlias : String,
  category : String,
  image: String,
  role : {
    type: String,
    default: 'ROLE_MEMBER'
  }
});

module.exports = mongoose.model('members', MemberSchema);
