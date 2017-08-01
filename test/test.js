const assert = require('chai').assert;
const Human = require('../src/human.js');
const Character = require('../src/character.js');

describe('Character', () => {

    //handleling valid inputs
    describe('Handle Valid  input', () => {
        // Instatiation
        it('should create object if instantiated with valid input and return 3 as live', function() {
            let character = new Character();
            assert.equal(character.live, 3);
        });

    });

})

describe('Game', () => {

    //handleling valid inputs
    describe('Handle Valid  input', () => {
        // Instantiation of Game class
        it('should create object if instantiated with valid input and return `AK7` for Weapon', function() {
            let hero = new Game();
            assert.equal(hero.weapon, 'Ak47');
        });

    });

})