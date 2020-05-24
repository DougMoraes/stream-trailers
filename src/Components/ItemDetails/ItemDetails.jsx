import React from "react";

const ItemDetails = props => {
  console.log(props)
  return <div>{props.location.state.props.movieName}</div>;
};

export default ItemDetails;
