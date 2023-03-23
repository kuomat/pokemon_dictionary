import PokemonList from './PokemonList';
import {useState} from "react"

function SearchBar({ onSearch }) {
  const [value, setValue] = useState("")

  return (
    <>
        <input
          type="text"
          value={value}
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
        />

        <button onClick={()=>{onSearch(value)}}>Search!</button>
    </>
  );
}

export default SearchBar;
