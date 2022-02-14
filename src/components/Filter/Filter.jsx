/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  FormControl, MenuItem, Select, TextField, Toolbar,
} from '@mui/material';

// eslint-disable-next-line react/prop-types
function Filter({ dropFilter, pokeList, search }) {
  const [value, setValue] = useState(['']);
  const [searchValue, setSearchValue] = useState(['']);
  const handleChange = (e) => {
    setValue(e.target.value);
    dropFilter(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    search(searchValue);
    setSearchValue('');
  };
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary" enableColorOnDark>
          <Toolbar>
            <Box sx={{ minWidth: 220 }}>
              <FormControl fullWidth sx={{ bgcolor: 'aliceblue' }}>
                <Select
                  defaultValue="All"
                  variant="standard"
                  id="pokemon-select"
                  placeholder="pokemon"
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
            <form onSubmit={handleSubmit}>
              <TextField
                id="standard-basic"
                variant="standard"
                placeholder="Search"
                sx={{
                  height: '30px', bgcolor: 'white', marginLeft: 2, m: 1,
                }}
                required
                onChange={handleSearch}
                value={searchValue}
              />
              <Button type="submit" size="small" variant="contained">Search</Button>
            </form>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
export default Filter;
