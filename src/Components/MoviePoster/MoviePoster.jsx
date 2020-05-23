import React, { useEffect, useState } from "react";
import { apiKey, movieAPI } from "../../utils/APIs";

const MoviePoster = props => {
  const [movieName, setMovieName] = useState("");

  useEffect(() => {
    movieAPI
      .get("/550?api_key=" + apiKey)
      .then(resp => resp.data)
      .then(data => setMovieName(data.original_title));
  }, []);

  return <div>{movieName}</div>;
};

export default MoviePoster;
