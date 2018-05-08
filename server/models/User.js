const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, required: true},
  surname: {type: String, default: "Residencia Canina"},
  adress: {type: String, required: true},
  pc: {type: String, required: true},
  email:{type: String, required: true},
  password: String,
  pic: {type: String, default:"../public/images/imgdefault.jpg"},
  dogs:[String],
  favoriteBuddy: [{type: Schema.Types.ObjectId, ref: "User"},],
  dogBuddy: {type: Boolean, default: false},
  infoBuddy: String,
  rateBuddy: Number,
  petsBuddy: String,
  houseBuddy: String,
  zonesBuddy: String,
  calendarId: String,


}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
