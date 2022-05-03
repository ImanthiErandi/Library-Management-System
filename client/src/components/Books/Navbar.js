import React from  "react";
import {Link} from 'react-router-dom';
import Logo from '../../Logo.png';
import '../../Home.css';

export default function Navbar() {
    return(
     <>
     <div className="row">
        <div className="col">
            <div className="image2" >
                <img src={Logo} alt="Logo" width="160px" />
            </div>
        </div>
        <div className="col button2">
        <Link to={"/"}><button type="submit" class="btn btn-primary">LOG OUT</button></Link>
        </div>
    </div>
     <nav class="navbar navbar-expand" style={{background:"#fff"}}>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Manage Books
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a className="dropdown-item" href="/AddBooks">Add new books</a></li>
                <li><a className="dropdown-item" href="/UpdateBooks">Update book details</a></li>
                <li><a className="dropdown-item" href="/RecomendedBooks">Recommended book</a></li>
                <li><a className="dropdown-item" href="/SearchBooks">Search book Details</a></li>
                <li><a className="dropdown-item" href="/AllBooks">All books</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Manage Authors
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a className="dropdown-item" href="/AddAuthors">Add authors</a></li>
                <li><a className="dropdown-item" href="/AllAuthors">All author details</a></li>
                <li><a className="dropdown-item" href="/SearchAuthors">Search author details</a></li>
          </ul>
        </li>
        <li className="nav-item">
              <a className="nav-link" href="/AddEBooks">E-Books</a>
            </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Reports
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
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