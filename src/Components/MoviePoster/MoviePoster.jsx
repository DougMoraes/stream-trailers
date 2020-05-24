import React from "react";
import { Link } from "react-router-dom";
import "./MoviePoster.scss";

const MoviePoster = props => {
  const { title, poster_path } = props.itemData

  return (
    <Link to={{ pathname: "/details", state: { itemData: props.itemData }}}>
      <div className="item-poster hvr-grow-shadow">
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={`Poster for ${title} film`}
        />
        <div className="item-name">{title}</div>
      </div>
    </Link>
  );
};

export default MoviePoster;
