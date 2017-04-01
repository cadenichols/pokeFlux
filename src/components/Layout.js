import React, { Component } from 'react';
import PokemonStore from '../stores/PokemonStore';
import GetPokemonInput from './GetPokemonInput';

import PokemonList from './PokemonList';

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: PokemonStore.getAll()
    };
    
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    PokemonStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    PokemonStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      pokemon: PokemonStore.getAll()
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon</h1>
        <GetPokemonInput />

        <PokemonList pokemon={this.state.pokemon} />
      </div>
    )
  }
}
