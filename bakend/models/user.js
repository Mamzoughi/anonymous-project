const mongoose= require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const userSchema =mongoose.Schema({
 firstName:{ type: String, required: true },
 lastName:{ type: String, required: true },
 email: { type: String, required: true , unique:true},
 pwd:{ type: String, required: true },
 img:String,
});
const user=mongoose.model("User", userSchema );
userSchema.plugin(uniqueValidator);
module.exports=user;