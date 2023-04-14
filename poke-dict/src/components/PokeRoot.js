import React, { useState } from "react";

import SearchBar from "./SearchBar";
import PokeTable from "./PokeTable";

const PokeRoot = () => {
  const [searchedName, setSearchedName] = useState("");

  const handleSearch = (name) => {
    setSearchedName(name)
  }

  return (
    <React.Fragment>
      <SearchBar onSearch={handleSearch} />
      <PokeTable targetName={searchedName} />
    </React.Fragment>
  );
};

export default PokeRoot;
