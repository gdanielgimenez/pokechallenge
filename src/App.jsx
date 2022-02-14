import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { Display, Filter } from './components/index';
import { fetchPokemon } from './components/api/api';
import './App.css';

const details = (name) => {
  console.log(name);
};
function App() {
  const [pokemon, setPokemon] = useState(['']);
  const [pokeList, setPokeList] = useState(['']);
  useEffect(() => {
    const pokeFetch = async () => {
      setPokemon(await fetchPokemon());
      setPokeList(await fetchPokemon());
    };
    pokeFetch();
  }, []);
  const dropFilter = (name) => {
    if (name !== 'All') {
      const newList = pokeList.filter((poke) => poke.name === name);
      setPokemon(newList);
    } else {
      setPokemon(pokeList);
    }
  };
  return (
    <div>
      <Filter dropFilter={dropFilter} pokeList={pokeList} />
      <div className="App-header">
        <Typography variant="h3" color="primary"> Pokemon list </Typography>
        <Display pokemon={pokemon} pokelist={pokeList} details={details} />
      </div>
    </div>
  );
}

export default App;
