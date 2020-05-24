import React from "react";
import MoviesCarrousel from "../MoviesCarrousel/MoviesCarrousel";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>Stream Trailers App</h1>
      <h2>Popular Movies</h2>
      <MoviesCarrousel category="popular_movies" />
      <h2>Popular Series</h2>
      <MoviesCarrousel category="popular_series" />
      <h2>Family Movies</h2>
      <MoviesCarrousel category="family_movies" />
      <h2>Documentaries</h2>
      <MoviesCarrousel category="documentary" />
    </div>
  );
}

export default App;
