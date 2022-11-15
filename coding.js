var oneLinerJoke = require('one-liner-joke');
const cowsay = require("cowsay");
var getRandomJoke = oneLinerJoke.getRandomJoke();
const joke = getRandomJoke.body;


console.log(cowsay.say({
    text : joke,
    e : "oO",
    T : "U "
}));
//var oneLinerJoke = require('one-liner-joke');

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
//var getRandomJoke = oneLinerJoke.getRandomJoke();
//console.log(getRandomJoke.body)
