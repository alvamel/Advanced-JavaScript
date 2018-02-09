// requires the word.js file
var Motorcycle = require('./word.js');

// list of motorcycles
var motorcycles_list = ['Ducati 1299R', 'MV Agusta F4RR', 'BMW 1000RR', 'Kawasaki ZX10RR','Honda 1000R', 'Yamaha R1R'];

function GameJS() {
    // start all values at 0
    this.wins = 0;
    this.loss = 0;
    this.remainingLives = 0;
    this.usedAlpha = [];
    this.motorcycle;

    this.beginNewGame = function() {
        // start of a new game player get 5 lives
        this.remainingLives = 5;
        // start with empty used alphabet
        this.usedAlpha = [];
        // generates random motorcyle from array
        this.car = thiscreateRandomMotorcycle();
    }
}

this.createRandomMotorcyle = function( {
    var randomMotorcycle = motorcycles_list[Math.floor(Match.random()* motorcycles_list.length)];

    // reeturns random motorycle from array
    return new Motorcycle(randomMotorcycle);
})

this.produceOutcomes = function (str) {
    // start of case statement
    switch(str) {
        case "correct":
            console.log('You are correct!');
            break;
        case "wrong":
            console.log(You are wrong!);
            console.log('You have', this.remainingLives + "lives left");
            break;
        case "already":
            console.log('You already used that letter!');
            break;
    // if all the above gets F'up say error
    default:
            console.log('error!!')
    }
}

module.exports = GamesJS;