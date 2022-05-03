import React, {useState, useEffect} from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AllAuthors(){

    const [stat, setAuthors] = useState([]);

    useEffect(() =>{
        function getAuthors(){
            axios.get("http://localhost:8088/authors/")
            .then((res) =>{

            //console.log(res.data);
            setAuthors(res.data);
               
           }).catch((err)=>{
               alert(err.message);
        }
    )}
       getAuthors();
    },[])

    return (
        <>
            <Navbar/>
            <br></br><br></br>
              
                    <div className="card container" style={{background:"#ffffcc"}}>&nbsp;&nbsp;&nbsp;  
                        <center><h5 class="text-black">AUTHOR DETAILS</h5></center>&nbsp;&nbsp;&nbsp;  
                            <div className="card container d-flex justify-content-center" style={{background:"#fff"}}>
                                <table className="table table-sm ">
                                    <thead>
                                        <tr className="text-black">
                                            <th scope="col">Author(s) Name</th>
                                            <th scope="col">The number Of Copies</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">The number Of Pages</th>
                                            <th scope="col">Book Title </th>
                                            <th scope="col">Year of Publication</th>
                                            <th scope="col">Edition</th>
                                            <th scope="col">The Name of the Publisher</th>
                                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stat.map((stat) => {
                                                return (
                                                    <tr >
                                                        <td class="text-center">{stat.NameAuth}</td>
                                                        <td class="text-center">{stat.NumOfCopy}</td>
                                                        <td class="text-center">{stat.Category}</td>
                                                        <td class="text-center" >{stat.NumOfPages}</td>
                                                        <td class="text-center">{stat.Title}</td>
                                                        <td class="text-center">{stat.PublicationYear}</td>
                                                        <td class="text-center">{stat.Edition}</td>
                                                        <td class="text-center">{stat.PublisherName}</td>
                                                    </tr>
                                                ); 
                                        })}
                                    </tbody>
                                </table>
                            </div>&nbsp;&nbsp;&nbsp;  
                    </div>
              <div className="footer4">
                <Footer/>
            </div>
        </>
        
        
    );
}