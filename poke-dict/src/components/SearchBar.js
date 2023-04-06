import React, { createRef, useRef } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const inputSearch = useRef(null);

  const clickHandler = () => {
    onSearch(inputSearch.current.value)
  };

  return (
    <div className={styles["search-container"]}>
      <input
        className={styles["search-input"]}
        type="text"
        id="searchPokemon"
        name="searchPokemon"
        ref={inputSearch}
      />
      <button className={styles["search-button"]} onClick={clickHandler}>
        Search!
      </button>
    </div>
  );
};

export default SearchBar;
