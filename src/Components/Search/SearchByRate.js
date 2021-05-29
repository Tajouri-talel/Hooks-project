import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const SearchByRate = ({searchRatemovies}) => {

const callSearchFunction = e => {
    e.preventDefault();
    searchRatemovies(e.target.value);
 
  }

  return (
      <form className="search">
      
      
      <ReactStars
    count={5}
    name="rating"
    onChange={(rat)=>{
      searchRatemovies(rat);
    }}

    size={24}
    activeColor="#ffd700"
  />
      </form>
    );
}

export default SearchByRate;