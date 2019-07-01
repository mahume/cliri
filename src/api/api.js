const axios = require('axios');
const Spotify = require('node-spotify-api');

const keys = require('../utils/keys');

const spotify = new Spotify(keys.spotify);

const bandsInTown = async query => {
  const queryURL = `https://rest.bandsintown.com/artists/${query}/events?app_id=codingbootcamp`;
  const response = await axios.get(queryURL);
  return response;
};

const spotifyAPI = async query => {
  // API
  const response = await spotify.search({
    type: 'track',
    query,
    limit: 1,
  });
  return response;
};

module.exports = {
  bandsInTown,
  spotifyAPI,
};
