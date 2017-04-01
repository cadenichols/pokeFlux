import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';

let _pokemon = [];

class PokemonStore extends EventEmitter {
  constructor() {
    super();
    
    AppDispatcher.register(action => {
      switch (action.type) {
        case 'FETCH_POKEMON_SUCCESS':
          _pokemon.push(action.payload);
          this.emit('CHANGE');
          break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return _pokemon;
  }
}

export default new PokemonStore();
