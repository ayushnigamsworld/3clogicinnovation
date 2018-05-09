const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const MemberSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  userId: String,
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