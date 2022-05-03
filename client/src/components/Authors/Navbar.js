import React from  "react";
import {Link} from "react-router-dom";
import Logo from '../../Logo.png';
import '../../Home.css';


export default function Navbar() {
    return(
     <>
     <div className="row">
        <div className="col">
            <div className="image2" >
                <img src={Logo} alt="Logo" width="150px" />
            </div>
        </div>
        <div className="col button2">
            <Link to={"/"}><button type="submit" class="btn btn-primary">LOG OUT</button></Link>
        </div>
    </div>
    <nav className="navbar navbar-expand" style={{background:"#fff"}}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">Home</a>
              
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/AddBooks" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Manage Books</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="/AddBooks">Add new books</a></li>
                <li><a className="dropdown-item" href="/UpdateBooks">Update book details</a></li>
                <li><a className="dropdown-item" href="/RecomendedBooks">Recommended book</a></li>
                <li><a className="dropdown-item" href="/SearchBooks">Search book Details</a></li>
                <li><a className="dropdown-item" href="/AllBooks">All books</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/AddAuthors" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Manage Authors
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="/AddAuthors">Add authors</a></li>
                <li><a className="dropdown-item" href="/AllAuthors">All author details</a></li>
                <li><a className="dropdown-item" href="/SearchAuthors">Search author details</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/AddEBooks">E-Books</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/BookReport" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Reports
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="/BookReport">Book Report</a></li>
                <li><a className="dropdown-item" href="/AuthorReport">Authors Report</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
     </>
    )
}