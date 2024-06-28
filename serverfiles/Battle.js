const Dice = require('./Dice');

class Battle {
  constructor(player1, player2) {
    this.playerA = player1;
    this.playerB = player2;
    this.dice = new Dice();
  }

  attack(attacker, defender) {
    const attackRoll = this.dice.roll();
    const defendRoll = this.dice.roll();

    const DamageAttack = attacker.attack * attackRoll;
    const defendVal = defender.strength * defendRoll;

    const damage = DamageAttack - defendVal;

    if (damage > 0) {
      defender.health -= damage;
    }

    console.log(`${attacker.name} attacks!`);
    console.log(`Attack Roll: ${attackRoll}, Defend Roll: ${defendRoll}`);
    console.log(`${attacker.name} deals ${DamageAttack} attack damage.`);
    console.log(`${defender.name} defends with ${defendVal} defense value.`);
    console.log(`${defender.name} takes ${damage > 0 ? damage : 0} damage.`);
    console.log(`${defender.name}'s health is now ${defender.health}.`);
    console.log('--------------------------------');
  }

  startBattle() {
    console.log("The battle begins!");
    console.log('--------------------------------');

    while (this.playerA.isAlive() && this.playerB.isAlive()) {
      if (this.playerA.health < this.playerB.health) {
        this.attack(this.playerA, this.playerB);
        if (!this.playerB.isAlive()) break;
        this.attack(this.playerB, this.playerA);
      } else {
        this.attack(this.playerB, this.playerA);
        if (!this.playerA.isAlive()) break;
        this.attack(this.playerA, this.playerB);
      }
    }

    const winner = this.playerA.isAlive() ? this.playerA.name : this.playerB.name;
    console.log(`Game Over! The winner is ${winner}.`);
  }
}

module.exports = Battle;
