import React from 'react';
import Carousel from "react-material-ui-carousel";
import MoviePoster from "../MoviePoster/MoviePoster"

const MoviesCarrousel = props => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #2",
      description: "Hello World!"
    }
  ]

  return (
    <Carousel>
      {
        items.map(item => <MoviePoster />)
      }
    </Carousel>
  )
}

export default MoviesCarrousel;