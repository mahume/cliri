const axios = require('axios');
const ora = require('ora');
const Spotify = require('node-spotify-api');

const keys = require('../utils/keys');

const spotify = new Spotify(keys.spotify);

const bandsInTown = async query => {
  const spinner = ora().start();
  try {
    const queryURL = `https://rest.bandsintown.com/artists/${query}/events?app_id=codingbootcamp`;
    const response = await axios.get(queryURL);
    spinner.stop();
    return response;
  } catch (error) {
    spinner.stop();
    console.error(error);
  }
};

const spotifyAPI = async query => {
  const spinner = ora().start();
  try {
    const response = await spotify.search({
      type: 'track',
      query,
      limit: 1,
    });
    spinner.stop();
    return response;
  } catch (error) {
    spinner.stop();
    console.error(error);
  }
};

const omdb = async query => {
  const spinner = ora().start();
  try {
    const queryURL = `http://www.omdbapi.com/?t=${query}&y=&plot=short&apikey=trilogy`;
    const response = await axios.get(queryURL);
    spinner.stop();
    return response;
  } catch (error) {
    spinner.stop();
    console.log(error);
  }
};

module.exports = {
  bandsInTown,
  spotifyAPI,
  omdb,
};
