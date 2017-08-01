'use strict';

const Character = require('./main.js');

module.exports = class Hero extends Character {
    constructor() {
        super();
        this.weapon = 'AK47';
    }

    forward() {
        this.walk(1, 0);
    }

    up() {
        this.walk(0, 1);
    }



}