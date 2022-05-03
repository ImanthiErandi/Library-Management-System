import React, {useState, useEffect} from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AllBooks(){

    const [stat, setBooks] = useState([]);

    useEffect(() =>{
        function getBooks(){
            axios.get("http://localhost:8088/books/")
            .then((res) =>{

            //console.log(res.data);
            setBooks(res.data);
               
           }).catch((err)=>{
               alert(err.message);
        }
    )}
       getBooks();
    },[])

    return (
        <>
            <Navbar/>
            <br></br><br></br>
              
                    <div className="card container" style={{background:"#bfbfbf"}}>&nbsp;&nbsp;&nbsp;  
                        <center><h5 class="text-black">ALL BOOK DETAILS</h5></center>&nbsp;&nbsp;&nbsp;  
                            <div className="card container d-flex justify-content-center" style={{background:"#fff"}}>
                                <table className="table table-sm ">
                                    <thead>
                                        <tr className="text-black">
                                            <th scope="col">The book Subject</th>
                                            <th scope="col">The book Title</th>
                                            <th scope="col">ISBN for the book</th>
                                            <th scope="col">Name of the Author(s) </th>
                                            <th scope="col">The number Of Copies </th>
                                            <th scope="col">Category </th>
                                            <th scope="col">Copyright for the book </th>
                                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stat.map((stat) => {
                                                return (
                                                    <tr >
                                                        <td className="text-center" >{stat.Subject}</td>
                                                        <td className="text-center">{stat.Title}</td>
                                                        <td className="text-center">{stat.ISBN}</td>
                                                        <td className="text-center">{stat.NameAuth}</td>
                                                        <td className="text-center">{stat.NumOfCopy}</td>
                                                        <td className="text-center">{stat.Category}</td>
                                                        <td className="text-center">{stat.Copyright}</td>
                                                        
                                                    </tr>
                                                );
                                                
                                        })}
                                    </tbody>
                                </table>
                            </div>&nbsp;&nbsp;&nbsp;  
                    </div>
              <div className="footer1">
                <Footer/>
            </div>
        </>
        
        
    );
}