import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Pokedex from "pokedex-promise-v2";
import PokeSpecific from "./PokeSpecific";

import styles from "./PokeTable.module.css";

const P = new Pokedex();
const PokeTable = ({ targetName }) => {

  const [allPokemons, setAllPokemons] = useState([]);
  const [showedPokemons, setShowedPokemons] = useState([]);

  // show all the pokemons
  useEffect(() => {
    try {
      (async () => {
        const response = await P.getPokedexByName("national");
        const pokemons = response.pokemon_entries.map((pokemon) => ({
          pokeEntry: pokemon.entry_number,
          pokeName: pokemon.pokemon_species.name,
          spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`,
        }));
        setAllPokemons(pokemons);
        setShowedPokemons(pokemons);
      })();
    } catch (e) {
      console.error(e);
    }
  },[]);

  // specific pokemons
  useEffect(() => {
    if (targetName.length !== 0) {
      const lowerTargetName = targetName.toLowerCase();
      const filteredPokemon = allPokemons.filter(function (pokemon) {
        return lowerTargetName === pokemon.pokeName;
      });
      setShowedPokemons(filteredPokemon);
    } else {
      setShowedPokemons(allPokemons);
    }
  }, [targetName]);


  if (!allPokemons) {
    return <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      {showedPokemons.length === 1 ? (
        <ul className={styles["poke-single-table"]}>
          {showedPokemons.map((pokemon) => (
            <Link
              key={pokemon.entry_number}
              to={`/pokemon/?name=${pokemon.pokeName}`}
            ><PokeSpecific pokeObj={pokemon} /></Link>
          ))}
        </ul>
      ) : (
        <ul className={styles["poke-table"]}>
          {showedPokemons.map((pokemon) => (
            <Link
              key={pokemon.entry_number}
              to={`/pokemon/?name=${pokemon.pokeName}`}
            ><PokeSpecific pokeObj={pokemon} /></Link>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export default PokeTable;
