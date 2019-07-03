
# Cliri

## About

Cliri (CLI + Siri) is a Command Line Interface application that allows you to search for concert, song, and movie data.

## Table of Contents

- [Menu:](#menu) List of available commands to run the application.

- [Concerts:](#concerts) Returns upcoming venue, location and date for an artist's next concert.

- [Songs:](#songs) Provides the artist, album and preview link from a song title.

- [Movies:](#movies) Search a movie title to see ratings, actors, plot etc.

- [Text Files](#text) Parses a given text file and runs the appropriate search.

## Getting Started

#### <a name="menu"></a>Menu

*Run the following code to view the list of available commands.*
```
cliri
```

![](public/images/no-args.png)

---

#### <a name="concerts"></a>**Concerts**

```
cliri concert + <Artist/Band name>
```

![](public/images/concert.png)

*If the artist is not touring, Cliri will notify you.*
![](public/images/no-concert.png)

---

#### <a name="songs"></a>**Songs**

```
cliri song + <Song Title>
```

*Hold command and click the URL for a hyperlink to a preview of the song*
![](public/images/song.png)

---

#### <a name="movies"></a>**Movies**

```
cliri movie + <Movie Title>
```

![](public/images/movie.png)

*When a movie title is misspelled, Cliri will notify you.*
![](public/images/movie-typo.png)

---

#### <a name="text"></a>**Text Files**

```
cliri text
```

*Cliri will read text from an external file, parse the data, and search accordingly.*

![](public/images/text-file.png)

## Technologies

* Node.js
* npm packages
  * [axios](https://www.npmjs.com/package/axios)
  * [chalk](https://www.npmjs.com/package/chalk)
  * [dotenv](https://www.npmjs.com/package/dotenv)
  * [moment](https://www.npmjs.com/package/moment)
  * [node-spotify-api](https://www.npmjs.com/package/node-spotify-api)
  * [ora](https://www.npmjs.com/package/ora)
* Jest

## Author

[Mike Hume](https://mahume.github.io)