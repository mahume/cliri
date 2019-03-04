require("dotenv").config()

// Files
const func = require('./functions')

let command = process.argv[2]
searchQuery = process.argv.slice(3).join(" ")

switch (command) {
    case 'help':
        func.displayCommands()
        break;
    case 'concert-this':
        console.log('Searching for concert')
        break;
    case 'spotify-this-song':
        func.spotifySearch()
        break;
    case 'movie-this':
        func.omdbSearch()
        break;
    case 'do-what-it-says':
        func.doWhatItSays()
        break;
    default:
        func.commandError()
        break;
}

