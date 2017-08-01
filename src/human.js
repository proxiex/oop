'use strict';

const Character = require('./main.js');

module.exports = class Human extends Character {
    constructor() {
        super();
        this.weapon = 'Grenade Luncher';
    }

    walk() {
        this.location.x = Math.random();
        this.location.y = Math.random();
    }
}