function Letter(character) {
    this.character = character;
    // duno whatt to use for placeholder
    // I use the (#)
    this.placeholder = " # ";
    this.guessed = false;

    this.getChar = function(){
        var char = ' ';
        // the correct gues will show the letter
        if (this.guessed) {
            char = this.character;
        } else{
            char = this.placeholder;
        }
        return char;
    }
}

module.exports = Letter;