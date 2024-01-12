const mongoose = require("mongoose");


const DB="mongodb://127.0.0.1:27017/Authusers"


mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log("some error is present");
})
/*<div className='form_input'>
                    <label htmlFor="password">Password</label>
                    <div className="two">
                        <input type={!passShow ? "password":"text"} onChange={setVal}value={inpval.password}
                        name="password" id="password" placeholder='Enter Your password'/>
                        <div className="showpass" onClick={()=>setPassShow(!passShow)}>
                            {!passShow ? "Show" : "Hide"}
                        </div>
                    </div>
                 </div>

                 <div className='form_input'>
                    <label htmlFor="password"> Confirm Password</label>
                    <div className="two">
                        <input type={!cpassShow ? "password":"text"} value={inpval.cpassword}
                        onChange={setVal}
                        name="cpassword" id="cpassword" placeholder='Enter Your confirm password'/>
                        <div className="showpass" onClick={()=>setcPassShow(!cpassShow)}>
                            {!cpassShow ? "Show" : "Hide"}
                        </div>
                    </div>
                 </div>*/