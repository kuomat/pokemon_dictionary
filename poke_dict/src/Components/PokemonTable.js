import { useState } from "react";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";

function PokemonTable() {
  const [filteredName, setFilteredName] = useState(undefined);
  const [filteredAttr, setFilteredAttr] = useState("");

  return (
    <>
      <SearchBar onSearch={(query) => setFilteredName(query)} />
      <PokemonList name={filteredName} />
    </>
  );
}

export default PokemonTable;
