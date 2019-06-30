require('dotenv').config();
const {
  displayCommands,
  bandsInTownSearch,
  spotifySearch,
  omdbSearch,
  doWhatItSays,
  commandError,
} = require('./helpers/functions');

const cliriCommand = process.argv[2];
const searchQuery = process.argv.slice(3).join(' ');

switch (cliriCommand) {
  case 'help':
    displayCommands();
    break;
  case 'concert-this':
    bandsInTownSearch(searchQuery);
    break;
  case 'spotify-this-song':
    spotifySearch(searchQuery);
    break;
  case 'movie-this':
    omdbSearch(searchQuery);
    break;
  case 'do-what-it-says':
    doWhatItSays();
    break;
  default:
    commandError();
    break;
}
