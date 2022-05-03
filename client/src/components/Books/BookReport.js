import React, {useState, useEffect} from "react";
import axios from "axios";
import jspdf from "jspdf";
import "jspdf-autotable"
import Navbar from "./Navbar";

export default function BookReport() {

    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState([]);

 
   useEffect(() => {
        function getBooks(){
            axios("http://localhost:8088/books/")
            .then(res => {
                //console.log(response.data)
                setAllData(res.data);
                setFilteredData(res.data);
            }).catch(error => {
                alert(error.message);
            })
        }
        getBooks();
    }, [])

    const handleSearch = (event) =>{
    
        let value = event.target.value;
        let result = [];
        console.log(value);

        result = allData.filter((data) => {
             return data.Category.search(value) != -1;
        });
        setFilteredData(result);
        }

        //generate report pdf code

        const generatePDF = tickets => {

            const doc = new jspdf();
            const tableColumn = ["ISBN No","Author(s) Name", "Book Title", "Book Subject", "Category","Number Of Copies","Copyright"];
            const tableRows = [];
        
            tickets.map(ticket => {
                const ticketData = [
                    ticket.ISBN,
                    ticket.NameAuth,
                    ticket.Title,
                    ticket.Subject,
                    ticket.Category,
                    ticket.NumOfCopy,
                    ticket.Copyright
                
                ];
                tableRows.push(ticketData);
            })
            doc.text("Book Details Report", 14, 15).setFontSize(12);
            
            // right down width height
            doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
            doc.save('Book_Details_report_.pdf');
        };

    return(    
        <> 
            <Navbar/><br/> 
                <div className='container-height'>
                    <div className='col-lg-8 col-md m-auto'>
                        <div className='container'>
                            <div className="row g-3"> 
                                <div style={{background:"#bfbfbf"}}>&nbsp;&nbsp;&nbsp; 
                        
                                    <h1 className="text-black h1"> Book Detail Report </h1><br/>
                                
                                    <label className="text-black">Search:</label>
                                        <input type="text" onChange={(event) =>handleSearch(event)} />
                                         <br/><br/>
                                
                                            <div style={{background:"#fff"}} className="card container d-flex justify-content-center">
                                                <table   className="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th >ISBN No</th>
                                                            <th >Author(s) Name</th>
                                                            <th >Book Title</th>
                                                            <th >Book Subject</th>
                                                            <th >Category</th>
                                                            <th >Number Of Copies</th>
                                                            <th >Copyright</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {filteredData.map((value)=>{
                                                            return(
                                                                <tr> 
                                                                    <td>{value.ISBN}</td>
                                                                    <td>{value.NameAuth}</td>
                                                                    <td>{value.Title}</td> 
                                                                    <td>{value.Subject}</td>
                                                                    <td>{value.Category}</td>
                                                                    <td>{value.NumOfCopy}</td>
                                                                    <td>{value.Copyright}</td>
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
                            <div className ="p4">
                                <b>Copyright 2022 @ LMS. All Rights Reserved.. </b></div>
                                    <div className="sbuttons4">
                                        <div align="right" class="socialbtns">
                                            <a href="#" class="fa fa-lg fa-facebook"></a>
                                            <a href="#" class="fa fa-lg fa-twitter"></a>
                                            <a href="#" class="fa fa-lg fa-instagram"></a>
                                            <a href="#" class="fa fa-lg fa-youtube"></a>
                                        </div>
                            </div>
                        </footer>
                    </div>
        </>
    )
}