const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const playerA = new Player(50, 5, 10);
const playerB = new Player(100, 10, 5);

const battle = new Battle(playerA, playerB);

console.log("Starting the Magical Arena Battle!");
console.log("Player A: Health 50, Strength 5, Attack 10");
console.log("Player B: Health 100, Strength 10, Attack 5");

battle.startBattle();

rl.close();
