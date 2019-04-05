require('dotenv').config();
// NPM Packages
const axios = require('axios');
const chalk = require('chalk');
const moment = require('moment');
const Spotify = require('node-spotify-api');
// Files
const fs = require('fs');
const keys = require('./keys');

const spotify = new Spotify(keys.spotify);

function displayCommands() {
  console.log(chalk.underline.bold('Available commands:'));
  console.log(
    chalk.bold(`
    Function                 Command               Search Parameter`)
  );
  console.log(`
    Search concerts:         concert-this       +  <artist/band name>
    Search songs:            spotify-this-song  +  <song name>
    Search movies:           movie-this         +  <movie title>
    Search from text file:   do-what-it-says    +   
    `);
}

function commandError() {
  console.log(
    chalk.red.bold(`
    Type "help" to see list of commands
    `)
  );
}
function bandsInTownSearch(searchQuery) {
  console.log(chalk.underline.bold(`Results for the artist: ${searchQuery}`));
  const QUERY_URL = `https://rest.bandsintown.com/artists/${searchQuery}/events?app_id=codingbootcamp`;
  axios
    .get(QUERY_URL)
    .then(response => {
      const DATE_FORMATTED = moment(response.data[0].datetime).format(
        'MM/DD/YYYY'
      );
      console.log(`
        Venue:      ${response.data[0].venue.name}
        Location:   ${response.data[0].venue.city}              
        Date:       ${DATE_FORMATTED}
        `);
    })
    .catch(err => {
      if (TypeError) {
        console.log(`Hmm... I'm not seeing any concerts for ${searchQuery}`);
      } else {
        console.log(err);
      }
    });
}
function spotifySearch(searchQuery) {
  console.log(chalk.underline.bold(`Results for the song: ${searchQuery}`));
  spotify
    .search({
      type: 'track',
      query: searchQuery,
      limit: 1,
    })
    .then(response => {
      console.log(`
        Artist:   ${response.tracks.items[0].album.artists[0].name}
        Track:    ${response.tracks.items[0].name}
        Preview:  ${response.tracks.items[0].preview_url}
        Album:    ${response.tracks.items[0].album.name}
        `);
    })
    .catch(err => {
      console.log(err);
    });
}

function omdbSearch(searchQuery) {
  console.log(chalk.underline.bold(`Results for the movie: ${searchQuery}`));
  const QUERY_URL = `http://www.omdbapi.com/?t=${searchQuery}&y=&plot=short&apikey=trilogy`;
  axios
    .get(QUERY_URL)
    .then(response => {
      console.log(`
        Title:                      ${response.data.Title}
        Release Year:               ${response.data.Year}              
        IMDB Rating:                ${response.data.imdbRating}
        Rotten Tomatoes Rating:     ${response.data.Ratings[1].Value}
        Country:                    ${response.data.Country}
        Language:                   ${response.data.Language}
        Actors:                     ${response.data.Actors}
        Plot:                       
        ${response.data.Plot}
        `);
    })
    .catch(err => {
      if (TypeError) {
        console.log('Hmm... please check your spelling');
      } else {
        console.log(err);
      }
    });
}

function doWhatItSays() {
  const DATA_BUFFER = fs.readFileSync('random.txt');
  const DATA_JSON = DATA_BUFFER.toString();
  const DATA_ARR = DATA_JSON.split(',');
  const command = DATA_ARR[0];
  const searchQuery = DATA_ARR[1];
  spotifySearch(searchQuery);
}

module.exports = {
  displayCommands,
  commandError,
  bandsInTownSearch,
  spotifySearch,
  omdbSearch,
  doWhatItSays,
};
