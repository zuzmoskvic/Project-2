const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    // username: {
    //   type: String,
    //   trim: true,
    //   required: false,
    //   unique: true
    // },
    id: {
      type: String
    }, 
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    }, 
    name: {
      type: String
    },     
    location: {
      type: String
    }, 
    company: {
      type: String
    }, 
    hiring: {
      type: String
    },
    position: {
      type: String
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
