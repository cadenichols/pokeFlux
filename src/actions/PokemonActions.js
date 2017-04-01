import AppDispatcher from '../AppDispatcher';
import API from '../API';

export function fetchPokemon(id) {
  // 1. dispatch action
  AppDispatcher.dispatch({
    type: 'FETCH_POKEMON',
    payload: {
      id
    }
  });

  // 2. trigger API request
  API.fetchPokemon(id);
}
