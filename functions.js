require("dotenv").config()
// NPM Packages
const axios = require('axios')
const chalk = require('chalk')
const Spotify = require('node-spotify-api')
// Files
const fs = require('fs')
const keys = require('./keys')

const spotify = new Spotify(keys.spotify);

function displayCommands() {
    console.log(chalk.underline.bold('Available commands:'))
    console.log(chalk.bold(`
    Function            Command               Search Parameter`))
    console.log(`
    Search concerts:         concert-this       +  <artist/band name>
    Search songs:            spotify-this-song  +  <song name>
    Search movies:           movie-this         +  <movie title>
    Search from text file:   do-what-it-says    +   
    `)
}

function commandError() {
    console.log(chalk.red.bold(`Type "help" to see list of commands`))
}

function spotifySearch() {
    console.log(`Results for the song: ${searchQuery}`)
    spotify
    .search({
        type: 'track',
        query: searchQuery,
        limit: 1
    })
    .then(function(response) {
        console.log(`
        Artist:   ${response.tracks.items[0].album.artists[0].name}
        Track:    ${response.tracks.items[0].name}
        Preview:  ${response.tracks.items[0].preview_url}
        Album:    ${response.tracks.items[0].album.name}
        `);
    })
    .catch(function(err) {
        console.log(err)
    })
}

function omdbSearch() {
    console.log(`Results for the movie: ${searchQuery}`)
    const queryURL = `http://www.omdbapi.com/?t=${searchQuery}&y=&plot=short&apikey=trilogy`
    axios.get(queryURL)
    .then(function(response) {
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
    .catch(function(err) {
        console.log(err)
    })
}

function doWhatItSays() {
    const dataBuffer = fs.readFileSync('random.txt')
    const dataJSON = dataBuffer.toString()
    const dataArr = dataJSON.split(',')
    command = dataArr[0]
    searchQuery = dataArr[1]
    spotifySearch()
}

module.exports = {
    displayCommands,
    commandError,
    spotifySearch,
    omdbSearch,
    doWhatItSays
}