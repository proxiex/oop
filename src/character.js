'use strict';

module.exports = class Character {
    constructor(live = 3, strength = 10, amo = 100, weapon = 'Pistol', cash = 100) {
        this.live = live;
        this.strength = strength;
        this.amo = amo;
        this.weapon = weapon;
        this.weapon_2 = 'Knife';
        this.cash = cash;
        this.location = {
            x: 0,
            y: 0
        };
    }

    walk(x, y) {
        this.location.x += x;
        this.location.y += y;
    }


    forward() {
        this.walk(1, 0);
    }

    up() {
        this.walk(0, 1);
    }


    shoot() {
        if (this.amo <= 10) {
            return 'Reload!';
        } else if (this.amo == 0) {
            return 'Empty';
        } else {
            this.amo -= 1;
            return 'Bam Bamm';
        }
    }

    reload() {
        if (this.cash > 0) {
            this.amo = 100;
            this.cash -= 10;
        } else {
            return 'You have no Cash to buy amo, kill more demons!';
        }
    }

    killed() {
        if (this.live == 0) {
            return 'Game Over';
        } else {
            this.live -= 1;
        }
    }
}