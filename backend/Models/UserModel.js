const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    email : {
        type:String,
        required:[true,"Your email address is required"],
        unique:true,
    },
    username: {
        type: String,
        required: [true, "Your username is required"],
      },
      password: {
        type: String,
        required: [true, "Your password is required"],
      },
      createdAt: {
        type: Date,
        default: ()=>new Date(),
      },
});

userSchema.pre("save", async function(next){
    this.password= await bcrypt.hash(this.password,12);
    next();
});

module.exports = mongoose.model("User",userSchema);
