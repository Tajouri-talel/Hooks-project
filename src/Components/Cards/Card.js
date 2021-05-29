import React from "react";
import ReactStars from "react-rating-stars-component";
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';  

const Card = ({ movie }) => {
          return (

            <div className="movie_card" style={{ backgroundImage: `url(${movie.back})` }}>
            <div className="info_section">
              <div className="movie_header">
              <img src={movie.poster} className="locandina" alt={movie.title} />

                <h1>{movie.title}</h1>
                <h4>{}Year</h4>
                <div>
                  <ReactStars count={5} value={movie.rating} edit={false}   size={24}/>
                
                </div>

              <div className="movie_desc">
                <p className="text"> 
                {movie.description}
                </p>
              </div>

              <div className="movie_social">
                <ul>
                  <li><i className="material-icons"><ShareIcon/></i></li>
                  <li><i className="material-icons"><FavoriteBorderIcon/></i></li>
                  <li><i className="material-icons"><CommentIcon/></i></li>
                </ul>
              </div>
            </div>
            <div className="blur_back bright_back"></div>
          </div>

          
            </div>
          );
       
};


export default Card;