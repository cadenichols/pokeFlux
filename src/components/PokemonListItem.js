import React, { Component } from 'react';

export default class PokemonListItem extends Component {
  render() {
    const { pokemon } = this.props;

    return (
      <div className='PokemonListItem'>
        <img src={pokemon.sprites.front_default}/>
        <h3>ID: {pokemon.id}</h3>
        <h3>Name: {titleCase(pokemon.name)}</h3>
      </div>
    )
  }
}

function titleCase(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
