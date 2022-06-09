console.log('Lodash is loaded:', typeof _ !== 'undefined');
/*
declare a array literal to hold the objects of the players
each player will get a rank property and a name as well as a score to begin with
*/
var players = [
  { name: 'David', hand: [], score: 0 },
  { name: 'Daniel', hand: [], score: 0 },
  { name: 'Sam', hand: [], score: 0 },
  { name: 'Isabel', hand: [], score: 0 }
];

/*
create a new variable for the suits and give them a value of an array with the card suits being passed in
create a new variable for the card rank and give them a value of an array with the cards ranking(values of each card)
then define a new variable to store the cardDeck which will contain the suit and rank of a card
*/

var cardSuit = ['clubs', 'diamonds', 'hearts', 'spades'];
var cardRank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Ace', 'Queen', 'King'];
var cardDeck = [];

/*
define a function for creating the card deck with a parameter of players
create a new variable and set it equal to an empty object
use a for loop to iterates over the cardSuit
use a for loop to iterate over the cardRank
after looping throught the values then we want to set the value of card.suit to the cardSuit at index [s]
after looping through the values then we weant to set the value of card.rank to the cardRank at index [r]
after we set the values to their variables then we wan to push the card into the cardDeck array which we created earlier
then set the card deck back to an empty object
*/
function createDeck(players) {
  var card = {};
  for (var s = 0; s < cardSuit.length; s++) {
    for (var r = 0; r < cardRank.length; r++) {
      card.suit = cardSuit[s];
      card.rank = cardRank[r];
      cardDeck.push(card);
      card = {};
    }
  }
}
createDeck();

/*
use lodash to shuffle the card deck

*/
var shuffledDeck = _.shuffle(cardDeck);

/*
define a function to deal the hand
use a for loop to iterate over the value of i
make sure the player does not get the same card by setting the conditio to i < 2
push the value of the hand property of the player object to the shuffledDeck array at index of [i]
splice the shuffledDeck and start at 0 and delete 1

*/
function dealHand(player) {
  for (var i = 0; i < 2; i++) {
    player.hand.push(shuffledDeck[i]);
    shuffledDeck.splice(0, 1);
  }
}
/*
define a function to deal to the players
use a for loop to iterate over the players object
call the dealHand function to deal the deck to players[i]
return players

*/
function dealToPlayers(deal) {
  for (var i = 0; i < players.length; i++) {
    dealHand(players[i]);
  }
  return players;
}
console.log('deal to players', dealToPlayers());
/*
define a new function to find the score of the players
create a new varibale to store the points of the players cards
use a for loop to iterate over the players
use another for loop to iterate over the players[s].hand.length (s is going to determine the suit)
check if players[i].hand[j].rank === the value of Queen jack or king
if it is then add 10 to the points variable
use an else if statement to check if the value of the card is equal to an Ace
if it is then add 11 to the points array
if it is any other value then add it to the points
set the value of players at index [s].score to equal their points
*/
function findScore(toPlayers) {
  var points = 0;
  for (var s = 0; s < players.length; s++) {
    for (var j = 0; j < players[s].hand.length; j++) {
      if (players[s].hand[j].rank === 'Queen' || players[s].hand[j].rank === 'Jack' || players[s].hand[j].rank === 'King') {
        points += 10;

      } else if (players[s].hand[j].rank === 'Ace') {
        points += 11;
      } else {
        players[s].hand[j].rank += points;

      }
    }
    players[s].score = points;
  }
  return players;
}
console.log('find score', findScore());

/*
ddefine a function for the winner with one parameter (Players)
call the findScore function
create a new object for the winner
set the name property of winner objec to players at index 0.name
set the score property of winner object to players at index 0.score
check if players at index i score is greater than the score property of winner object
if it is then set the name property of winner object to equal the players at index i name
if it is then set the score property of winner object to equal the players at index i score
*/
function winner(Players) {
  findScore();
  var winner = {};
  winner.name = players[0].name;
  winner.score = players[0].score;
  for (var i = 0; i < players.length; i++) {
    if (Players[i].score > winner.score) {
      winner.name = Players[i].name;
      winner.score = Players[i].score;
    }
  }
  console.log('value of players', players);
  console.log('The Winner of the card game is ' + winner.name + ' with an amazing score of ' + winner.score);
}
winner(players);
