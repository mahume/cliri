# Liri Node App
CLI version of the infamously bad Apple Siri interface

## Getting Started
1. Begin by typing in the following code into the command line:
```
node liri.js
```
*When the app is used without any arguments a suggestion appears.*
![](gifs/no-args-gif.gif)


2. The first argument provided after `node liri.js` will be a `<command>`.
```
node liri.js help
```
*This will display a list of acceptable commands*
![](gifs/help.gif)


3. The second argument provided after `node liri.js` will be a `<search parameter>` for the command. The following are the searchable categories.


#### Concerts
```
node liri.js concert-this + <Artist/Band name>
```
![](gifs/concert.gif)

*If the artist is not touring the app will notify you.*
![](gifs/no-concert.gif)


#### Songs
```
node liri.js spotify-this-song + <Song Title>
```
*Hold command and click the hyperlink for a preview of the song*
![](gifs/song.gif)


#### Movies
```
node liri.js movie-this + <Movie Title>
```
![](gifs/movie.gif)

*When a movie is misspelled, the app will notify you.*
![](gifs/movie-typo.gif)


#### Text Files
```
node liri.js d0-what-it-says
```
*Command will read text from an external file, parse the data, and search accordingly.*
![](gifs/text.gif)


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