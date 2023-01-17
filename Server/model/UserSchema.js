const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {type:String, required: true},
    email: {type:String, required: true},
    phoneNumber: {type:Number, required: true},
    password:  {type:String, required: true},
    confirmPassword:  {type:String, required: true},
    userRole:  {type:String, required: true},
    address:  {type:String, required: true},
    country: {type:String, required: true},
  },
  { collection: 'users' });

module.exports= mongoose.model('Users', UserSchema);
