'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Coding Challenge #1
// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
// GOOD LUCK �

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const [players1, players2] = game.players;

// const [gk, ...fieldPlayers] = players1;

// const allPlayers = [...players1, ...players2];

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// ARRAY DELLA SQUADRA 1
// const players1 = game.players[0];
// console.log(players1);

// DESTRUCTURING: ASSEGNO A GK1 IL PORTIERE1 E FIELDPLAYERS1 I GIOCATORI DI MOVIMENTO
// const [gk1, ...fieldPlayers1] = players1;

// console.log(gk1);
// console.log(fieldPlayers1);

// const players2 = game.players[1];
// const [gk2, ...fieldPlayers2] = players2;

// console.log(gk2);
// console.log(fieldPlayers2);

// ARRAY CON TUTTI E 22 I GIOCATORI
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// ARRAY CON TUTTI I GIOCATORI COMPRESI I SOSTITUTI DELLA SQUADRAA 1
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// const { odds: { team1, x: draw, team2 } } = game;

// console.log(team1);
// console.log(draw);
// console.log(team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored!`);
//   for (let i = 0; i < players.length; i++) {
//     console.log(players[i]);
//   }
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.

// team1 < team2 && console.log('Team 1 is more likely to win.');
// team1 > team2 && console.log('Team 2 is more likely to win.');

// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:

// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")

for (const player of game.scored) {
  console.log(player);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)

let tot = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  tot += odd;
}
const avg = tot / odds.length;

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �

for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team, odd);
  const result = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${result}: ${odd}`);
}

// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }
// GOOD LUCK

const scorers = {};

for (const scorer of game.scored) {
  scorers[scorer] ? scorers[scorer]++ : (scorers[scorer] = 1);
}

const prova = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
]);

// 1.
// for (const [index, scorer] of game.scored.entries()) {
//   // console.log(index, goal);
//   console.log(`Goal ${index + 1}: ${scorer}`);
// }

// 2.

// const values = Object.values(game.odds);
// console.log(values);
// const properties = Object.keys(game.odds);
// console.log(properties);

// let totalOdds = 0;

// for (const odd of values) {
//   totalOdds += odd;
// console.log(totalOdds);
// }

// const avgOdds = totalOdds / values.length;

// console.log(`The average Odd is ${avgOdds}`);

// 3.
// console.log(Object.entries(game.odds));

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamString = team === `x` ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamString}: ${odd}.`);
// }

// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }

// const scorers = {};

// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : scorers[player] = 1;
// }

// console.log(scorers);

// Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// estrarre i valori in un array e trasformarlo in un set
const events = [...new Set(gameEvents.values())];

gameEvents.delete(64);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

for (const [key, value] of gameEvents.entries()) {
  const time = key <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${time} ${key}: ${value}`);
}

// console.log(gameEvents);

// // 1. Create an array 'events' of the different game events that happened (no duplicates)

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2. After the game has finished, is was found that the yellow card from minute 64
// // was unfair. So remove this event from the game events log.

// gameEvents.delete(64);
// console.log(gameEvents);

// // 3. Compute and log the following string to the console: "An event happened, on
// // average, every 9 minutes" (keep in mind that a game has 90 minutes)

// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// //4. Loop over 'gameEvents' and log each element to the console, marking
// // whether it's in the first half or second half (after 45 min) of the game, like this:
// // [FIRST HALF] 17: ⚽ GOAL

// for (const [key, value] of gameEvents) {
//   const half = key <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${key}: ${value}`);
//   // console.log(``);
// }

// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.

// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅

// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK �
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function () {
  let text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);
  document.querySelector('textarea').value = '';

  for (const [index, parola] of rows.entries()) {
    const [first, second] = parola.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(25, ' ')}${'✔'.repeat(index + 1)}`);
    document.querySelector('textarea').value += `${output.padEnd(
      25,
      ' '
    )}${'✔'.repeat(index + 1)}`;
  }
});
