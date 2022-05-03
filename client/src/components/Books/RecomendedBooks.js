import React, {useState, useEffect} from "react";
import axios from "axios";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../../book.css';

export default function RecomendedBooks() {

    const [filteredData,setFilteredData] = useState([]);
    const [allData,setAllData] = useState([]);

    useEffect(() =>{
        function getRBooks(){
            axios.get("http://localhost:8088/recommend/view")
            .then((res) =>{

            //console.log(res.data);
            setAllData(res.data);
            setFilteredData(res.data);

           }).catch((err)=>{
               alert(err.message);
        }
    )}
       getRBooks();
    },[])

    const handleSearch = (event) =>{
       
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);

        result = allData.filter((data) => {
             return data.requestDate.search(value) !== -1;
        });
        setFilteredData(result);
    }

    const deleteRecomended=(bookName) =>{
        axios.delete(`http://localhost:8088/recommend/delete/${bookName}`).then(()=>{
          alert("Reject Recommendation Successfully");
        window.location.reload(false);
        }).catch((e) => {
            alert(e.message);
      })
    }

       return(    
        <> 
       <Navbar/>
            <br></br><br></br>
                    <div className="card container" style={{background:"#ffffcc"}}>&nbsp;&nbsp;&nbsp;  
                        <center><h5 class="text-black">RECOMMENDED BOOKS </h5></center>&nbsp;&nbsp;&nbsp; 

                        <div>
                            <label class="text-black">Search:</label>
                                <input type="text" onChange={(event) =>handleSearch(event)} />
                        </div>&nbsp;&nbsp;&nbsp; 

                        <div className="card container d-flex justify-content-center" style={{background:"#fff"}}>
                            <table className="table table-sm ">
                                <thead>
                                    <tr className="text-black">
                                        <th scope="col">Name of the Author(s) </th>
                                        <th scope="col">Book Name</th>
                                        <th scope="col">Subject</th>
                                        <th scope="col">Publications</th>
                                        <th scope="col">Publication Year </th>
                                        <th scope="col">Edition</th>
                                        <th scope="col">Request Date</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredData.map((value)=>{
                                        return(
                                            <tr> 
                                                <td className="text-center" >{value.authorName } </td> 
                                                <td className="text-center" >{value.bookName}</td> 
                                                <td className="text-center" >{value.subject}</td> 
                                                <td className="text-center" >{value.publications}</td> 
                                                <td className="text-center" >{value.pYear}</td> 
                                                <td className="text-center" >{value.edition}</td> 
                                                <td className="text-center" >{value.requestDate}</td>
                                                <td> <IconButton aria-label="delete" onClick={() => deleteRecomended(value.bookName)}>
                                                      <DeleteIcon fontSize="small" />
                                                    </IconButton>
                                                </td> 
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>&nbsp;&nbsp;&nbsp; 
            </div>
        <div className='footer5'>
    <Footer/>
    </div>
        </>
    )
}