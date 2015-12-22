var starwarsnames = require('./starwars-names.json');
var randomarray = require('unique-random-array');
module.exports = {
 all : starwarsnames,
 random : randomarray(starwarsnames)
}