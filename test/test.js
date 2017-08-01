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

describe('Human', () => {

    //handleling valid inputs
    describe('Handle Valid  input', () => {
        // Instantiation of Game class
        it('should create object if instantiated with valid input and return `Grenade Luncher` for Weapon', function() {
            let hero = new Human();
            assert.equal(hero.weapon, 'Grenade Luncher');
        });

        it('should should reduce amo to 80` for Weapon', function() {
            let hero = new Human();
            for (let i = 1; i <= 20; i++) {
                hero.shoot();
            }
            assert.equal(hero.amo, 80);
        });

        it('should reduce cash and increase amo', function() {
            let hero = new Human();
            hero.reload();
            assert.equal(hero.cash, 90);
        });

    });

})