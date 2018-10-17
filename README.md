# liri-node-app
Language Interpretation and Recognition interface (LIRI) using Spotify, Bands in Town and OMDB API's. It consists of 4 commands:

## liri usage

### NPM Modules Required

To use liri you must have the appropriate NPM modules installed:

* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
* [Request](https://www.npmjs.com/package/request)
* [Moment](https://www.npmjs.com/package/moment)
* [DotEnv](https://www.npmjs.com/package/dotenv)

Also make sure you have a Spotify, Bands in Town and OMDB API key and create a .env file with the following format:

### .env file setup

```
SPOTIFY_ID=*key*
SPOTIFY_SECRET=*key*

OMDB_ID=*key*

BANDSINTOWN_ID=*key*
```

### liri call

to use liri use the command

``` node liri.js <command> <argument> ```

## liri commands

### concert-this

Concert-this takes an argument containing a band name. It then uses the Bands in Town API to print out the following information for all upcoming concerts for the band:

* Name of the venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")
     
 If there is no concert available the user is told as such.
 
 ### spotify-this song
 
 Spotify-this-song takes an argument containing a song name. It then uses the Spotify API to print out the following information for the song:
 
 * Artist(s)
 * The song's name
 * A preview link of the song from Spotify
 * The album that the song is from
     
 If no song is provided the function provides information about "The Sign" by Ace of Base.
 
 ### movie-this
 
 Movie-this takes a movie name as an argument. It then uses the OMDB API to print out the following information about the movie:
 
* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.
 
 If no movie is provided the function returns information about the movie "Mr. Nobody"
 
 ### do-what-it-says
 
 Do-what-it-says reads a user provided text file random.txt which is a comma delimited file that takes one of the previous function and optionally an argument. It then performs the function's described actions.
 
 ## Additional features
 
 ### Logging
 The user command,arguments, and results are logged to a log.txt file in append mode. This allows the user to review their history of using the LIRI.
 
 ### Error checking
 The program also checks whether a valid command is used. If not it gracefully exits telling the user a valid command isn't selected.
 
 
 
