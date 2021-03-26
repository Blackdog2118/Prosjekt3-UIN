import React, { useState } from 'react';
import { getmovies } from '../utils/movieService';
import Movie from "./Movie"

const Movies = () => {
    const [movies, setMovies] = useState([]);
    
    
    const ButtonClicked = async() => {
    const data = await getmovies();
    setMovies(data);
    console.log(data);
  }



    return (
        <>
       {movies?.length > 0 ? movies.map(movie => <Movie title={movie.title} actor={movie.actor} />) : <p>Ingen filmer</p>}

          <button onClick={ButtonClicked}>Click here</button>
        </>      
);

};

export default Movies;