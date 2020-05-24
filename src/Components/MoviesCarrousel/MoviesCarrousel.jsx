import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { CircularProgress } from "@material-ui/core";
import { apiKey, movieAPI, searchMovieAPI, serieAPI } from "../../utils/APIs";
import MoviePoster from "../MoviePoster/MoviePoster";

const MoviesCarrousel = props => {
  const [itemsToDisplay, setItemsToDisplay] = useState([]);
  const { category } = props;

  useEffect(() => {
    const getPopularMovies = () => {
      movieAPI
        .get("/popular?api_key=" + apiKey)
        .then(resp => resp.data)
        .then(data => {
          return splitArray(8, data.results);
        })
        .then(results => {
          setItemsToDisplay(results);
        });
    };

    const getPopularSeries = () => {
      serieAPI
        .get("/popular?api_key=" + apiKey)
        .then(resp => resp.data)
        .then(data => {
          return splitArray(8, data.results);
        })
        .then(results => {
          setItemsToDisplay(results);
        });
    };

    const getMoviesByGenre = () => {
      const genreId = category === "family_movies" ? "10751" : "99";

      searchMovieAPI
        .get(`?api_key=${apiKey}&with_genres=${genreId}`)
        .then(resp => resp.data)
        .then(data => {
          return splitArray(8, data.results);
        })
        .then(results => {
          setItemsToDisplay(results);
        });
    };

    category === "popular_series"
      ? getPopularSeries()
      : category === "popular_movies"
      ? getPopularMovies()
      : getMoviesByGenre();
  }, [category]);


  const splitArray = (itemsPerArray, array) => {
    return new Array(Math.ceil(array.length / itemsPerArray))
      .fill()
      .map(() => array.splice(0, itemsPerArray));
  };

  const renderCarousel = array => {
    return (
      <Carousel autoPlay={false}>
        {array.map(itemsSet =>
          itemsSet.map(item => (
            <MoviePoster
              key={item.id}
              movieName={item.title}
              posterPath={item.poster_path}
            />
          ))
        )}
      </Carousel>
    );
  };

  return itemsToDisplay.length !== 0 ? (
    renderCarousel(itemsToDisplay)
  ) : (
    <CircularProgress />
  );
};

export default MoviesCarrousel;
