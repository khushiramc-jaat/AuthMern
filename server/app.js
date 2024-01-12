const express = require("express");
const app=express();
require("./db/conn");
const router = require("./routes/router");
const cors= require("cors");
const port = 8009;


//app.get("/",(req,res)=>{
  //  res.status(201).json("server created")
//});

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port,()=>{
    console.log(`server start at port no:${port}`);
})

                  <div className='form_input'>
                    <label htmlFor="mobileNo">mobileNo</label>
                    <input type="text" onChange={setVal} value={inpval.mobileNo}
                    name="mobileNo" id="mobileNo" placeholder='Enter Your mobile number'/>
                </div>
