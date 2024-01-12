const mongoose = require("mongoose");
//const jwt =require("jsonwebtoken");
//const keysecret ="khushiramkomallokeshchoudharykekri";

const UserDetailsSchema = new mongoose.Schema(
    {
        fname:{
            type : String ,
            /*require : true,
            trim : true*/
        },
        email:{
            type : String ,
            /*require : true,
            unique : true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("not valid email");
                }
            }*/
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
    },
    {
        collection: "UserInfo",
    }
);

//token generate
/*UserDetailsSchema.method.generateAuthtoken = async function(){
    try {
        let token=jwt.sign({_id:this._id,keysecret});
        expiresIn:"id"
    } catch (error) {
        
    }

}*/


mongoose.model("UserInfo",UserDetailsSchema);