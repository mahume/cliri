require("dotenv").config()
const keys = require("./keys.js")
const axios = require('axios')
const Spotify = require('node-spotify-api')
const moment = require('moment')
const func = require('./functions')


const spotify = new Spotify(keys.spotify);


let command = process.argv[2]
let searchQuery = process.argv.slice(3).join(" ")

switch (command) {
    case 'help':
        func.displayCommands()
        break;
    case 'concert-this':
        console.log('Searching for concert')
        break;
    case 'spotify-this-song':
        console.log('Searching for song')
        spotifySearch();
        break;
    case 'movie-this':
        console.log('Searching for movie')
        break;
    case 'do-what-it-says':
        console.log('Do what it says')
        break;
    default:
        console.log(chalk.red.inverse.bold(`Type "help" to see list of commands`))
        break;
}
 
function spotifySearch() {
    spotify
    .search({
        type: 'track',
        query: searchQuery,
        limit: 1
    })
    .then(function(response) {
        // Song's name        
        // Preview link 
        const artist = response.tracks.items[0].album.artists[0].name
        const track = response.tracks.items[0].name
        const link = response.tracks.items[0].preview_url
        const album = response.tracks.items[0].album.name
        console.log(`
        Artist: ${artist}
        Track: ${track}
        Preview: ${link}
        Album: ${album}
        `);
    })
    .catch(function(err) {
        console.log(err)
    })
}
