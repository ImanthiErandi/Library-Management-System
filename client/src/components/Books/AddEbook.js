import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Navbar";
import Footer from "./Footer";


const AddEBooks = () => {

    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);


    const [newAssignment, setNewAssignment] = useState(
        {
          NameAuth:'', 
          Category:'',
          Title:'',
          PublicationYear:'',
          PublishDate:'',
          Image:'',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setIsError(false); //additional


        const formData = new FormData();
        formData.append('NameAuth', newAssignment.NameAuth);
        formData.append('Category', newAssignment.Category);
        formData.append('Title', newAssignment.Title);
        formData.append('PublicationYear', newAssignment.PublicationYear);
        formData.append('PublishDate', newAssignment.PublishDate);
        formData.append('Image', newAssignment.Image);

        axios.post('http://localhost:8088/ebooks/add', formData) //add customer data
             .then(res => {
                console.log(res);
                setLoading(false);
                setNewAssignment({NameAuth:'', Category:'', Title:'', PublicationYear:'', PublishDate:'', Image:''})
                 toast("Success! Customer Added");
                 window.location="/DisplayEBooks";
             })
             .catch(err => {
                console.log(err);
                setLoading(false);
                setIsError(true);
                toast(JSON.stringify(err));
                
             });
    }

    const handleChange = (e) => {
      setNewAssignment({...newAssignment, [e.target.name]: e.target.value});
    }

    const handleImage = (e) => {
      setNewAssignment({...newAssignment, Image: e.target.files[0]});
    }
    return (
      <>
      <Navbar/>
      <br/>
      <div className='container-height'>
         <div className='col-lg-8 col-md m-auto'>
            <div className='container'>
                <form className ="form-control" style={{background:"#bfbfbf"}} onSubmit={handleSubmit} encType='multipart/form-data' >
                    <div className='modal-body'>
                         <h1 className='text-center'>Add E-Books</h1>
                         <br/>
                             <div className='row g-4'>
                                <label htmlFor='NameAuth' className='col-sm-3 col-form-label'>Name of the Author(s) </label>
                                   <div className='col-sm-3'>
                                       <input
                                           value={newAssignment.NameAuth}
                                           onChange={handleChange}
                                            type='text'
                                            className='form-control'
                                            name='NameAuth'
                                            aria-describedby='emailHelp'
                                            placeholder='Author of the Book'
                                            required="required" 
                                        />
                                    </div>
                     
                                    <label htmlFor='Category' className='col-sm-3 col-form-label'>Category</label>
                                <div className='col-sm-3'>
                                  <select
                                    required="required" 
                                    value={newAssignment.Category}
                                    onChange={handleChange}
                                    name='Category'
                                    className="form-select form-control">
                                    <option selected>Choose...</option>
                                    <option value='Programming'>programming</option>
                                    <option value='religion'>Religion</option>
                                    <option value='life'>life</option>
                                    <option value='culture'>culture</option>
                                    <option value='IT'>IT</option>
                                    <option value='novel'>Novel</option>
                                    <option value='research'>Research</option>
                                  </select>
                                </div>
                            </div>
                            <br/>
                            <div className='row g-3'>
                               <label htmlFor='Title' className='col-sm-3 col-form-label'>The book Title </label>
                                  <div className='col-sm-3'>
                                      <input
                                        value={newAssignment.Title}
                                        onChange={handleChange}
                                        type='text'
                                        className='form-control'
                                        name='Title'
                                        aria-describedby='emailHelp'
                                        placeholder='Title of the Book'
                                        required="required" 
                                      />
                                  </div>
                                  <label htmlFor='PublicationYear' className='col-sm-3 col-form-label'>Year of Publication </label>
                                        <div className='col-sm-3'>
                                            <select
                                            value={newAssignment.PublicationYear}
                                            onChange={handleChange}
                                              required="required" 
                                              name='PublicationYear'
                                              className="form-select form-control">
                                              <option selected>Choose...</option>
                                              <option value='1990'> 1990</option>
                                              <option value='1991'>1991</option>
                                              <option value='1992'>1992</option>
                                              <option value='1993'>1993</option>
                                              <option value='1994'>1994</option>
                                              <option value='1995'>1995</option>
                                              <option value='1996'>1996</option>
                                              <option value='1997'>1997</option>
                                              <option value='1998'>1998</option>
                                              <option value='1999'>1999</option>
                                              <option value='2000'>2000</option>
                                              <option value='2001'>2001</option>
                                              <option value='2002'>2002</option>
                                              <option value='2003'>2003</option>
                                              <option value='2004'>2004</option>
                                              <option value='2005'>2005</option>
                                              <option value='2006'>2006</option>
                                              <option value='2007'>2007</option>
                                              <option value='2008'>2008</option>
                                              <option value='2009'>2009</option>
                                              <option value='2010'>2010</option>
                                              <option value='2011'>2011</option>
                                              <option value='2012'>2012</option>
                                              <option value='2013'>2013</option>
                                              <option value='2014'>2014</option>
                                              <option value='2015'>2015</option>
                                              <option value='2016'>2016</option>
                                              <option value='2017'>2017</option>
                                              <option value='2018'>2018</option>
                                              <option value='2019'>2019</option>
                                              <option value='2020'>2020</option>
                                              <option value='2021'>2021</option>
                                              <option value='2022'>2022</option>
                                            </select>
                                      </div>
                            </div>
                            <br/>
                            <div className='row g-3'>
                                <label htmlFor='PublishDate' className='col-sm-3 col-form-label'>Publish Date</label>
                                  <div className='col-sm-3'>
                                      <input
                                      value={newAssignment.PublishDate}
                                      onChange={handleChange}
                                        type='date'
                                        className='form-control'
                                        name='PublishDate'
                                        aria-describedby='emailHelp'
                                        placeholder='Entry date of the E-Book'
                                        required="required" 
                                      />
                                    </div>
                              
                                <label htmlFor='PublishDate' className='col-sm-3 col-form-label'>Cover Image</label>
                                   <div className='col-sm-3'>
                                
                                      <input 
                                      type="file" 
                                      accept=".png, .jpg, .jpeg"
                                      name="Image"
                                      onChange={handleImage} required
                                      />
                              </div>
                          </div>
                          <br/>
                          <div>
            {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
                     {/*decision*/}
                     <button 
                        type="submit"
                        className="btn btn-primary "
                        disabled={loading}
                       
                        >{loading ? 'Uploading...' : 'ADD E-BOOK'}
                     </button>
                     <ToastContainer style = {{marginTop:"50px"}}/> 
                     <br/>
                     <Link to={"/DisplayEBooks"}><button type="submit" class="btn btn-primary">Display E-BOOKS</button></Link>
            </div>
            <br/>
            </div>            
    </form>
   
    
    </div>&nbsp;&nbsp;&nbsp;
  </div>
  </div>
  
    <div className='footer8'>
    <Footer/>
    </div>
</>
    );
  }
  
  export default AddEBooks;