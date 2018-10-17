require("dotenv").config();

//Requires
var keys = require("./keys.js");
var fs= require("fs");
var request = require("request");
var Spotify = require('node-spotify-api');
var moment = require("moment");
//var inquirer = require("inquirer");

//Grab API keys/secret from .env file
var spotify = new Spotify(keys.spotify);
var bit = keys.bit.id;
var omdb = keys.omdb.id;
//console.log("bit",bit);

//var spotifyUrl = 
//var omdbUrl = 


//Implemented LIRI functions

// This function
function concertThis(artist) {

    //generate API URL
    var bitURL = "https://rest.bandsintown.com/artists/"+artist+"/events?app_id="+bit;
    //console.log(bitURL);
    var datetime;

    //now make API call
    request(bitURL, function(error, response, body) {

        // If the request was successful...
        if (!error && response.statusCode === 200) {
        
            //console.log(body);
            var data = JSON.parse(body);
            console.log(data[0]);
            // loop through all concerts
            for (let i=0;i<body.length;i++) {

                //parse data
                console.log("\nVenue: "+data[i].venue.name);
                if(data[i].venue.city != '')
                    console.log("City: "+data[i].venue.city);
                if(data[i].venue.region != '')
                    console.log("Region: "+data[i].venue.region);
                if(data[i].venue.country != '')
                    console.log("Country: "+data[i].venue.country);
                datetime = moment(data[i].datetime,"YYYY-MM-DDtHH:mm:ss").format("MM/DD/YYYY");
                console.log("Date: "+datetime+"\n");
                //console.log("\nVenue: "+response.venue.name+"\n");
            }

        }
    });
      
}

//This function
function spotifyThisSong(song) {
       
    //default song
    if(song == undefined) 
        song="\"The+Sign\"%20NOT%20times";//we have to do this to get right song lol
    else
        song= "\""+song+"\"";   //search exact
    //console.log("testing: ",song);
    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        console.log("Artist(s):");
        for(let i=0; i <data.tracks.items[0].artists.length;i++) 
            console.log(data.tracks.items[0].artists[i].name+"\n");
        console.log("Song Name:")
        console.log(data.tracks.items[0].name+"\n");
        console.log("Preview Link:")
        console.log(data.tracks.items[0].preview_url+"\n");
        console.log("Song Album:")
        console.log(data.tracks.items[0].album.name);
    });
}
//This function
function movieThis(title) {
    var omdbURL = "http://www.omdbapi.com/?t="+"\""+title+"\""+"&y=&plot=short&type=movie&tomatoes=true&apikey="+omdb;
    //console.log("omdbURL",omdbURL);

    request(omdbURL, function(error, response, body) {

        if (!error && response.statusCode === 200) {
    
            var parsed= JSON.parse(body);
            //console.log(body);
            console.log("Movie Title: "+ parsed.Title);
            console.log("Year Released: "+ parsed.Year);
            console.log("IMDB Rating: "+ parsed.Ratings[0].Value);
            console.log("Rotten Tomatoes Rating: "+parsed.Ratings[1].Value);
            console.log("Country Produced: "+parsed.Country );
            console.log("Movie Language(s): "+parsed.Language);
            console.log("Movie plot: "+parsed.Plot);
            console.log("Movie Actors: "+parsed.Actors);
        }
    });

}

//This function
function doWhatItSays(userArg) {

}

//This function logs the output to a log file

//User input handling using process.argv
var command = process.argv[2];
var userArg = process.argv[3];

//command handling
switch(command){
    case "concert-this":
    concertThis(userArg);
    break;
    case "spotify-this-song":
    spotifyThisSong(userArg);
    break;
    case "movie-this":
    movieThis(userArg);
    break;
    case "do-what-it-says":
    doWhatItSays(userArg);
    break;
    default:
    console.log("Invalid argument. Please try again.");
    break;
}