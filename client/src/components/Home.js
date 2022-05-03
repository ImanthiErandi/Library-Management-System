import React from  "react";
import {Link } from "react-router-dom";
import '../Home.css';
import Logo from '../Logo.png';

console.log(Logo);


function Home() {
    return(
    <>

     <div className = "pg">
        <div className="image1">
          <img src={Logo} alt="Logo" width="250px" />
        </div>
        <div className="box2">
            <div className="button"><Link to="/AddBooks"><span>Books Management</span></Link></div>
            <div className="button"><span>Transaction Management</span></div>
            <div className="button"><span>Membership Management</span></div>
            <div className="button"><span>Payment Management</span></div>
       </div>
     </div>
    </>
  )
}

export default Home;