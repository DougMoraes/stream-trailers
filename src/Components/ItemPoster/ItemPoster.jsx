import React from "react";
import { Link } from "react-router-dom";
import "./ItemPoster.scss";

const ItemPoster = props => {
  const { title, name, poster_path } = props.itemData
  const itemName = title ? title : name;

  return (
    <Link to={{ pathname: "/details", state: { itemData: props.itemData } }}>
      <div className="item-poster hvr-grow-shadow">
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={`Poster for ${itemName} film`}
          style={{ height: "93%" }}
        />
        <div className="item-name">{itemName}</div>
      </div>
    </Link>
  );
};

export default ItemPoster;
