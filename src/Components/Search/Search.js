import React, { useState } from "react";


const Search = ({search}) => {

const callSearchFunction = e => {
    e.preventDefault();
    search(e.target.value);
 
  }

  return (
      <form className="search">
        <input
          placeholder="enter value ..." onChange={callSearchFunction}
          type="text"
        />
      </form>
    );
}

export default Search;