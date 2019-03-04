# Liri Node App
CLI version of the infamous Apple Siri interface

## Getting Started
1. Begin by typing in the following code
`node liri.js`
2. The first argument provided after "liri.js" will be a command.
3. The second argument provided after "liri.js" will be the specifier to the command.
4. When the app is used without any arguments a suggestion appears.

[![asciicast](https://asciinema.org/a/rP4pfH06thFyR0I2qmTCepI3n.svg)](https://asciinema.org/a/rP4pfH06thFyR0I2qmTCepI3n)

5. When adding "help" as an argument, a list of commands are provided

[![asciicast](https://asciinema.org/a/Ud6cpGLmmKcPo39c03m3jlUDI.svg)](https://asciinema.org/a/Ud6cpGLmmKcPo39c03m3jlUDI)

6. Concerts
    * Command - "concert-this"
    * Specifier - Artist or band name (ex. Odesza)
    * If the artist is not touring the app will notify you.

[![asciicast](https://asciinema.org/a/uqq6dgOZDLl4UYjXDlJCcSayH.svg)](https://asciinema.org/a/uqq6dgOZDLl4UYjXDlJCcSayH)

5. Songs
    * Command - "spotify-this-song"
    * Specifier - Song name (ex. Thriller)

[![asciicast](https://asciinema.org/a/THQiXKUOsvNQUyW14jV5T2D4e.svg)](https://asciinema.org/a/THQiXKUOsvNQUyW14jV5T2D4e)

6. Movies
    * Command - "movie-this"
    * Specifier - Movie title (ex. The Matrix)
    * When a movie is misspelled, the app will notify you.

[![asciicast](https://asciinema.org/a/q1i1dZG4wXJ7inwLnE4r2B8fM.svg)](https://asciinema.org/a/q1i1dZG4wXJ7inwLnE4r2B8fM)

7. Text Files
    * Command - "do-what-it-says"
    * Command will read a file, parse the data, and search accordingly
    
[![asciicast](https://asciinema.org/a/7P2MAK1niym3yC7cJg20N3Lir.svg)](https://asciinema.org/a/7P2MAK1niym3yC7cJg20N3Lir)


## Built With
* Node.js
* npm
    * axios
    * chalk
    * dotenv
    * moment
    * node-spotify-api

## Author
Mike Hume