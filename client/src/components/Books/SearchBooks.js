import React, { useState } from "react";
import axios from "axios";
import  Navbar  from './Navbar';
import {Row,Col} from "reactstrap";
import Footer from "./Footer";
import '../../book.css';

export default function SearchBooks() {

    const [Subject, setSubject] = useState('');
    const [Title, setTitle] = useState('');
    const [ISBN, setISBN] = useState('');
    const [NameAuth, setNameAuth] = useState('');
    const [NumOfCopy, setNumOfCopy] = useState('');
    const [Category, setCategory] = useState('');
    const [Copyright, setCopyright] = useState('');
   


    const getBooks = async() => {

        await axios.get(`http://localhost:8088/books/search/${ISBN}`).then((res) => {

            console.log(res)
            setSubject(res.data.book.Subject);
            setTitle(res.data.book.Title);
            setNameAuth(res.data.book.NameAuth);
            setNumOfCopy(res.data.book.NumOfCopy);
            setCategory(res.data.book.Category);
            setCopyright(res.data.book.Copyright);
            alert("Book Details Fetched Successfully!!!");

        }).catch(() => {
            alert("Invalid ISBN.Please Enter the Valid ISBN Number.");
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
                        <div className="card container" style={{background:"#bfbfbf"}}>&nbsp;&nbsp;&nbsp; 
                       
                            <h1 className="text-black h1"> Search Book Details </h1>
                               
                             <div className='col-sm-3'>
                                        <Row>
                                            <Col md={9}>
                                                <input 
                                                type="text" 
                                                id="inputISBN" 
                                                className="form-control" 
                                                minLength={6} 
                                                maxLength={6} 
                                                value={ISBN}  
                                                placeholder="Enter ISBN No" 
                                                required 
                                                onChange={(e)=>{setISBN(e.target.value);
                                                }}  
                                            />
                                            </Col>
                                            <Col md={1}>
                                                <button className="btn btn-primary " type="submit" onClick={getBooks}>Search Book</button>
                                            </Col>
                                        </Row>
                                    </div>&nbsp;&nbsp;&nbsp;  
                             
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
                                            <tbody >
                                                <tr >
                                                    <td >{ Subject } </td> 
                                                    <td>{ Title}</td> 
                                                    <td>{ ISBN }</td> 
                                                    <td>{ NameAuth }</td> 
                                                    <td>{NumOfCopy }</td> 
                                                    <td>{Category }</td> 
                                                    <td>{Copyright }</td> 
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