import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
function PokemonDeck() {
  const pokemonDeck = pokedex.map(p =>
    (<li key={p.number}>{p.name}</li>
    ));

  return (
  <ul>
    {pokemonDeck}
  </ul>
  );
}
const element = <PokemonDeck />;

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
