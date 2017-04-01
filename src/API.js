// import axios from 'axios';
import { get } from 'axios';
import * as ServerActions from './actions/ServerActions';

const API = {
  fetchPokemon(id) {
    get(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => {
        ServerActions.fetchPokemonSuccess(res.data);
      })
      .catch(err => {
        ServerActions.fetchPokemonFailure(err);
      })
  }
}

export default API;
