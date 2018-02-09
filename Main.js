// will require inquirer
var inquire = require('inquire');

// going to require game.js
var GameJS =require('./game.js');

// starting new game
var game = new GamesJS();

function promptRunInput() {
    console.log(game.motorcyle.getMotorcycleToShow());
    inquire.prompt([  
    ])
}

            type: 'input',
            name: 'userGuess',
            message: 'Please enter your guess for the fastest motorcycle:',
            validate: function (value) {

                var correctInput = /[a-z] | [0-9]/i;

                // check if its already guessed
                if (value.length === 1 && correctInput.test(value)) {
                    return true;
                } else {
                    console.log('failed');
                    return 'Enter a valid guess:';
                }
            }

        ]).then(function(answer) {
            // grabs userGuess 
            var userGuess = anwser.userGuess.toUpperCase();

            if (game.usedAlpha.indexOf(userGuess) === -1) {
                    game.usedAlpha.push(userGuess);
            var correct = game.motorcycle.checkAlphaInput(userGuess);
            if (correct) {
                game.produceOutcomes("correct");
            } else {
                game.remainingLives--;
                game.produceOutcomes("wrong");
            }      
            } else {
                game.produceOutcomes("already");
            }
            var userWins = game.motorcycle.getMotorcycleToShow() === game.motorcycle.fooGetMotorcycle();
            console.log(userWins);

            if (userWins) {
                game.wins++;
                console.log("Correct Answer" + " " + game.motorcycle.getMotorcycleToShow());
            } else if (game.remainingLives > 0) {
                promptRunInput();
            } else {
            game.loss++;
            console.log("You Lost");
        }
    });


// starts the game
startHangman();