import React, { useState} from "react";
import axios from "axios";
import {Row,Col} from "reactstrap";
import  Navbar  from './Navbar';
import Footer from "./Footer";
import '../../book.css';

//Search Books
//Update Book number of copies

export default function  UpdateBooks() {
    
    const [Subject, setSubject] = useState('');
    const [Title, setTitle] = useState('');
    const [ISBN, setISBN] = useState('');
    const [NameAuth, setNameAuth] = useState('');
    const [NumOfCopy, setNumOfCopy] = useState('');
    const [Category, setCategory] = useState('');
    const [Copyright, setCopyright] = useState('');
    const [readOnly, setreadOnly] = useState(true);
      
    
//creting a method for retrieve data

    const  loadBookDetails = async () => {
        await axios.get(`http://localhost:8088/books/search/${ISBN}`).then((res) => {

            console.log(res)
            setSubject(res.data.book.Subject);
            setTitle(res.data.book.Title);
            setNameAuth(res.data.book.NameAuth);
            setNumOfCopy(res.data.book.NumOfCopy);
            setCategory(res.data.book.Category);
            setCopyright(res.data.book.Copyright);
        
        }).catch((err) => {
                window.alert('Book not found!')
                alert(err.message)
        })
    };
  

   //creting a method for set readonly
    const activate=()=>{
        setreadOnly(false)
    }


    //creting a method for update selling price

    const onSubmit = async (e) => {
        e.preventDefault();
        const newcopies = {
            Subject,
            Title,
            ISBN,
            NameAuth,
            NumOfCopy,
            Category,
            Copyright
        };
        console.log(newcopies)
    
            await axios
                .put(`http://localhost:8088/books/edit/${ISBN}`, newcopies)
                    .then(() => {
                        alert("number of copies updated Successfully");
                        window.location.reload(true);
                    }).catch((err) => {
                         alert(err);
                    });
    };

        return (
            <>
                <Navbar/>
                     <br></br>
                     <div className='container-height'>
                         <div className='col-lg-8 col-md m-auto'>
                             <div className='container'>
                            
                             <form className ="form-control" style={{background:"#ffffcc"}}>
                             <h1 className='text-center h1'>Update Book Details</h1> 
                                <div className='modal-body'>
                                    <div class="row g-3">
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
                                                     <button className="btn btn-primary " type="submit" onClick={loadBookDetails}>Search Book</button>
                                                </Col>
                                            </Row>
                                        </div>   
                                    </div>
                                        <br/>
           
                        
                                                        <div className='row g-3'>
                                                            <label htmlFor='subject' className='col-sm-3 col-form-label'>The book Subject </label>
                                                                <div className='col-sm-3'>
                                                                     <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="ISBN"
                                                                        readOnly
                                                                        value={Subject}
                                                                        onChange={(e) => {
                                                                        setISBN(e.target.value);
                                                                        }}
                                                                     />
                                                                </div>
                                                            <label htmlFor='copies' className='col-sm-3 col-form-label'>The number Of Copies </label>
                                                                <div className='col-sm-3'>
                                                                <Row>
                                                                        <Col md={9}>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                id="ISBN"
                                                                                readOnly={readOnly}
                                                                                value={NumOfCopy}
                                                                                onChange={(e) => {
                                                                                setNumOfCopy(e.target.value);
                                                                                }}
                                                                            />
                                                                        </Col>
                                                                        <Col md={1}>
                                                                            <button class="btn btn-outline-success btn-sm" onClick={activate}>Edit</button>
                                                                        </Col>
                                                                    </Row>
                                                                    </div>
                                                        </div>
                                                        <br/>
                                                        <div className='row g-3'>
                                                             <label htmlFor='title' className='col-sm-3 col-form-label'>The book Title </label>
                                                                    <div className='col-sm-3'>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="ISBN"
                                                                            readOnly
                                                                            value={Title}
                                                                            onChange={(e) => {
                                                                            setISBN(e.target.value);
                                                                            }}
                                                                        />
                                                                    </div>
                                                           
                                                                <label htmlFor='category' className='col-sm-3 col-form-label'>Category</label>
                                                                    <div className='col-sm-3'>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="ISBN"
                                                                            readOnly
                                                                            value={Category}
                                                                            onChange={(e) => {
                                                                            setISBN(e.target.value);
                                                                            }}
                                                                        />
                                                                    </div>
                                                        </div>

                                                        <br/>
                                                        <div className='row g-3'>
                                                             <label htmlFor='exampleInputEmail1' className='col-sm-3 col-form-label'>ISBN for the book </label>
                                                                 <div className='col-sm-3'>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="ISBN"
                                                                        readOnly
                                                                        value={ISBN}
                                                                        onChange={(e) => {
                                                                        setISBN(e.target.value);
                                                                        }}
                                                                    />
                                                                  </div>


                                                                  <label htmlFor='exampleInputEmail1' className='col-sm-3 col-form-label'>Copyright for the book </label>
                                                                        <div className='col-sm-3'>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                id="ISBN"
                                                                                readOnly
                                                                                value={Copyright}
                                                                                onChange={(e) => {
                                                                                    setISBN(e.target.value);
                                                                                }}
                                                                            />
                                                                        </div>
                                                        </div>
                                                        <br/>
                                                        <div className='row g-3'>
                                                            <label htmlFor='exampleInputEmail1' className='col-sm-3 col-form-label'>Name of the Author(s) </label>
                                                                <div className='col-sm-3'>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="ISBN"
                                                                        readOnly
                                                                        value={NameAuth}
                                                                        onChange={(e) => {
                                                                        setISBN(e.target.value);
                                                                        }}
                                                                    />
                                                                </div>
                                                        </div>
                                        <br/>
                                                <button className="btn btn-primary me-md-2" type="submit" onClick={onSubmit}>Update</button>
                                
                                        
                                         </div>
                                    </form>&nbsp;&nbsp; 
                           
                            </div>
                            </div>
                            </div>&nbsp;&nbsp; 
                            <div className='footer3'>
                                <Footer/>
                            </div>
            </>
        );
}
            
            
            