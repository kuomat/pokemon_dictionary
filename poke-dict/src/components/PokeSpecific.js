import React from "react";
import styles from "./PokeSpecific.module.css";

const PokeSpecific = ({pokeObj}) => {
  return (
    <React.Fragment>
      <li className={styles['poke-entry']} key={pokeObj.pokeEntry}>
        <img className={styles['poke-image']} src={pokeObj.spriteUrl} alt={pokeObj.pokeName} />
        <h2>
          {pokeObj.pokeName.charAt(0).toUpperCase() +
            pokeObj.pokeName.slice(1)}
        </h2>
      </li>
    </React.Fragment>
  );
};

export default PokeSpecific;
