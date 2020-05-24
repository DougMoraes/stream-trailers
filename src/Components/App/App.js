import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemsCarousel from "../ItemsCarousel/ItemsCarousel";
import ItemDetails from "../ItemDetails/ItemDetails";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Stream Trailers App</h1>
      <Switch>
        <Route path="/details" component={ItemDetails}>
        </Route>
        <Route path="/">
          <h2>Popular Movies</h2>
          <ItemsCarousel category="popular_movies" />
          <h2>Popular Series</h2>
          <ItemsCarousel category="popular_series" />
          <h2>Family Movies</h2>
          <ItemsCarousel category="family_movies" />
          <h2>Documentaries</h2>
          <ItemsCarousel category="documentary" />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
