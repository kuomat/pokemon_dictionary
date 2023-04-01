import React, { useState, useEffect } from "react";
import Pokedex from "pokedex-promise-v2";
import PokeSpecific from "./PokeSpecific";

import styles from "./PokeTable.module.css";

const P = new Pokedex();
const PokeTable = () => {
  const [allPokemons, setAllPokemons] = useState([])

  useEffect(() => {
    try {
      (async () => {
        const response = await P.getPokedexByName("national");
        const pokemons = response.pokemon_entries.map((pokemon) => ({
          pokeEntry: pokemon.entry_number,
          pokeName: pokemon.pokemon_species.name,
          spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`,
        }))
        setAllPokemons(pokemons);
      })();
    } catch (e) {
      console.error(e);
    }
  }, []);

  if (!allPokemons) return <p>Loading...</p>;

  return (
    <React.Fragment>
       <ul className={styles['poke-table']}>
            {allPokemons.map((pokemon) => (
                <PokeSpecific pokeObj={pokemon} />
            ))}
        </ul>
    </React.Fragment>
  );
};

export default PokeTable;
