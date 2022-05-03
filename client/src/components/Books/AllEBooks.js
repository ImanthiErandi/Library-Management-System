import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from 'axios';
import { toast } from 'react-toastify';


export default class DisplayEBooks extends React.Component {

  state = {
    query: "",
    data: [],
    filteredData: []
  };
   
  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.PublishDate.toLowerCase().includes(query.toLowerCase());
      });

  
      return {
        query,
        filteredData
      };
    });
  };

  getData = () => {
    fetch('http://localhost:8088/ebooks/')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const { query } = this.state;
        const filteredData = data.filter(element => {
          return (
            element.NameAuth.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.Category.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.Title.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.PublicationYear.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.PublishDate.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.photo.toLowerCase().includes(query.toLowerCase()) >= 0
          )
        });
        
        this.setState({
          data,
          filteredData
        });
      });
  };
  componentWillMount() {
    this.getData();
  }

deleteEbook(PublishDate) {
    axios.delete(`http://localhost:8088/ebooks/delete/${PublishDate}`)
        .then((res) => {
            toast("Success! E-Book Deleted");
            window.location="/DisplayEBooks";
        }).catch((error) => {
            console.log(error)
        })

}

  render() {
    return (
      <>
        <Navbar/>
                {/* Display data from API */}
                <h1>View E-Books</h1>
                <div style={{marginLeft: "200px" }}>
                    {this.state.filteredData.length === 0 ? (<div className="alert alert-danger" style={{ marginLeft: "300px", width: "20%"}}>
                        <center>Data is not found<br /><br /></center> <br />
                            </div>) : (this.state.filteredData.map(i =>{
                        return(
                            <p style={{display:"inline-table",marginLeft:"30px"}}>
                                <div style={{ width: "350px",height:"310px" ,marginRight: "50px",marginTop:"30px"}}>
                                    
                                        <div>
                                            <div style={{ float: "left" }}>
                                                <img src={"images/" + i.Image} style={{ width: "180px", height: "180px" }} alt="cover" className="border "></img>
                                            </div>

                                                <p><b style={{ color: "blue" }}>{i.Title}</b></p>
                                                <p><b>Author: </b>{i.NameAuth}</p>
                                                <p><b>Published Year: </b>{i.PublicationYear}</p>
                                                <p><b>Category: </b>{i.Category}</p>
                                                <p><b style={{ color: "blue" }}>{i.PublishDate}</b></p>
                                        </div>

                                        <button className="btn btn-danger" onClick={() => this.deleteEbook(i.PublishDate)}>Delete</button>
                                   
                                </div>
                            </p>
                        )
                    }
                    ))}
                </div>
            <br/>
            <div className='footer4'>
                <Footer/>
            </div>
        </>
    );
  }
}