import React from 'react'

function Pokecard(props) {

  const pokemon_api = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  let image = `${pokemon_api}${props.id}.png`
  return (
    <div className='Pokecard'>
      <div className='card-title'>{props.name}</div>
      <img className='card-image' src={image} alt="pokemon"/>
      <div className='card-type'> {props.type} </div>
      <div className='card-exp'> {props.base_experience} </div>
    </div>
  );
}

export default Pokecard