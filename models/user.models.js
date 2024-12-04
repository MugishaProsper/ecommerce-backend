import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullName : { type : String, required : true, unique : true },
  username : { type : String, required : true, unique : true },
  email : { type : String, required : true, unique : true },
  password : { type : String, required : true },
  role : { type : String, required : true, enum : ['admin', 'customer'], default : 'customer' }
}, { timestamps : true });

const User = mongoose.model('users', userSchema);

export default User