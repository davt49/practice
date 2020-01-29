//   function reverseString(str) {
//     // Step 1. Use the split() method to return a new array
//     var splitString = str.split('') // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]

//     // Step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse() // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]

//     // Step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join('') // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"

//     //Step 4. Return the reversed string
//     console.log(joinArray)
//     return joinArray // "olleh"
//   }
//   reverseString('hello')
// })

///////////////////Coding Tests/////////////////////github.com/wegotpop/pairing-tests

// Can You beat the dealer at 21

cards = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
]

let Sam
let Dealer

SHand = cards[Math.floor(Math.random() * 52)]
SHand2 = cards[Math.floor(Math.random() * 52)]

DealerHand = cards[Math.floor(Math.random() * 52)]
DealerHand2 = cards[Math.floor(Math.random() * 52)]

console.log(SHand + ' ' + SHand2)
console.log(DealerHand + ' ' + DealerHand2)

function game(){
  Sam = SHand + SHand2
  Dealer = DealerHand + DealerHand2
  console.log('Sam has an opening total of '+ Sam)
  console.log('Dealer has an opening total of '+ Dealer)

  if (Sam === 21){
    console.log('Sam wins!')
    return 
  } else if (Dealer === 21){
    console.log('Dealer wins!')
    return 
  } else if (Sam < 17){
    Sam = Sam + cards[Math.floor(Math.random() * 52)]
    console.log('Sam draws a card and now has '+ Sam)
  } 
  
  if (Sam === 21){
    console.log('Sam wins!')
    return
  } else if (Sam > 21){
    console.log('Sam lost.')
    return
  } else if (Sam < 17){
    Sam = Sam + cards[Math.floor(Math.random() * 52)]
    console.log('Sam still has less than 17 so he draws another, now he\'s at ' + Sam)
  } 

  if (Sam < 17){
    Sam = Sam + cards[Math.floor(Math.random() * 52)]
    console.log('Sam still has less than 17 so he draws another, now he\'s at ' + Sam)
  }
   
  if (Sam > 21){
    console.log('Sam lost.')
    return
  } else if (Sam <= 21 && Dealer < Sam){
    Dealer = Dealer + cards[Math.floor(Math.random()* 52)]
    console.log('Dealer draws a card and is now at ' + Dealer)
  }

  if (Dealer > Sam && Dealer <= 21){
    console.log('Dealer wins.')
    return
  } else if (Dealer < 17){
      Dealer = Dealer + cards[Math.floor(Math.random() * 52)]
      console.log('Dealer draws another and is now at ' + Dealer)
    }

  if (Dealer <= Sam) {
    Dealer = Dealer + cards[Math.floor(Math.random() * 52)]
    console.log('Dealer draws another and is now at ' + Dealer)
  }

  if (Dealer > 21){
    console.log('Sam wins!')
    return
  } else if (Dealer < Sam){
    console.log('Sam wins!')
    return
  } else if (Dealer > Sam){
    console.log('Dealer wins.')
    return
  }
  
}

game()


