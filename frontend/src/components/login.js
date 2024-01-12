import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./mix.css"

const Login = () => {

    const [passShow,setPassShow] = useState(false);

    const [inpval,setInpval] = useState({
        email: "",
        password: ""

    });
    console.log(inpval);

    const setVal = (e)=>{
        //console.log(e.target.value);
        const {name,value}=e.target;
         setInpval(()=>{
            return{
                ...inpval,
                [name]:value
            }

         })
    };

    const loginuser = async(e) =>{
        e.preventDefault();

        const {email, password} = inpval;
        if(email ==""){
            alert("please enter your email");
        }else if(!email.includes("@")){
            alert("enter valid email");
        }else if(password==""){
            alert("enter your pasword");
        }
        else if(password.length < 6){
            alert("confirm password must be 6 char")
        }
        
        else{
           // console.log("user login user succesful done");
           fetch("http://localhost:5000/login-user",{
                method:"POST",
                crossDomain:true,
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json",
                    "Access-Control-Allow-origin":"*",
                },
               
                body:JSON.stringify({
                    email,
                    password,
                }),
            })
            .then((res)=>res.json())
            .then((data)=>{
                //console.log(data,"userRegister");
                if(data.status==201){
                    alert("user login successful");
                    window.localStorage.setItem("token",data.data);
                    window.localStorage.setItem("loggedIn",true);
                    
                    window.location.href="./userDetails";
                    //setInpval({...inpval,email:"",password:""})
                }
            });
        }
    }

  return (
    <>
    <section>
        <div className="form_data">
            <div className="form_heading">
                <h1>Welcome Back, Log In</h1>
                <p>Hi, we are you glad you are back. Please login</p>
            </div>

            <form>
                <div className='form_input'>
                    <label htmlFor="email">Email</label>
                    <input type="email"  onChange={setVal} value={inpval.email}
                    name="email"   id="email" placeholder='Enter Your Email Address'/>
                </div>
                <div className='form_input'>
                    <label htmlFor="password">Password</label>
                    <div className="two">
                        <input type={!passShow ? "password":"text"} onChange={setVal} value={inpval.password}  name="password"  id="password" placeholder='Enter Your password'/>
                        <div className="showpass" onClick={()=>setPassShow(!passShow)}>
                            {!passShow ? "Show" : "Hide"}
                        </div>
                    </div>
                    
                </div>
                <button className='btn' onClick={loginuser}>Login</button>
                <p>Don't have an Account? < NavLink to="/register">sign Up</ NavLink></p>
            </form>
        </div>
    </section>
    </>
  )
}

export default Login
