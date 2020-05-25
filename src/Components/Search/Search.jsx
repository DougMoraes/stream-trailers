import React, { useState } from 'react';
import { TextField } from "@material-ui/core";

const Search = props => {
  const [searchValue, setSearchValue] = useState("");


  return (
    <div>
      <TextField label="Search..." onChange={event => setSearchValue(event.target.value)} />
    </div>
  );
}

export default Search;