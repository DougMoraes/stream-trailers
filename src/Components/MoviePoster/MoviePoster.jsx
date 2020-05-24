import React from "react";
import "./MoviePoster.scss";

const MoviePoster = props => {
  return (
    <div className="movie-poster hvr-grow-shadow">
      <img
        src={`https://image.tmdb.org/t/p/w200${props.posterPath}`}
        alt={`Poster for ${props.movieName} film`}
      />
      <div data-testid="movie-name">{props.movieName}</div>
    </div>
  );
};

export default MoviePoster;
