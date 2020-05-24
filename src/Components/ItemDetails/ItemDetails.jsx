import React from "react";
import Button from "@material-ui/core/Button";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import'./ItemDetails.scss';

const ItemDetails = props => {
  const { title, overview, poster_path, vote_average } = props.location.state.itemData;

  return (
    <div className="details-container">
      <div className="details-text-area">
        <h2>{title}</h2>
        <section className={"overview-area"}>{overview}</section>
        <section>{`Average Note: ${vote_average}`}</section>
        <Button
          startIcon={<PlayCircleOutline />}
          className="play-button"
          variant="contained"
          color="primary"
        >
          Watch the Trailer
        </Button>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={`Poster for ${title} film`}
      />
    </div>
  );
};

export default ItemDetails;
