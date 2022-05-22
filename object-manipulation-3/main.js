console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = [
  { name: 'Frodo', hand: [], score: 0 },
  { name: 'Samwise', hand: [], score: 0 },
  { name: 'Merry', hand: [], score: 0 },
  { name: 'Pippin', hand: [], score: 0 }
];

var suit = ['clubs', 'diamonds', 'hearts', 'spades'];
var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var deck = [];

function createObjects(players) {
  var card = {};
  for (var s = 0; s < suit.length; s++) {
    for (var r = 0; r < rank.length; r++) {
      suit[s] = card.suit;
      rank[r] = card.rank;
      deck.push(card);
      card = {};
    }
  }
}
createObjects();

var shuffledDeck = _.shuffle(deck);
