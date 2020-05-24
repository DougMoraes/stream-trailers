import React from "react";
import { Link } from "react-router-dom";
import "./MoviePoster.scss";

const MoviePoster = props => {
  return (
    <Link to={{pathname: "/details", state: { props }}}>
      <div className="movie-poster hvr-grow-shadow">
        <img
          src={`https://image.tmdb.org/t/p/w200${props.posterPath}`}
          alt={`Poster for ${props.movieName} film`}
        />
        <div data-testid="movie-name">{props.movieName}</div>
      </div>
    </Link>
  );
};

export default MoviePoster;
