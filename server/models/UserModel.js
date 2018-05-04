const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  name : String,
  email : String,
  usernameAlias : String,
  category : String,
  role : String,
  authorization : {
      accessToken : String,
      refreshToken : String
  }
});

module.exports = mongoose.model('members', MemberSchema);