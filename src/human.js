'use strict';

const Character = require('./character.js');

module.exports = class Human extends Character {
    constructor() {
        super();
        this.weapon = 'Grenade Luncher';
    }
}