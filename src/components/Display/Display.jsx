/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card, CardMedia, Grid, Typography, CardContent, Container, CardActions,
} from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Display.module.css';

function Display({ pokemon }) {
  const pokemonList = pokemon.length ? (
    pokemon.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
      .map((poke) => (
        <Grid item lg={3} key={poke.id}>
          <Card variant="outlined" className={styles.card}>
            <CardMedia
              className={styles.profile}
              component="img"
              image={poke.imageUrlHiRes}
              alt="profile"
            />
            <CardContent>
              <Typography variant="body1" color="primary" className={styles.cardtitle}>
                {poke.name}
              </Typography>
              <CardActions>
                <Link className={styles.link} to={`${poke.name}`}>
                  details
                </Link>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      ))) : (<p> loading...</p>);
  return (
    <Container maxWidth="md">
      <Grid container columnSpacing={{ lg: 6 }}>
        {pokemonList}
      </Grid>
    </Container>
  );
}
export default Display;
