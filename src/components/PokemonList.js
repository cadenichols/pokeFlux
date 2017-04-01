import React, { Component } from 'react';

import PokemonListItem from './PokemonListItem'

export default class PokemonList extends Component {
  render() {
    const { pokemon } = this.props;

    return (
      <div className='PokemonList'>
        {pokemon.map(pokemonObj => (
          <PokemonListItem pokemon={pokemonObj} key={pokemonObj.key} />
        ))}
      </div>
    )
  }
}
