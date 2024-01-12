const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt =require("bcrypt");


const userSchema = new mongoose.Schema({
    fname:{
        type : String ,
        require : true,
        trim : true
    },
    email:{
        type : String ,
        require : true,
        unique : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("not valid email");
            }
        }
    },
    password:{
        type : String ,
        require : true,
        minlength: 6
    },
    cpassword:{
        type : String ,
        require : true,
        minlength: 6
    },
    tokens:[
        {
            token:{
                type: String,
                required: true,
            }
        }
    ]
});

//creating model

const userdb = new mongoose.model("users",userSchema);

//hash password

userSchema.pre("save",async function(next){
    this.password = await bcrypt.hash(this.password , 12);
    this.cpassword = await bcrypt.hash(this.cpassword , 12);
    
    next()
})

module.exports = userdb;