import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/screens/LoginScreen";
import Home from "../src/components/Home";

import AddBooks from './components/Books/AddBook';
import AllBooks from './components/Books/AllBooks';
import UpdateBooks from './components/Books/UpdateBooks';
import SearchBooks from './components/Books/SearchBooks';
import AddAuthors from './components/Authors/AddAuthor';
import AllAuthors from './components/Authors/AllAuthors';
import SearchAuthors from './components/Authors/SearchAuthors';
import RecomendedBooks from './components/Books/RecomendedBooks';
import AuthorReport from './components/Authors/AuthorReport';
import BookReport from './components/Books/BookReport';
import AddEBooks from './components/Books/AddEbook';
import DisplayEBooks from './components/Books/AllEBooks';



function App() {
    return ( 
        <div className = 'App'>
            <Router>
                <Routes>

                    <Route path = '/' element = { < LoginScreen /> } />
                    <Route path="/home" element = { < Home /> } />
                    <Route path='/AddBooks' element={< AddBooks />} />
                    <Route path='/SearchBooks' element={< SearchBooks />} />
                    <Route path='/UpdateBooks' element={< UpdateBooks />} />
                    <Route path='/AllBooks' element={< AllBooks/>} />
                    <Route path='/RecomendedBooks' element={< RecomendedBooks/>} />
                    <Route path='/AddAuthors' element={< AddAuthors />} />
                    <Route path='/AllAuthors' element={< AllAuthors/>} />
                    <Route path='/SearchAuthors' element={< SearchAuthors/>} />
                    <Route path='/AuthorReport' element={< AuthorReport/>} />
                    <Route path='/BookReport' element={< BookReport/>} />
                    <Route path='/AddEBooks' element={< AddEBooks/>} />
                    <Route path='/DisplayEBooks' element={< DisplayEBooks/>} />
                    

                    <Route path = '/'element = { < LoginScreen /> } />
                    <Route path="/home"element = { < Home /> } />


                </Routes>  
            </Router>  
        </div>
    )
}

export default App;