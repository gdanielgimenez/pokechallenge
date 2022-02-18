/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box,
  Card, CardContent, CardMedia, CircularProgress, Container, Grid, Typography,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import styles from './Pages.module.css';

function Pages({ pokemon }) {
  const { pokemonId } = useParams();
  const pokemonPage = pokemon.filter((poke) => ((poke.name === pokemonId)));
  return (
    <div>
      <Typography variant="h1" color="primary">
        {pokemonPage[0].name}
      </Typography>
      <Container className={styles.cont}>
        { pokemon && pokemon.length ? (
          <Grid container spacing={4}>
            <Grid item lg={3}>
              <Card className={styles.card}>
                <CardContent>
                  <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                    <CircularProgress variant="indeterminate" color="success" size={150} thickness={4.5} className={styles.circle} />
                    <Box
                      sx={{
                        top: 10,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography variant="h3" color="seagreen">
                        {pokemonPage[0].hp}
                      </Typography>
                      <Typography variant="caption" color="seagreen">
                        hp
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={6}>
              <Card className={styles.card2}>
                <CardMedia
                  className={styles.media}
                  image={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonPage[0].nationalPokedexNumber}.svg`}
                  height="150"
                  component="img"
                  title="profile"
                />
                <CardContent>
                  <Typography color="brown" variant="h4">
                    {' '}
                    Type:
                    {pokemonPage[0].types[0]}
                  </Typography>
                  <Typography color="textSecondary" variant="h6">
                    {' '}
                    pokedex number :
                    {' '}
                    {pokemonPage[0].nationalPokedexNumber}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3}>
              <Card className={styles.card3}>
                <CardContent>
                  <Typography variant="h4" color="#ba000d"> Attacks : </Typography>

                  {' '}
                  {pokemonPage[0].attacks.map((w) => (
                    <Typography variant="h5" color="primary">
                      {w.name}
                      {' '}
                      {' '}
                      {w.damage}
                    </Typography>
                  ))}
                  <Typography variant="h6" color="#ba000d"> Weakness : </Typography>
                  <Typography variant="h6" color="primary">
                    {' '}
                    {pokemonPage[0].weaknesses[0].type}
                    {' '}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        ) : (<p>no users found please reload</p>)}
      </Container>
      <Link className={styles.link} to="/">Back Home</Link>
    </div>
  );
}
export default Pages;
