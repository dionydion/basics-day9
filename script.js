/*var main = function(){
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

*/
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

// objective of the game is to win all the cards

//deck is shuffled
var shuffledDeck = deckShuffle(deck)
// split deck evenly into two 
var deckOne = shuffledDeck.splice(0,26)
var deckTwo = shuffledDeck
var main = function(input){
  
  // each player reveals top card 
  var topCardOne = deckOne.pop()
  var topCardTwo = deckTwo.pop()
  var myOutputvalue = `player one drew ${topCardOne.rank}<br>player two drew ${topCardTwo.rank}`
  // player with higher card takes both card and moves them to the back of their deck
  if (topCardOne.rank > topCardTwo.rank) {
    deckOne.unshift(topCardOne)
    myOutputvalue += "<br> Player One wins!"
  }
  else if (topCardOne.rank < topCardTwo.rank){
    deckTwo.unshift(topCardTwo)
    myOutputvalue += "<br> Player Two Wins!"
  }
  // if both player card is equal 
  else if (topCardOne.rank == topCardTwo.rank){
    // both players place the next three cards face down
    // put all 6 cards into one array
    myOutputvalue += "<br>Its War!!"
    var faceDownArray=[]
    for (i=0;i<3;i+=1){
      faceDownArray.push(deckOne.pop())
      if (deckOne.length == 0){
        return myOutputvalue + '<br>player one ran out of cards. player 1 lose!'
      }
    }
    for (i=0;i<3;i+=1){
      faceDownArray.push(deckTwo.pop())
      if (deckTwo.length == 0){
        return myOutputvalue + '<br>player two ran out of cards. player 2 lose!'
      }
    }
    // both players get a face up card from the top of the deck
    topCardOne = deckOne.pop()
    topCardTwo =deckTwo.pop()
    myOutputvalue += `<br><br>Player One drew ${topCardOne.rank}<br> Player Two drew ${topCardTwo.rank}`
    // add them to the facedown Array
    faceDownArray.push(topCardOne)
    faceDownArray.push(topCardTwo)
    // keep redrawing till the faced up cards are different
    while (topCardOne == topCardTwo){
      myOutputvalue += '<br>Its a draw AGAIN! Pls Draw another Face Up card'
      if (deckOne.length == 0){
        return myOutputvalue+ '<br>player one ran out of cards. player 1 lose!'
      }
      if (deckTwo.length == 0){
        return myOutputvalue+ '<br>player two ran out of cards. player 2 lose!'
      }
      topCardOne = deckOne.pop()
      topCardTwo =deckTwo.pop()
      myOutputvalue+=`<br><br>Player One drew ${topCardOne.rank}<br> Player Two drew ${topCardTwo.rank}`
      // add them to the facedown Array
      faceDownArray.push(topCardOne.pop())
      faceDownArray.push(topCardTwo.pop())
    }
    // if player one top card wins add all the facedown cards to player ones deck
    if (topCardOne>topCardTwo){
      for (i=0;i<faceDownArray.length;i+=1){
        deckOne.unshift(faceDownArray[i])
      }
      myOutputvalue += "<br><br>Player 1 won the war!"
      // reset the faceDownArray 
      faceDownArray = []
    }
    // if player two top card wins add all the facedown cards to player twos deck
    if (topCardOne<topCardTwo){
      for (i=0;i<faceDownArray.length;i+=1){
        deckTwo.unshift(faceDownArray[i])
      }
      myOutputvalue+= "<br><br>Player 2 won the war!"
      // reset the faceDownArray 
      faceDownArray = []
    }
  }
  if (deckOne.length == 0){
    return myOutputvalue+ '<br>player one ran out of cards. player 1 lose!'
  }
  if (deckTwo.length == 0){
    return myOutputvalue+ '<br>player two ran out of cards. player 2 lose!'
  }
  return myOutputvalue+ `<br><br>player one has ${deckOne.length} cards left! <br>player two has ${deckTwo.length} cards left!`
}