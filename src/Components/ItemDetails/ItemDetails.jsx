import React, { useState } from "react";
import { Button, Modal, makeStyles } from "@material-ui/core";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import Player from '../Player/Player';
import './ItemDetails.scss';

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
  }
}));

const ItemDetails = props => {
  const { title, overview, poster_path, vote_average } = props.location.state.itemData;
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const renderPlayer = (
    <div style={modalStyle} className={classes.paper}>
      <Player />
    </div>
  );

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
          onClick={() => setOpen(true)}
        >
          Watch the Trailer
        </Button>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={`Poster for ${title} film`}
      />
      <Modal
        open={open}
        onClose={handleClose}
      >
        {renderPlayer}
      </Modal>
    </div>
  );
};

export default ItemDetails;
