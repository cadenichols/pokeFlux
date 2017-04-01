import AppDispatcher from '../AppDispatcher';
import uuid from 'uuid';

export function fetchPokemonSuccess(pokemon) {
  pokemon.key = uuid();

  AppDispatcher.dispatch({
    type: 'FETCH_POKEMON_SUCCESS',
    payload: pokemon
  });
}

export function fetchPokemonFailure(err) {
  AppDispatcher.dispatch({
    type: 'FETCH_POKEMON_FAILURE',
    payload: err
  });
}
