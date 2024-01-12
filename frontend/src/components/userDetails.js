import React,{Component} from "react";

export default class userDetails extends Component{
    componentDidMount(){
        fetch("http://localhost:5000/userData",{
                method:"POST",
                crossDomain:true,
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json",
                    "Access-Control-Allow-origin":"*",
                },
               
                body:JSON.stringify({
                    token:window.localStorage.getItem("token"),
                }),
            }).then((res)=>res.json())
            .then((data)=>{
                console.log(data,"userData");
                /*if(data.status==201){
                    alert("user registration done");
                    setInpval({...inpval,fname:"",email:"",password:"",cpassword:""})
                }*/
            });
    }

    logOut = ()=>{
        window.localStorage.clear();
        window.location.href = "./login";
    }
    render(){
        return(
            <section>
            <div className="log_button" > 
                Name<h1>khushiram1</h1>
                Email<h1>khushiram1@gmail.com</h1><br/>
                <button onClick={this.logOut}className='btn btn-primary'> Log Out</button>
            </div>
            </section>
        )
    }
}