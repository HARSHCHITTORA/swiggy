const Dice = require('./Dice');

class Battle {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.dice = new Dice();
  }

  attack(attacker, defender) {
    const attackRoll = this.dice.roll();
    const defendRoll = this.dice.roll();

    const attackDamage = attacker.attack * attackRoll;
    const defendValue = defender.strength * defendRoll;

    const damage = attackDamage - defendValue;

    if (damage > 0) {
      defender.health -= damage;
    }

    console.log(`${attacker.name} attacks!`);
    console.log(`Attack Roll: ${attackRoll}, Defend Roll: ${defendRoll}`);
    console.log(`${attacker.name} deals ${attackDamage} attack damage.`);
    console.log(`${defender.name} defends with ${defendValue} defense value.`);
    console.log(`${defender.name} takes ${damage > 0 ? damage : 0} damage.`);
    console.log(`${defender.name}'s health is now ${defender.health}.`);
    console.log('--------------------------------');
  }

  startBattle() {
    console.log("The battle begins!");
    console.log('--------------------------------');

    while (this.player1.isAlive() && this.player2.isAlive()) {
      if (this.player1.health < this.player2.health) {
        this.attack(this.player1, this.player2);
        if (!this.player2.isAlive()) break;
        this.attack(this.player2, this.player1);
      } else {
        this.attack(this.player2, this.player1);
        if (!this.player1.isAlive()) break;
        this.attack(this.player1, this.player2);
      }
    }

    const winner = this.player1.isAlive() ? this.player1.name : this.player2.name;
    console.log(`Game Over! The winner is ${winner}.`);
  }
}

module.exports = Battle;
