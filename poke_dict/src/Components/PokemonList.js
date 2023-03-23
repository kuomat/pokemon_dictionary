import React, { useState, useEffect } from 'react'
import Pokedex from 'pokedex-promise-v2'

function PokemonList({ name }) {
    const P = new Pokedex()
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        // dont do anything if user hasn't typed anything
        if(name === undefined){
            return
        }
        try {
            (async () => {
                const golduck = await P.getPokemonSpeciesByName(name)
                console.log(`pokemon ${golduck}`)
                setPokemon(golduck)
            })();
        } catch (err) {
            console.error(err.message)
        }
    }, [name]) // re-run only when name is changed

    return (
        <>
            <h1>{pokemon.name}</h1>
            <h1>{pokemon.id}</h1>
        </>
    )
}

export default PokemonList