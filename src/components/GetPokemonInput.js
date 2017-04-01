import React, { Component } from 'react';
import { fetchPokemon } from '../actions/PokemonActions';

export default class GetPokemonInput extends Component {
  constructor(props) {
    super(props);
    this.fetchPokemon = this.fetchPokemon.bind(this);
  }

  fetchPokemon(e) {
    e.preventDefault();
    let id = this.idInput.value;
    fetchPokemon(id);
    this.idInput.value = '';
  }

  render() {
    return (
      <form onSubmit={this.fetchPokemon}>
        <input
          type="number"
          min={1}
          max={721}
          required
          ref={el => this.idInput = el}
        />
        <button>Get Pokemon</button>
      </form>
    )
  }
}
