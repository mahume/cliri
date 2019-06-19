require('dotenv').config();
const func = require('./functions');

const command = process.argv[2];
const searchQuery = process.argv.slice(3).join(' ');

switch (command) {
  case 'help':
    func.displayCommands();
    break;
  case 'concert-this':
    func.bandsInTownSearch(searchQuery);
    break;
  case 'spotify-this-song':
    func.spotifySearch(searchQuery);
    break;
  case 'movie-this':
    func.omdbSearch(searchQuery);
    break;
  case 'do-what-it-says':
    func.doWhatItSays();
    break;
  default:
    func.commandError();
    break;
}
