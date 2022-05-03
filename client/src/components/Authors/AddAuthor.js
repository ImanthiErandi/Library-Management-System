import React, { useState } from 'react';
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function AddAuthors(){

  const [NameAuth, setNameAuth] = useState('');
  const [NumOfCopy, setNumOfCopy] = useState('');
  const [Category, setCategory] = useState('');
  const [NumOfPages, setNumOfPages] = useState('');
  const [Title, setTitle] = useState('');
  const [PublicationYear, setPublicationYear] = useState('');
  const [Edition, setEdition] = useState('');
  const [PublisherName, setPublisherName] = useState('');

  function formSubmitHandler(e){
    e.preventDefault();

    const newAssignment ={
        NameAuth,
        NumOfCopy,
        Category,
        NumOfPages,
        Title,
        PublicationYear,
        Edition,
        PublisherName
    };

    axios.post("http://localhost:8088/authors/add",newAssignment).then(()=>{ 
          alert("New Author Details inserted Succesfully !!");
          window.location="/AllAuthors";
      }).catch((err)=>{
          alert(err)
      })
    
  }
  return (
  <>
    <Navbar/>
    <br/>
    <div className='container-height'>
       <div className='col-lg-8 col-md m-auto'>
          <div className='container'>
              <form className ="form-control" style={{background:"#ffffcc"}} onSubmit={formSubmitHandler}>
                  <div className='modal-body'>
                       <h1 className='text-center'>Add Author Details</h1>
                       <br/>
                           <div className='row g-4'>
                           <label htmlFor='exampleInputEmail1' className='col-sm-3 col-form-label'>Author(s) Name </label>
                                 <div className='col-sm-3'>
                                     <input
                                    value={NameAuth}
                                    onChange={e => setNameAuth(e.target.value)}
                                    type='text'
                                    className='form-control'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                    placeholder='Author of the Book'
                                    required="required" 
                                  />
                              </div> 
                   
                                <label htmlFor='copies' className='col-sm-3 col-form-label'>The number Of Copies </label>
                                      <div className='col-sm-3'>
                                      <input
                                        value={NumOfCopy}
                                        onChange={e => setNumOfCopy(e.target.value)}
                                        type='number'
                                        className='form-control'
                                        required="required" 
                                      />
                                      </div>
                          </div>
                          <br/>
                          <div className='row g-3'>
                          <label htmlFor='category' className='col-sm-3 col-form-label'>Category</label>
                              <div className='col-sm-3'>
                                <select
                                  value={Category}
                                  required="required" 
                                  onChange={e => setCategory(e.target.value)}
                                  className="form-select form-control" id="category">
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
                            

                                <label htmlFor='category' className='col-sm-3 col-form-label'>The number Of Pages</label>
                                <div className='col-sm-3'>
                                    <input
                                        value={NumOfPages}
                                        onChange={e => setNumOfPages(e.target.value)}
                                        type='number'
                                        className='form-control'
                                        required="required" 
                                      />
                                </div>
                          </div>
                          <br/>
                          <div className='row g-3'>
                          <label htmlFor='title' className='col-sm-3 col-form-label'>Book Title </label>
                                <div className='col-sm-3'>
                                    <input
                                      value={Title}
                                      onChange={e => setTitle(e.target.value)}
                                      type='text'
                                      className='form-control'
                                      id='title'
                                      aria-describedby='emailHelp'
                                      placeholder='Title of the Book'
                                      required="required" 
                                    />
                                </div>
                                <label htmlFor='exampleInputEmail1' className='col-sm-3 col-form-label'>Year of Publication </label>
                                <div className='col-sm-3'>
                                <select
                                              value={PublicationYear}
                                              required="required" 
                                              onChange={e => setPublicationYear(e.target.value)}
                                              className="form-select form-control" id="year">
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
                            <label htmlFor='exampleInputEmail1' className='col-sm-3 col-form-label'>Edition </label>
                                 <div className='col-sm-3'>
                                     <input
                                    value={Edition}
                                    onChange={e => setEdition(e.target.value)}
                                    type='text'
                                    className='form-control'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                    placeholder='Book Edition'
                                    required="required" 
                                  />
                              </div> 

                              <label htmlFor='exampleInputEmail1' className='col-sm-3 col-form-label'>The Name of the Publisher </label>
                                 <div className='col-sm-3'>
                                     <input
                                    value={PublisherName}
                                    onChange={e => setPublisherName(e.target.value)}
                                    type='text'
                                    className='form-control'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                    placeholder='Author of the Book'
                                    required="required" 
                                  />
                              </div> 
                   
                      </div>
                      <br/>
                      <button type='submit' className='btn btn-primary m-auto'>
                        Insert the Information
                      </button>
                  </div>
                
  </form>
  </div>&nbsp;&nbsp;&nbsp;
</div>
</div>

  <div className='footer2'>
  <Footer/>
  </div>
</>
)       
} 




