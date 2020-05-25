import React, { useState, useEffect } from "react";
import { TextField, withStyles } from "@material-ui/core";
import ItemPoster from "../ItemPoster/ItemPoster";
import { apiKey, searchMultiAPI } from "../../utils/APIs";
import "./Search.scss"

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white"
    },
    "& label": {
      color: "white"
    },
    "& input": {
      color: "white"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        color: "white"
      },
      "&:hover fieldset": {
        borderColor: "white",
        color: "white"
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        color: "white"
      }
    }
  }
})(TextField);

const Search = props => {
  const [searchValue, setSearchValue] = useState("");
  const [seriesToDisplay, setSeriesToDisplay] = useState([]);
  const [moviesToDisplay, setMoviesToDisplay] = useState([]);

  useEffect(() => {
    const setEmptyResults = () => {
      setSeriesToDisplay([]);
      setMoviesToDisplay([]);
    }

    const searchItemsByName = () => {
      searchMultiAPI
        .get(`/multi?api_key=${apiKey}&query=${searchValue}`)
        .then(resp => resp.data)
        .then(data => {
          setSeriesToDisplay(
            data.results.filter(item => item.media_type === "tv")
          );
          setMoviesToDisplay(
            data.results.filter(item => item.media_type === "movie")
          );
        });
    };

    searchValue.length < 3 ? setEmptyResults() : searchItemsByName();
  }, [searchValue]);

  return (
    <div className="search-area">
      <CssTextField
        label="Search..."
        variant="outlined"
        onChange={e => setSearchValue(e.target.value)}
      />
      <div>
        <h2>Movies</h2>
        {moviesToDisplay.map(item => (
          <ItemPoster itemData={item} key={item.id} />
        ))}
        <h2>Series</h2>
        {seriesToDisplay.map(item => (
          <ItemPoster itemData={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Search;
