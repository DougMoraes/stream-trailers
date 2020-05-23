import React from 'react';
import { Typography } from "@material-ui/core";
import MoviePoster from '../MoviePoster/MoviePoster';

function App() {
  return (
    <Typography className="App">
      <h1>
        Stream Trailers App 
      </h1>
      <MoviePoster />
    </Typography>
  );
}

export default App;
