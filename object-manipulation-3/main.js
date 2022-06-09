console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = [
  { name: 'David', hand: [], score: 0 },
  { name: 'Daniel', hand: [], score: 0 },
  { name: 'Sam', hand: [], score: 0 },
  { name: 'Isabel', hand: [], score: 0 }
];

var cardSuit = ['clubs', 'diamonds', 'hearts', 'spades'];
var cardRank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Ace', 'Queen', 'King'];
var cardDeck = [];

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
var shuffledDeck = _.shuffle(cardDeck);

function dealHand(player) {
  for (var i = 0; i < 2; i++) {
    player.hand.push(shuffledDeck[i]);
    shuffledDeck.splice(0, 1);
  }
}

function dealToPlayers(deal) {
  for (var i = 0; i < players.length; i++) {
    dealHand(players[i]);
  }
  return players;
}
console.log('deal to players', dealToPlayers());
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
