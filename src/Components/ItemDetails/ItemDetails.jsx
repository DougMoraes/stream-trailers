import React from "react";

const ItemDetails = props => {
  const { title, overview, poster_path } = props.location.state.itemData;

  return (
    <div>
      <h2>{title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={`Poster for ${title} film`}
      />
      <section>{overview}</section>
    </div>
  );
};

export default ItemDetails;
