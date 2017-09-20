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
      image: {type: String, required: true, default: "/free_eater.png"},
      summary: {type: String, default:""},
      hobbies: {type: String, default:""}
    },
    breakfast:{
      sunday:{type:String, default: ""},
      monday:{type:String, default: ""},
      tuesday:{type:String, default: ""},
      wednesday:{type:String, default: ""},
      thursday:{type:String, default: ""},
      friday:{type:String, default: ""},
      saturday:{type:String, default: ""}
    },
    lunch:{
      sunday:{type:String, default: ""},
      monday:{type:String, default: ""},
      tuesday:{type:String, default: ""},
      wednesday:{type:String, default: ""},
      thursday:{type:String, default: ""},
      friday:{type:String, default: ""},
      saturday:{type:String, default: ""}
    },
    dinner:{
      sunday:{type:String, default: ""},
      monday:{type:String, default: ""},
      tuesday:{type:String, default: ""},
      wednesday:{type:String, default: ""},
      thursday:{type:String, default: ""},
      friday:{type:String, default: ""},
      saturday:{type:String, default: ""}
    },
    dessert:{
      sunday:{type:String, default: ""},
      monday:{type:String, default: ""},
      tuesday:{type:String, default: ""},
      wednesday:{type:String, default: ""},
      thursday:{type:String, default: ""},
      friday:{type:String, default: ""},
      saturday:{type:String, default: ""}
    },

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
