var main = function(){
  var shuffledDeck = deckShuffle(deck);
  var computerCardOne = shuffledDeck.pop()
  var computerCardTwo = shuffledDeck.pop()
  var userCardOne = shuffledDeck.pop()
  var userCardTwo = shuffledDeck.pop()
  var winningNumber = winnerMeh(computerCardOne,computerCardTwo,userCardOne,userCardTwo)
  if (winningNumber == 1|| winningNumber == 2){
    return `Lose.<br><br> Computer got ${computerCardOne.name} of ${computerCardOne.suit} and ${computerCardTwo.name} of ${computerCardTwo.suit} <br>You got ${userCardOne.name} of ${userCardOne.suit}.<br>You got ${userCardTwo.name} of ${userCardTwo.suit}`
  }
  return `Win.<br><br> Computer got ${computerCardOne.name} of ${computerCardOne.suit} and ${computerCardTwo.name} of ${computerCardTwo.suit} <br>You got ${userCardOne.name} of ${userCardOne.suit}.<br>You got ${userCardTwo.name} of ${userCardTwo.suit}`
  
}

var winnerMeh = function(a,b,c,d){
  array=[a.rank,b.rank,c.rank,d.rank]
  maxIndex = array.indexOf(Math.max(...array)) + 1
  return maxIndex
  

}
var deckShuffle=function(deck){
  for(i=0;i<deck.length;i+=1){
    currentItem = deck[i]
    randomIndex = getRandomIndex(deck.length)
    randomItem = deck[randomIndex]
    deck[i] = randomItem
    deck[randomIndex] = currentItem
  }
  return deck
}

var getRandomIndex = function(size){
  return Math.floor(Math.random()*size)
}


var deck = []
var rankList = [1,2,3,4,5,6,7,8,9,10,11,12,13]
var nameList = ['ace','two','three','four','five','six','seven','eight','nine','ten','jack','queen','king']
var suitList = ['diamond','club','heart','spade']
for (i=0;i<suitList.length;i+=1){
  for (j=0;j<rankList.length;j+=1){
    object={
      name: nameList[j],
      suit: suitList[i],
      rank: rankList[j]
    }
    deck.push(object)
  }
}
console.log(deck)