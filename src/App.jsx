import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Display, Filter, Pages } from './components/index';
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
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Filter dropFilter={dropFilter} pokeList={pokeList} />
            <div className="App-header">
              <Typography variant="h3" color="primary"> Pokemon list </Typography>
              <Display pokemon={pokemon} pokelist={pokeList} details={details} />
            </div>
          </Route>
          <Route exact path="/:pokemonId">
            <Pages pokemon={pokemon} />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
