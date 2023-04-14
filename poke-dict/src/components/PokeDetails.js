import React, { useState, useEffect } from "react";
import Pokedex from "pokedex-promise-v2";
import styles from "./PokeDetails.module.css"

const P = new Pokedex();
const PokeDetails = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const name = queryParameters.get("name");
  const [pokemon, setPokemon] = useState(null);

  // get other details about the pokemon
  useEffect(() => {
    try {
      (async () => {
        const response = await P.getPokemonByName(name);
        setPokemon(response);
      })();
    } catch (e) {
      console.error(e);
    }
  }, [pokemon, name]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <h2 className={styles['title']}>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className={styles['image']}/>
      <p className={styles['info']}>Height: {pokemon.height}</p>
      <p className={styles['info']}>Weight: {pokemon.weight}</p>
      <p className={styles['info']}>
        Abilities: {pokemon.abilities.map((a) => a.ability.name).join(", ")}
      </p>
      <p className={styles['info']}>Types: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
    </React.Fragment>
  );
};

export default PokeDetails;
