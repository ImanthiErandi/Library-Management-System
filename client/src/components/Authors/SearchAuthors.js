import React, { useState } from "react";
import axios from "axios";
import  Navbar  from './Navbar';
import {Row,Col} from "reactstrap";
import Footer from "./Footer";
import '../../book.css';

export default function SearchAuthors() {

    const [NameAuth, setNameAuth] = useState('');
    const [NumOfCopy, setNumOfCopy] = useState('');
    const [Category, setCategory] = useState('');
    const [NumOfPages, setNumOfPages] = useState('');
    const [Title, setTitle] = useState('');
    const [PublicationYear, setPublicationYear] = useState('');
    const [Edition, setEdition] = useState('');
    const [PublisherName, setPublisherName] = useState('');
   

    const getAuthors = async() => {

        await axios.get(`http://localhost:8088/authors/search/${NameAuth}`).then((res) => {

            console.log(res)

            setNumOfCopy(res.data.author.NumOfCopy);
            setCategory(res.data.author.Category);
            setNumOfPages(res.data.author.NumOfPages);
            setTitle(res.data.author.Title);
            setPublicationYear(res.data.author.PublicationYear);
            setEdition(res.data.author.Edition);
            setPublisherName(res.data.author.PublisherName);
            alert("Author Details Fetched Successfully!!!");

        }).catch(() => {
            alert("Invalid Author Name.Please Enter the Valid Author Name.");
            window.location.reload(false);
        })
    };

    return ( 
    <>
     <Navbar/><br/><br/>
        <div className='container-height'>
            <div className='col-lg-8 col-md m-auto'>
                <div className='container'>
                        <div className="row g-3"> 
                        <div className="card container" style={{background:"#ffffcc"}}>&nbsp;&nbsp;&nbsp; 
                       
                            <h1 className="text-black h1"> Author Details </h1>
                               
                             <div className='col-sm-3'>
                                        <Row>
                                            <Col md={9}>
                                                <input 
                                                type="text" 
                                                id="NameAuth" 
                                                className="form-control" 
                                                minLength={20} 
                                                maxLength={20} 
                                                value={NameAuth}  
                                                placeholder="Enter Author Name" 
                                                required 
                                                onChange={(e)=>{setNameAuth(e.target.value);
                                                }}  
                                            />
                                            </Col>
                                            <Col md={1}>
                                                <button className="btn btn-primary " type="submit" onClick={getAuthors}>Search Author</button>
                                            </Col>
                                        </Row>
                                    </div>&nbsp;&nbsp;&nbsp;  
                             
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
                                            <tbody >
                                                <tr >
                                                    <td>{NameAuth}</td>
                                                    <td>{NumOfCopy}</td>
                                                    <td>{Category}</td>
                                                    <td>{NumOfPages}</td>
                                                    <td>{Title}</td>
                                                    <td>{PublicationYear}</td>
                                                    <td>{Edition}</td>
                                                    <td>{PublisherName}</td>
                                                </tr> 
                                            </tbody> 
                                        </table>
                                    </div>&nbsp;&nbsp;&nbsp; 
                                </div>
                                
                     </div>
                 </div>
            </div>
        </div>
        <div className='footer6'>
    <Footer/>
    </div>
    </>
    )
}