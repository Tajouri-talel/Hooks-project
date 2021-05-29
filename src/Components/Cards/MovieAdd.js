import React, { useState } from "react";
import {Button, Modal} from 'react-bootstrap';



function Add({ submitMovies }) {
  

 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addMovie, setAddMovie] = useState({
    title: "",
    description: "",
    rating: 0,
    poster: "",
  });
  const changemovie = (e) => {
    setAddMovie({
      ...addMovie,
      [e.target.name]: e.target.value,
    });
  };

  return (
       <>
      <Button className="addbutton" variant="primary" onClick={handleShow}><span>
        ADD YOUR MOVIE</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
    <input className="form-control" type="text" name="title" id="example-text-input" onChange={changemovie}/>
  
    <input className="form-control" type="text" name="Description" id="example-search-input" onChange={changemovie}/>
  
    <input class="form-control" type="number" name="rating" id="example-email-input" onChange={changemovie}/>
 
    <input className="form-control" type="url" name="poster" id="example-url-input" onChange={changemovie}/>
  
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            submitMovies(addMovie);
            setAddMovie({ title: "", description: "", rating: 0, poster: "" });
            {
              handleClose();
            }
          }}
        >
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    )
}


export default Add;