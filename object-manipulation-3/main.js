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

function shuffleDeck(deck) {
  for (var x = 0; x < deck.length; x++) {
    var random = Math.random(Math.random() * (x - 1));
    var temp = deck[random];
    deck[random] = deck[x];
    deck[x] = temp;
  }
  return deck;
}

var gameDeck = createDeck();
console.log(gameDeck);
