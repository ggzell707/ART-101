// index.js - purpose and description here
// Author: Giselle Torres
// Date: April 28, 2024

// Define Variables
let myTransport = ['walk', 'bicycle', 'car', 'bus'];

//Create an object for mymainride
let myMainRide = {
    make: "Ford",
    model: "Focus",
    color: "red",
    year: 2014,
    age: function () {
        return 2024 - this.year;}
}


//output
document.writeln("Getting around: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>"); 