import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { CircularProgress } from "@material-ui/core";
import { apiKey, movieAPI } from "../../utils/APIs";
import MoviePoster from "../MoviePoster/MoviePoster";

const MoviesCarrousel = props => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    movieAPI
      .get("/popular?api_key=" + apiKey)
      .then(resp => resp.data)
      .then(data => {
        return splitArray(8, data.results);
      })
      .then(results => {
        setPopularMovies(results);
      });
  }, []);

  const splitArray = (itemsPerArray, array) => {
    return new Array(Math.ceil(array.length / itemsPerArray))
      .fill()
      .map(() => array.splice(0, itemsPerArray));
  };

  const renderMoviesSets = (allMovies) => {
    return (
      <Carousel autoPlay={false}>
        {
          allMovies.map(moviesSet =>
            moviesSet.map(movie =>
              <MoviePoster
                movieName={movie.original_title}
                posterPath={movie.poster_path}
              />
            )
          )
        }
      </Carousel>
    )
  }

  return (
    popularMovies.length !== 0 ? renderMoviesSets(popularMovies) : <CircularProgress />
  );
};

export default MoviesCarrousel;
