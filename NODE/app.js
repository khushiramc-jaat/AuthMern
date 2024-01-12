const express = require("express");
const app = express();
const mongoose=require("mongoose");
app.use(express.json());
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//const cookiParser=require("cookie-parser");

const JWT_SECRET ="hvdvay6ert72839289fgdfgjhsgfsdhdfhjdfh"

//app.use(cookiParser());
app.use(cors({
    origin:"http://localhost:3000",
}));

const mongoUrl ="mongodb+srv://khushiramjat348:iuj%40348@cluster0.snz5l1l.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=> {console.log("connected to database");
})
.catch((e)=> console.log(e));

require("./userDetails");

const User = mongoose.model("UserInfo");

app.post("/register",async(req,res)=>{

    const {fname,email,password,cpassword} = req.body;
    const encryptedPassword =await bcrypt.hash(password,10);
    try {
        const oldUser = User.findOne({email});
        if(oldUser==email){
            return res.send({error:"User Exists"});
        }
        await User.create({
            fname,
            email,
            password:encryptedPassword ,
            cpassword:encryptedPassword ,

        });
        
        res.send({status:201})
    
        
    } catch (error) {
        res.send({status:"error"})
    }
});
app.post("/signup",async(req,res)=>{

    const {fname,email,password} = req.body;
    const encryptedPassword =await bcrypt.hash(password,10);
    try {
        const oldUser = User.findOne({email});
        if(oldUser==email){
            return res.send({error:"User Exists"});
        }
        await User.create({
            fname,
            email,
            password:encryptedPassword ,

        });
        
        res.send({status:201})
    
        
    } catch (error) {
        res.send({status:"error"})
    }
});

app.post("/login-user",async (req,res) =>{
    const {email,password}= req.body;
    const user = await User.findOne({ email });
    if(!user){
        return res.json({error:"User not found"});
    }
    if(await bcrypt.compare(password , user.password)){
        const token = jwt.sign({} ,JWT_SECRET,{
        });
       
        if(res.status(201)){
            return res.json({status:201,data:token});
        }else{
            return res.json({error:"error"});
        }
    }
    res.json({status:"error", error:"Invalid Password"})


})

app.post("/userData",async(req,res)=>{
    const {token} = req.body;
    try {
        const user = jwt.verify(token,JWT_SECRET);
        const useremail = user.email;
        User.findOne({email: useremail})
        .then((data) =>{
            res.send({status:"ok",data:data});
        })
        .catch((error) =>{
            res.send({satus:"error",data:error});
        });
    } catch (error) {
        
    }
})





app.listen(5000, ()=>{
    console.log("server started");
})



