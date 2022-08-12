import { useState } from 'react';
import moviesDataJSON from '../movies-data.json';

import AddMovie from './AddMovie';
import FilterMovies from './FilterMovies';
import MovieCard from './MovieCard';

function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [moviesData, setMoviesData] = useState(moviesDataJSON);

  const addNewMovie = (newMovie) => {
    const id = '1ae22ff' + movies.length;
    newMovie._id = id;
    // const moviesCopy = [...movies];
    // moviesCopy.push(newMovie);
    // setMovies(moviesCopy);
    const updatedMovies = [...movies, newMovie];
    const updatedMoviesData = [...moviesData, newMovie];
    setMovies(updatedMovies);
    setMoviesData(updatedMoviesData);
  }

  const filterMovieList = (str) => {
    let filteredMovies;
    if(str === 'ALL'){
      filteredMovies = moviesData;
    } else {
      filteredMovies = moviesData.filter((eachMovie) => {
        return eachMovie.title[0].toLowerCase() === str.toLowerCase();
      })
    }
    setMovies(filteredMovies);
  }
  
  return (
    <div>
      <AddMovie addMovie={addNewMovie} />
      <h2>Movie List</h2>
      <FilterMovies filterMovies={filterMovieList} />
      {movies.map((eachMovie) => {
        return <MovieCard key={eachMovie._id} movie={eachMovie} />
      })}
    </div>
  )

}

export default MovieList;