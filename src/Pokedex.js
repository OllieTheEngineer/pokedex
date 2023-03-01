import React from 'react';
import Pokecard from './Pokecard';

function Pokedex(props) {
  return (
    <div>
      <h1> PokeDex Game </h1>
      <div>
      {props.pokemon.map(poke => (
        <Pokecard
          id={poke.id}
          name={poke.name}
          type={poke.type}
          exp={poke.base_experience}/>
      ))}
      </div>
      <h3> Total Experiences: {props.exp} </h3>
    </div>
  )
}

Pokedex.defaultProps = {
  pokemon: [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]
};

export default Pokedex;