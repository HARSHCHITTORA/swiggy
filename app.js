const Player = require('./serverfiles/Player');
const Battle = require('./serverfiles/Battle');

// Define the players
const playerA = new Player('Player A', 50, 5, 10);
const playerB = new Player('Player B', 100, 10, 5);

// Start the battle
const battle = new Battle(playerA, playerB);
battle.startBattle();
