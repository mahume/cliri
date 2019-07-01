const moment = require('moment');
const fs = require('fs');
const { bandsInTown, spotifyAPI, omdb } = require('../api');
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
  // Display
  console.log(`
    ${searchFor}       ${command}                ${searchQuery}`);
  console.log(`
    Concerts          concert            +   <artist/band name>
    Songs             spotify            +   <song name>
    Movies            movie              +   <movie title>
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
  // Display
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
  // Display
  console.log(`
    ${resultsFor}      ${searchQuery}`);
  console.log(`
    Artist:           ${album.artists[0].name}
    Track:            ${name}
    Preview:          ${preview_url || 'Unavailable'}
    Album:            ${album.name}
    `);
};

const searchMovie = async query => {
  // Styling
  const resultsFor = makeBoldUnderline('Results For:');
  const searchQuery = makeBoldBlue(query);
  // API
  const response = await omdb(query);
  const { Title, Year, imdbRating, Actors, Plot } = response.data;
  const { Country, Language } = response.data;
  const { Value } = response.data.Ratings[1];
  // Display
  console.log(`
    ${resultsFor}      ${searchQuery}`);
  console.log(`
    Title:            ${Title}
    Release Year:     ${Year}
    IMDB Rating:      ${imdbRating}
    RT Rating:        ${Value}
    Country:          ${Country}
    Language:         ${Language}
    Actors:           ${Actors}
    Plot:             ${Plot}
  `);
};

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
  searchMovie,
  doWhatItSays,
};
