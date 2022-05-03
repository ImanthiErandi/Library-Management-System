  import React, { useState } from 'react';
  import axios from "axios";
  import Navbar from "./Navbar";
  import Footer from "./Footer";

  
  export default function AddBooks(){

    const [Subject, setSubject] = useState('');
    const [Title, setTitle] = useState('');
    const [ISBN, setISBN] = useState('');
    const [NameAuth, setNameAuth] = useState('');
    const [NumOfCopy, setNumOfCopy] = useState('');
    const [Category, setCategory] = useState('');
    const [Copyright, setCopyright] = useState('');

    function formSubmitHandler(e){
      e.preventDefault();

      const newAssignment ={
        Subject,
        Title,
        ISBN,
        NameAuth,
        NumOfCopy,
        Category,
        Copyright
      };

      axios.post("http://localhost:8088/books/add",newAssignment).then(()=>{ 
            alert("New Book Added Succesfully !!");
            window.location="/AllBooks";
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
                <form className ="form-control" style={{background:"#bfbfbf"}} onSubmit={formSubmitHandler}>
                    <div className='modal-body'>
                         <h1 className='text-center'>Add Book</h1>
                         <br/>
                             <div className='row g-4'>
                                  <label htmlFor='subject' className='col-sm-3 col-form-label'>The book Subject </label>
                                       <div className='col-sm-3'>
                                            <input
                                              value={Subject}
                                              onChange={e => setSubject(e.target.value)}
                                              type='text'
                                              className='form-control'
                                              id='subject'
                                              aria-describedby='emailHelp'
                                              placeholder='Subject of the Book'
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
                               <label htmlFor='title' className='col-sm-3 col-form-label'>The book Title </label>
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
                            </div>
                            <br/>
                            <div className='row g-3'>
                                <label htmlFor='exampleInputEmail1' className='col-sm-3 col-form-label'>ISBN for the book </label>
                                  <div className='col-sm-3'>
                                      <input
                                        value={ISBN}
                                        onChange={e => setISBN(e.target.value)}
                                        type='text'
                                        className='form-control'
                                        id='exampleInputEmail1'
                                        aria-describedby='emailHelp'
                                        placeholder='ISBN of the Book'
                                        required="required" 
                                      />
                                  </div>
                                  <label htmlFor='exampleInputEmail1' className='col-sm-3 col-form-label'>Copyright for the book </label>
                              <div className='col-sm-3'>
                                  <input
                                    value={Copyright}
                                    onChange={e => setCopyright(e.target.value)}
                                    type='text'
                                    className='form-control'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                    placeholder='Copyright name'
                                  />
                              </div>
                          </div>
                <br/>
                        <div className='row g-3'>
                              <label htmlFor='exampleInputEmail1' className='col-sm-3 col-form-label'>Name of the Author(s) </label>
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
                        </div>
                        <br/>
                        <button type='submit' className='btn btn-primary m-auto'>
                          ADD BOOK
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


  

  