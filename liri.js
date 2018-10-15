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