import React from 'react';
import Card from '../Cards/Card'
const MovieList = ({movies}) => {
	return (
		<>
			{movies.map((movie, index) => (
            <Card movie={movie} key={index}/>			
				
			))}
		</>
	);
};

export default MovieList;