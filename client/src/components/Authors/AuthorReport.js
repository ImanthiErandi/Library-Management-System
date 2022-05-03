import React, {useState, useEffect} from "react";
import axios from "axios";
import jspdf from "jspdf";
import "jspdf-autotable"
import Navbar from "./Navbar";

export default function AuthorReport() {

    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState([]);

 
    useEffect(() => {
            function getAuthors(){
                axios("http://localhost:8088/authors/")
                    .then(res => {
                        //console.log(response.data)
                        setAllData(res.data);
                        setFilteredData(res.data);
                    }).catch(error => {
                        alert(error.message);
                    })
            }
            getAuthors();
    }, [])

    const handleSearch = (event) =>{
    
        let value = event.target.value;
        let result = [];
        console.log(value);

            result = allData.filter((data) => {
                return data.NameAuth.search(value) !== -1;
            });
                setFilteredData(result);
            }

        //generate report pdf code

        const generatePDF = tickets => {

            const doc = new jspdf();
            const tableColumn = ["Author(s) Name", "Book Title", "Year of Publication", "Category","Edition","The Name of the Publisher"];
            const tableRows = [];
        
            tickets.map(ticket => {
                const ticketData = [
                    ticket.NameAuth,
                    ticket.Title,
                    ticket.PublicationYear,
                    ticket.Category,
                    ticket.Edition,
                    ticket.PublisherName
                
                ];
                tableRows.push(ticketData);
            })
            doc.text("Author Details Report", 14, 15).setFontSize(12);
            
            // right down width height
            doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
            doc.save('Author_Details_report_.pdf');
        };

    return(    
        <> 
            <Navbar/><br/> 
                <div className='container-height'>
                    <div className='col-lg-8 col-md m-auto'>
                        <div className='container'>
                            <div className="row g-3"> 
                                <div style={{background:"#bfbfbf"}}>&nbsp;&nbsp;&nbsp; 
                        
                                    <h1 className="text-black h1"> Author Detail Report </h1><br/>
                                
                                    <label className="text-black">Search:</label>
                                        <input type="text" onChange={(event) =>handleSearch(event)} />
                                    <br/><br/>
                                
                                    <div style={{background:"#fff"}} className="card container d-flex justify-content-center">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th >Author(s) Name</th>
                                                    <th >Book Title </th>
                                                    <th >Year of Publication</th>
                                                    <th >Category</th>
                                                    <th >Edition</th>
                                                    <th >The Name of the Publisher</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {filteredData.map((value)=>{
                                                    return(
                                                        <tr> 
                                                            <td>{value.NameAuth}</td>
                                                            <td>{value.Title}</td> 
                                                            <td>{value.PublicationYear}</td>
                                                            <td>{value.Category}</td>
                                                            <td>{value.Edition}</td>
                                                            <td>{value.PublisherName}</td>
                                                        </tr>
                                                    )
                                                    })
                                                    }
                                            </tbody>
                                        </table>
                                    </div><br />
                                    <center>
                                        <button type="print" className="btn btn-primary" onClick={() => generatePDF(filteredData)}>Generate Report</button>
                                    </center>&nbsp;&nbsp;&nbsp; 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>&nbsp;&nbsp;&nbsp; 
            
                <div className='footer7'>
                    <footer>
                        <div className ="p3">
                            <b>Copyright 2022 @ LMS. All Rights Reserved.. </b>
                        </div>
                        <div className="sbuttons3">
                            <div align="right" className="socialbtns">
                                <a href="#" className="fa fa-lg fa-facebook"></a>
                                <a href="#" className="fa fa-lg fa-twitter"></a>
                                <a href="#" className="fa fa-lg fa-instagram"></a>
                                <a href="#" className="fa fa-lg fa-youtube"></a>
                            </div>
                        </div>
                    </footer>
                </div>       
        </>
    )
}