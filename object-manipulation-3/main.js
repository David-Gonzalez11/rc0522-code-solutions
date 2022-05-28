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
    for (var j = 0; j < players[s].hand.length; j++) {
      if (players[s].hand[j] === 'J' || players[s].hand[j] === 'Q' || players[s].hand[j] === 'K') {
        players[s].score += 10;

      } else if (players.hand === 'A') {
        players[s].score += 11;
      }
    }
  }
}
console.log(findScore());
