'use strict';

const Character = require('./main.js');

module.exports = class Hero extends Character {
    constructor() {
        super();
        this.weapon = 'AK47';
    }


}
module.exports = class Villan extends Character {
    constructor() {
        super();
        this.weapon = 'Grenade Luncher';
    }

    walk() {
        this.location.x = Math.random();
        this.location.y = Math.random();
    }
}