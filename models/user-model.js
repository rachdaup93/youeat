const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;
const userSchema = new Schema({
    firstName: { type: String,required: true },
    lastName: { type: String,required: true },
    email: { type: String,required: true },
    username: { type: String,required: true },
    encryptedPassword: { type: String, required: true },
    diet: { type: String, default:"Free Eater"},

    // for Facebook login users
    facebookID: { type: String },

    // determines whether you are an admin or not
    role: {
      type: String,
      enum: [ 'normal', 'admin' ],
      default: 'normal'
    }},
  // optional settings object for this schema
  {
    // adds "createdAt" and "updatedAt" fields to the schema
    timestamps: true
  });

const UserModel = mongoose.model('users', userSchema);


module.exports = UserModel;
