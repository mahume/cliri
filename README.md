# Liri Node App
CLI version of the infamous Apple Siri interface

## Getting Started
1. Begin by typing in the following code into the command line:
```
node liri.js
```
*When the app is used without any arguments a suggestion appears.*

![](gifs/liri-no-arg.gif)

2. The first argument provided after `node liri.js` will be a `<command>`.
3. The second argument provided after `node liri.js` will be a `<search parameter>` for the command.

*When adding "help" as the first argument, a list of commands are provided*

![](gifs/help.gif)



#### Concerts
```
node liri.js concert-this + <search parameter>
```
![](gifs/concert.gif)

*If the artist is not touring the app will notify you.*
![](gifs/no-concert.gif)


#### Songs
```
node liri.js spotify-this-song + <search parameter>
```
![](gifs/song.gif)


#### Movies
```
node liri.js movie-this + <search parameter>
```
![](gifs/movie.gif)

*When a movie is misspelled, the app will notify you.*
![](gifs/movie-typo.gif)


#### Text Files
```
node liri.js d0-what-it-says
```
![](gifs/text.gif)
*Command will read a file, parse the data, and search accordingly.*

    
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