import React, { useState } from 'react';
import { getmovies } from '../utils/movieService';
import Movie from "./Movie"

const Movies = () => {
    const [movies, setMovies] = useState([]);
    
    
    const ButtonClicked = async() => {
    const movie= await getmovies();
    setMovies(movie);};



    return (
        <>
        {movies?.length>0 && movies.map((movie)=>( <Movie title={movie.title} actor={movie.actor}/>
        ))}
          <button onClick={ButtonClicked}>Click here</button>
        </>      
);

};

export default Movies;