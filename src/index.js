import React from 'react';
import { render } from 'react-dom';
import Layout from './components/Layout';
import './style.css';

import './stores/PokemonStore';

render(
  <Layout />,
  document.getElementById('root')
);
