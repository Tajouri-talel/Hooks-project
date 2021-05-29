import React, { useState } from 'react';

import './App.css';
import MovieList from './Components/MoviesList/MovieList';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import SearchByRate from './Components/Search/SearchByRate';
import Add from './Components/Cards/MovieAdd'
import items from './serves/items.json'


const App = () => {
	
	const [searchValue,setSearchValue]=useState('');
	const [searchRate,setSearchRate]=useState('');
    const[movie,setMovie]=useState(items);


   const search =(title)=>{
	setSearchValue(title) ;  
   }
   
   const searchRatemovies =(rating)=>{
	setSearchRate(rating) ;  
   }
  
const addMovies=(x)=>{
	setMovie([...movie,x])
}

	return (
	
		
<div className='container-fluid movie-app'>
<Header text="M O V I E S" />
<Search search={search} />
<SearchByRate searchRatemovies={searchRatemovies} />
<h1 class="ribbon">
   <strong class="ribbon-content">THIS IS MY MOVIE LIST</strong>
</h1>
			<div className='row'>
				<MovieList movies={movie.filter(movie=>movie.title.toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase())&&(movie.rating>=searchRate))} />
		
					
			</div>
			
<Add submitMovies={addMovies}/>

		</div>


   
	);
};

export default App;