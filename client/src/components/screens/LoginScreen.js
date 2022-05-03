import {useState} from "react";
import {Link , useNavigate} from "react-router-dom";
import "./Slogin.css";
import Logo from '../../Logo.png';

import config from "../../config/config.json";

const LoginScreen = ()=>{

    const history = useNavigate();

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [error] = useState("");

 

    const loginHandler = async (e)=>{
        e.preventDefault();

  

        try {

          if(email === config.admin1.email && password === config.admin1.password){
            history("/Home");  
           }

           else if(email === config.admin2.email && password === config.admin2.password){
            history("/Home");  
           }

           else 
                alert("Invalide credentials")
            

        } catch (error) {
           console.log(error)
        }
    }

    const  showPassword = () => {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }


    return(
        <div className=" bg0">
           <div className="background" style={{opacity:"0.8" , marginLeft:"550px" }} >
           <form onSubmit={loginHandler} >
              <div className=" image2"> 
                <center>
                  <img src={Logo} alt="Logo" width="200px"/>
                </center>
              </div>
                {error && <span className="badge bg-warning">{error}</span>}     
                <div className="form-group">
                    <input type="email" style={{width:"350px"}} className="form-control" placeholder="📧 Email" required="required" pattern="[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}"
                    value = {email} onChange = {(e)=>setEmail(e.target.value)}
                    />
                </div><br/>
                <div className="form-group">
                    <input type="password" style={{width:"350px"}} className="form-control" placeholder="🔐 Password" required="required" id="myInput"
                    value = {password} onChange = {(e)=>setPassword(e.target.value)}
                    />
                    <br/>
                    <label className="float-left form-check-label"><input type="checkbox" onClick={showPassword} /> Show Password</label>
                </div><br/>
                <div className="form-group">

                <button type="submit" className="btn btn-primary btn-block"><i aria-hidden="true" onsubmit="/Home"></i> Log in</button>
                </div><br/>
                <div className="clearfix">
                   <Link to="/forgotpassword" className="float-right" style={{textDecoration:"none", float:"left"}}><b> Forgot Password 🥺?</b></Link><br/><br/>
                   
                </div>        
            </form>
           
           </div>
        </div>
    )
}
export default LoginScreen;