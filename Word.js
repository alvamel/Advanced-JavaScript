// this will require the Letter.js file
var Letter = require('./Letter.js');

var alphabetSoupExpression = /[a-z] | [0-9]/i;

function Motorcycle(target) {
    this.target = target;
    this.targetMotorcycle = target.toUpperCase().split('');

    this.createDisplayMotorcycle = function() {
        var motorcycleArray = [];

        for (var i = 0; i < this.target.length; i++) {
            if (alphabetSoupExpression.test(this.target[i])){
                motorcycleArray.push(new Letter(this.target[i].toUpperCase()));
            } else {
         
            motorcycleArray.push(this.target[i])
        }
    }
    return motorcycleArray;
};

this.displayMotorcycle = this.createDisplayMotorcycle();
this.checkAlphaInput = function(letter) {

    var youIsRight = false;

    for (var index in this.targetMotorcycle) {
        if (letter.toUpperCase() === this.targetMotorcycle[index]) {
            this.displayMotorcycle[index].guessed = true;
            youIsRight = true;
        }
    }
    return youIsRight;
};

this.fooGetMotorcycle = function() {
    return this.targetMotorcycle.join('');
};

// 
this.getMotorcycleToShow = function() {
    var show = '';

    for (var index in tnis.displayMotorcycle) {
        if (alphabetSoupExpression.test(this.displayMotorcycle[index])) {
            show += this.displayMotorcycle[index].getChar();
        } else {
            show += this.displayMotorcycle[index];
        }
    }
    return show;
}
};
module.exports = Motorcycle;