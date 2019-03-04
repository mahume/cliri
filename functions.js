const chalk = require('chalk')

function displayCommands() {
    console.log(chalk.underline.bold('Here are the available commands:'))
    console.log(`
    Search concerts:    concert-this
    Search songs:       spotify-this-song
    Search movies:      movie-this
    Search from file:   do-what-it-says
    `)
}

module.exports = {
    displayCommands
}