console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = [
  { name: 'David', hand: [], score: 0 },
  { name: 'Daniel', hand: [], score: 0 },
  { name: 'Sam', hand: [], score: 0 },
  { name: 'Isabel', hand: [], score: 0 }
];

var suit = ['clubs', 'diamonds', 'hearts', 'spades'];
var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var deck = [];

function createDeck(players) {
  var card = {};
  for (var s = 0; s < suit.length; s++) {
    for (var r = 0; r < rank.length; r++) {
      suit[s] = card.suit;
      rank[r] = card.rank;
      deck.push(card);
      card = {};
    }
  }
  return deck;
}
var shuffledDeck = _.shuffle(deck);

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
console.log('deal to playrs', dealToPlayers());

function findScore(players) {
  for (var s = 0; s < players; s++) {
    if (players[0][s].hand.rank === 'J' || players.hand === 'Q' || players.hand === 'K') {
      players.score.rank += 10;

    } else if (players.hand === 'A') {
      players.score.rank += 11;
    }
  }
}
console.log(findScore());
