const fs = require('fs');
const path = require('path');
const searchConcert = require('./searchConcert');
const searchSong = require('./searchSong');
const searchMovie = require('./searchMovie');
const displayCommands = require('./displayCommands');

const searchTextFile = () => {
  // Parsing
  const filename = path.join(__dirname, '../utils/textFile.txt');
  const data = fs
    .readFileSync(filename)
    .toString()
    .split(' ');
  const command = data[0];
  const searchQuery = data.slice(1).join(' ');

  switch (command) {
    case 'concert':
      searchConcert(searchQuery);
      break;
    case 'song':
      searchSong(searchQuery);
      break;
    case 'movie':
      searchMovie(searchQuery);
      break;
    default:
      displayCommands();
      break;
  }
};

module.exports = searchTextFile;
