const ora = require('ora');
const Spotify = require('node-spotify-api');
const keys = require('../utils/keys');

const spotify = new Spotify(keys.spotify);

const nodeSpotifyAPI = async query => {
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

module.exports = nodeSpotifyAPI;
