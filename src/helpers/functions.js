require('dotenv').config();
// NPM Packages
const axios = require('axios');
const moment = require('moment');
const Spotify = require('node-spotify-api');
// Files
const fs = require('fs');
const { bandsInTown, spotifyAPI } = require('../api/api');
const chalkStyling = require('../utils/chalkStyling');

const {
  makeGreen,
  makeBoldBlue,
  makeBoldRed,
  makeBoldUnderline,
  makeItalic,
} = chalkStyling;

const displayCommands = () => {
  // Styling
  const searchFor = makeBoldUnderline('Search For:');
  const command = makeBoldRed('Command');
  const searchQuery = makeBoldBlue('Search Query');
  const searchSyntax = makeItalic('Search Syntax:');
  const nodePath = makeGreen('node src/cliri.js');
  // Logging
  console.log(`
    ${searchFor}       ${command}                ${searchQuery}`);
  console.log(`
    Concerts          concert            +   <artist/band name>
    Songs             spotify            +   <song name>
    Movies            movie-this         +   <movie title>
    Text file         do-what-it-says`);
  console.log(`
    ${searchSyntax}    ${nodePath} ${command} ${searchQuery}
  `);
};

const searchConcert = async query => {
  // Styling
  const resultsFor = makeBoldUnderline('Results For:');
  const searchQuery = makeBoldBlue(query);
  // API
  const response = await bandsInTown(query);
  const { venue, datetime } = response.data[0];
  const dateFormatted = moment(datetime).format('MM/DD/YYYY');
  // Console Logging
  console.log(`
    ${resultsFor}      ${searchQuery}`);
  console.log(`
    Venue:            ${venue.name}
    Location:         ${venue.city}
    Date:             ${dateFormatted}
    `);
};

const searchSong = async query => {
  // Styling
  const resultsFor = makeBoldUnderline('Results For:');
  const searchQuery = makeBoldBlue(query);
  // API
  const response = await spotifyAPI(query);
  const { name, preview_url, album } = response.tracks.items[0];
  // Console Logging
  console.log(`
    ${resultsFor}      ${searchQuery}`);
  console.log(`
    Artist:           ${album.artists[0].name}
    Track:            ${name}
    Preview:          ${preview_url || 'Unavailable'}
    Album:            ${album.name}
    `);
  // spotify
  //   .search({
  //     type: 'track',
  //     query,
  //     limit: 1,
  //   })
  //   .then(response => {})
  //   .catch(err => {
  //     console.log(err);
  //   });
};

function omdbSearch(query) {
  // Styling
  const resultsFor = makeBoldUnderline('Results For:');
  const queryURL = `http://www.omdbapi.com/?t=${query}&y=&plot=short&apikey=trilogy`;
  axios
    .get(queryURL)
    .then(response => {
      const {
        Title,
        Year,
        imdbRating,
        Ratings,
        Country,
        Language,
        Actors,
        Plot,
      } = response.data;
      console.log(`
    ${resultsFor}      ${searchQuery}`);
      console.log(`Title:            ${Title}`);
      console.log(`Release Year:     ${Year}`);
      console.log(`IMDB Rating:      ${imdbRating}`);
      console.log(`RT Rating:        ${Ratings[1].Value}`);
      console.log(`Country:          ${Country}`);
      console.log(`Language:         ${Language}`);
      console.log(`Actors:           ${Actors}`);
      console.log(`Plot:             ${Plot}`);
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
  searchSong(searchQuery);
}

module.exports = {
  displayCommands,
  searchConcert,
  searchSong,
  omdbSearch,
  doWhatItSays,
};
