require('dotenv').config();
const {
  displayCommands,
  searchConcert,
  searchSong,
  omdbSearch,
  doWhatItSays,
} = require('./helpers/functions');

const cliriCommand = process.argv[2];
const searchQuery = process.argv.slice(3).join(' ');

switch (cliriCommand) {
  case 'concert':
    searchConcert(searchQuery);
    break;
  case 'spotify':
    searchSong(searchQuery);
    break;
  case 'movie-this':
    omdbSearch(searchQuery);
    break;
  case 'do-what-it-says':
    doWhatItSays();
    break;
  default:
    displayCommands();
    break;
}
