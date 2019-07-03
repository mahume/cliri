#!/usr/bin/env node

const displayCommands = require('./helpers/displayCommands');
const searchConcert = require('./helpers/searchConcert');
const searchSong = require('./helpers/searchSong');
const searchMovie = require('./helpers/searchMovie');
const searchTextFile = require('./helpers/searchTextFile');

const cliriCommand = process.argv[2];
const searchQuery = process.argv.slice(3).join(' ');

switch (cliriCommand) {
  case 'concert':
    searchConcert(searchQuery);
    break;
  case 'song':
    searchSong(searchQuery);
    break;
  case 'movie':
    searchMovie(searchQuery);
    break;
  case 'text':
    searchTextFile();
    break;
  default:
    displayCommands();
    break;
}
