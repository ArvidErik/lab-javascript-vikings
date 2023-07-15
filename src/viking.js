// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0) {
            return (`${this.name} has received ${damage} points of damage`);
        }
        else if (this.health <= 0) {
            return (`${this.name} has died in act of combat`);
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0) {
            return (`A Saxon has received ${damage} points of damage`);
        }
        else if (this.health <= 0) {
            return (`A Saxon has died in combat`);
        }
    }
}

// War
class War {

    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length - 1 * Math.random())]
        let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length - 1 * Math.random())]

        let result = randomSaxon.receiveDamage(randomViking.strength);

        let saxonIndex = this.saxonArmy.indexOf(randomSaxon);

        this.saxonArmy.splice(saxonIndex, 1)

        return result;

    }

    saxonAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length - 1 * Math.random())]
        let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length - 1 * Math.random())]

        let result = randomViking.receiveDamage(randomSaxon.strength);

        let vikingIndex = this.vikingArmy.indexOf(randomViking);

        this.vikingArmy.splice(vikingIndex, 1)

        return result;
    }

    showStatus() {

    }
}
