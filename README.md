# Liri Node App
CLI version of the infamous Apple Siri interface

## Getting Started
1. Begin by typing in the following code into the command line:
```
node liri.js
```
*When the app is used without any arguments a suggestion appears.*

![](gifs/liri-no-arg.gif)

2. The first argument provided after `node liri.js` will be a command.
3. The second argument provided after `node liri.js` will be a `<search parameter>` for the command.

*When adding "help" as the first argument, a list of commands are provided*

[![asciicast](https://asciinema.org/a/Ud6cpGLmmKcPo39c03m3jlUDI.svg)](https://asciinema.org/a/Ud6cpGLmmKcPo39c03m3jlUDI)


#### Concerts
```
node liri.js concert-this + <search parameter>
```
*If the artist is not touring the app will notify you.*

[![asciicast](https://asciinema.org/a/uqq6dgOZDLl4UYjXDlJCcSayH.svg)](https://asciinema.org/a/uqq6dgOZDLl4UYjXDlJCcSayH)


#### Songs
```
node liri.js spotify-this-song + <search parameter>
```
[![asciicast](https://asciinema.org/a/THQiXKUOsvNQUyW14jV5T2D4e.svg)](https://asciinema.org/a/THQiXKUOsvNQUyW14jV5T2D4e)


#### Movies
```
node liri.js movie-this + <search parameter>
```
*When a movie is misspelled, the app will notify you.*

[![asciicast](https://asciinema.org/a/q1i1dZG4wXJ7inwLnE4r2B8fM.svg)](https://asciinema.org/a/q1i1dZG4wXJ7inwLnE4r2B8fM)


#### Text Files
```
node liri.js d0-what-it-says
```
*Command will read a file, parse the data, and search accordingly.*
    
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