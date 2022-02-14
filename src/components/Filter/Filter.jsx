/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Box,
  FormControl, MenuItem, Select,
} from '@mui/material';

// eslint-disable-next-line react/prop-types
function Filter({ dropFilter, pokeList }) {
  const [value, setValue] = useState(['']);
  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
    dropFilter(e.target.value);
  };
  return (
    <div>
      <Box sx={{ minWidth: 100 }}>
        <FormControl fullWidth>
          <Select
            id="pokemon-select"
            value={value}
            label="Pokemon"
            onChange={handleChange}
          >
            <MenuItem value="All">All</MenuItem>
            {pokeList.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
              .map((pokemon) => (
                <MenuItem
                  key={pokemon.id}
                  value={pokemon.name}
                >
                  {pokemon.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
export default Filter;
