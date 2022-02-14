/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card, CardContent, CardMedia, Container, Typography,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import styles from './Pages.module.css';

function Pages({ pokemon }) {
  const { pokemonId } = useParams();

  const pokemonPage = pokemon.filter((poke) => ((poke.name === pokemonId)));
  return (
    <div>
      <Container maxWidth="md">
        { pokemon && pokemon.length ? (
          <Card className={styles.cont}>
            <CardMedia
              className={styles.media}
              image={pokemonPage[0].imageUrl}
              height="300"
              component="img"
              title="profile"
            />
            <CardContent>
              <Typography variant="h6" color="primary">{pokemonPage[0].name}</Typography>
              <Typography variant="h6">
                {' '}
                Type:
                {pokemonPage[0].types}
              </Typography>
              <Typography variant="h7">
                {' '}
                Weakness:
                {pokemonPage[0].weaknesses[0].type}
              </Typography>

            </CardContent>
          </Card>
        ) : (<p>no users found please reload</p>)}
      </Container>
      <Link to="/">back Home</Link>
    </div>
  );
}
export default Pages;
