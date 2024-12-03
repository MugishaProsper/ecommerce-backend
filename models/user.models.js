import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullName : { type : String, required : true, unique : true },
  username : { type : String, required : true, unique : true },
  email : { type : String, required : true, unique : true },
  password : { type : String, required : true }
});

const verification_codeSchema = mongoose.Schema({
  user : { type : mongoose.Schema.Types.ObjectId, ref : 'User', required : true },
  code : { type : String, required : true }
})

const User = mongoose.model('users', userSchema);

export default User