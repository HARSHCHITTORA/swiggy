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
  
      console.log(`Attack Roll: ${attackRoll}, Defend Roll: ${defendRoll}`);
      console.log(`${attacker === this.player1 ? 'Player A' : 'Player B'} attacks for ${attackDamage}`);
      console.log(`${defender === this.player1 ? 'Player A' : 'Player B'} defends for ${defendValue}`);
      console.log(`${defender === this.player1 ? 'Player A' : 'Player B'} takes ${damage > 0 ? damage : 0} damage`);
      console.log(`${defender === this.player1 ? 'Player A' : 'Player B'} health: ${defender.health}`);
    }
  
    startBattle() {
      while (this.player1.isAlive() && this.player2.isAlive()) {
        const attacker = this.player1.health < this.player2.health ? this.player1 : this.player2;
        const defender = this.player1.health < this.player2.health ? this.player2 : this.player1;
        this.attack(attacker, defender);
  
        if (!defender.isAlive()) {
          console.log(`${defender === this.player1 ? 'Player A' : 'Player B'} has died.`);
          break;
        }
      }
  
      console.log(`Game Over! Winner: ${this.player1.isAlive() ? 'Player A' : 'Player B'}`);
    }
  }
  