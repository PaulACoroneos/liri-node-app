require("dotenv").config();

//Requires
var keys = require("./keys.js");
var fs= require("fs");
var request = require("request");
var Spotify = require('node-spotify-api');
//var inquirer = require("inquirer");

//Grab API keys/secret from .env file
var spotify = new Spotify(keys.spotify);
//var omdb = new OMDB(keys.spotify);
var bit = keys.bit.id;
console.log("bit",bit);

//var spotifyUrl = 
//var omdbUrl = 


//Implemented LIRI functions

// This function
function concertThis(artist) {

    //generate API URL
    var bitURL = "https://rest.bandsintown.com/artists/"+artist+"/events?app_id="+bit;
    console.log(bitURL);

    //now make API call
    request(bitURL, function(error, response, body) {

        // If the request was successful...
        if (!error && response.statusCode === 200) {
        
            //console.log(body);
            var data = JSON.parse(body);
            console.log(data);
            console.log("\nVenue: "+data.venue.name+"\n");
            console.log("\Location: "+data.venue.city+","+data.venue.region+","+data.venue.country+"\n");
            //console.log("\nVenue: "+response.venue.name+"\n");
        }
    });
      
}

//This functiom
function spotifyThisSong(userArg) {

}

//This function
function movieThis(userArg) {

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