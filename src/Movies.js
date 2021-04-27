import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;
        return (
          <Link to={`/movies/${id}`} key={id} className="movie">
            movie
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
