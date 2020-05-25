import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";import ItemsCarousel from "../ItemsCarousel/ItemsCarousel";
import ItemDetails from "../ItemDetails/ItemDetails";
import Search from "../Search/Search";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <h1>Stream Trailers App</h1>
          <Link to="/search">
            <Button startIcon={<SearchIcon />} variant="outlined" color="primary" className="search-button">
              Search
            </Button>
          </Link>
        </div>
        <Switch>
          <Route path="/details" component={ItemDetails}></Route>
          <Route path="/search" component={Search}></Route>
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
