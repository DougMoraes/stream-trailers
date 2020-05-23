import React, { useEffect, useState } from "react";
import { apiKey, movieAPI } from "../../utils/APIs";
import './MoviePoster.scss';

const MoviePoster = props => {
  const [movieName, setMovieName] = useState("");
  const [posterPath, setPosterPath] = useState("");

  useEffect(() => {
    movieAPI
      .get("/550?api_key=" + apiKey)
      .then(resp => resp.data)
      .then(data => {
        setMovieName(data.original_title)
        setPosterPath(data.poster_path)
      });
  }, []);

  return (
    <div className="movie-poster">
      <img
        src={`https://image.tmdb.org/t/p/w200${posterPath}`}
        alt={`Poster for ${movieName} film`}
      />
      {movieName}
    </div>
  );
};

export default MoviePoster;
