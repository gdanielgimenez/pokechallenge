/* eslint-disable consistent-return */
import axios from 'axios';

const pokeUrl = 'https://api.pokemontcg.io/v1/cards?subtype=Basic';

// eslint-disable-next-line import/prefer-default-export
export const fetchPokemon = async () => {
  try {
    const { data: { cards } } = await axios.get(pokeUrl);
    console.log(cards);
    return cards;
  } catch (error) {
    console.log(error);
  }
};
