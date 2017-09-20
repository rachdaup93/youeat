const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;
const userSchema = new Schema({
    firstName: { type: String,required: true },
    lastName: { type: String,required: true },
    email: { type: String,required: true },
    username: { type: String,required: true },
    encryptedPassword: { type: String, required: true },
    diet: { type: String, required: true, default:"Free Eater"},
    profile: {
      image: {type: String, required: true, default: "free_eater.png"},
      summary: {type: String, default:""},
      hobbies: {type: String, default:""}
    },
    // for Facebook login users
    facebookID: { type: String },

    // determines whether you are an admin or not
    role: {
      type: String,
      enum: [ 'normal', 'admin', 'editor' ],
      default: 'normal'
    }},
  // optional settings object for this schema
  {
    // adds "createdAt" and "updatedAt" fields to the schema
    timestamps: true
  });

const UserModel = mongoose.model('users', userSchema);


module.exports = UserModel;
