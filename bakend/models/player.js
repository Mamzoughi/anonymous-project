const mongoose=require("mongoose");
const playerSchema=mongoose.Schema({
name:String,
number:String,
age:String,
position:String,
img:String,
});
const player=mongoose.model("Player", playerSchema);
module.exports=player;