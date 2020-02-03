document.addEventListener('DOMContentLoaded', () =>{

  const grid = document.querySelector('.grid')
  const board = []
  const height = 6
  const width = 7

  let playerOne
  let playerTwo

  //Set the Grid
  function makeGrid(){
    for (i = 0; i < height * width; i++){
      const square = document.createElement('div')
      square.classList.add('grid-item')
      square.setAttribute('id', `${i}`)
      board.push(square)
      grid.append(square)
    }
  }
  makeGrid()
 

  //Hover class (for display) for the two players
  function startbox(){
    playerOne = 0
    playerTwo = 6

    board[playerOne].classList.add('active')
    board[playerTwo].classList.add('active2')
  }
  startbox()

  //Hover controlls for the two players
  function handleKeyDown(e){
 
    switch(e.keyCode){
      //playerOne
      case 97:
        if (playerOne !== 0){  
          if (playerOne < 0 || playerOne === -1) {
            playerOne = 6
          }
          if (playerOne > 6 || playerOne === 7) {
            playerOne = 0
          }
          board.forEach(square => square.classList.remove('active'))
         
          playerOne = playerOne - 1
          board[playerOne].classList.add('active')

        }
        break
      case 115: 
        if(playerOne !== 6){
          if (playerOne < 0 || playerOne === -1) {
            playerOne = 6
          }
          if (playerOne > 6 || playerOne === 7) {
            playerOne = 0
          }
          board.forEach(square => square.classList.remove('active'))
          
          playerOne = playerOne + 1
          board[playerOne].classList.add('active')
  
        }  
        break
        //playerTwo
      case 107:
        if (playerTwo !== 0) {
          if (playerTwo < 0 || playerTwo === -1) {
            playerTwo = 6
          }
          if (playerTwo > 6 || playerTwo === 7) {
            playerTwo = 0
          }
          board.forEach(square => square.classList.remove('active2'))

          playerTwo = playerTwo - 1
          board[playerTwo].classList.add('active2')

        } 
        break
      case 108:
        if (playerTwo !== 6) {
          if (playerTwo < 0 || playerTwo === -1) {
            playerTwo = 6
          }
          if (playerTwo > 6 || playerTwo === 7) {
            playerTwo = 0
          }
          board.forEach(square => square.classList.remove('active2'))

          playerTwo = playerTwo + 1
          board[playerTwo].classList.add('active2')

        } 
        break

        default:
      }
    console.log(e.keyCode)
    }

    //PlayerOne submit
    function enterOne(e){

      switch(e.keyCode){
        case 122:
          if (playerOne === 0){
            for(i = 5; i > 0; i-- ){
              if (board[`${playerOne + width * i}`].classList.contains('cross') === false 
              && board[`${playerOne + width * i}`].classList.contains('circle') === false
              && board[playerOne].classList.contains('cross') === false
              && board[playerOne].classList.contains('circle') === false){
                board[`${playerOne + width * i}`].classList.add('cross')
                window.removeEventListener('keypress', enterOne)
                window.addEventListener('keypress', enterTwo)
                document.getElementById('player-turn').innerHTML = 'Player Two\'s Turn!'
                return
              }
            }
            if (board[`${playerOne + width}`].classList.contains('cross')
            || board[`${playerOne + width}`].classList.contains('circle') ){
              board[playerOne].classList.add('cross')
              window.removeEventListener('keypress', enterOne)
              window.addEventListener('keypress', enterTwo)
              document.getElementById('player-turn').innerHTML = 'Player Two\'s Turn!'
              return
            }
          }
          if (playerOne === 1){
            for(i = 5; i > 0; i-- ){
              if (board[`${playerOne + width * i}`].classList.contains('cross') === false && board[`${playerOne + width * i}`].classList.contains('circle') === false){
                board[`${playerOne + width * i}`].classList.add('cross')
                window.removeEventListener('keypress', enterOne)
                window.addEventListener('keypress', enterTwo)
                document.getElementById('player-turn').innerHTML = 'Player Two\'s Turn!'
                return
              }
            }
            if (board[`${playerOne + width}`].classList.contains('cross')
              || board[`${playerOne + width}`].classList.contains('circle')) {
              board[playerOne].classList.add('cross')
              window.removeEventListener('keypress', enterOne)
              window.addEventListener('keypress', enterTwo)
              document.getElementById('player-turn').innerHTML = 'Player Two\'s Turn!'
              return
            }
          }
          if (playerOne === 2){
            for(i = 5; i > 0; i-- ){
              if (board[`${playerOne + width * i}`].classList.contains('cross') === false && board[`${playerOne + width * i}`].classList.contains('circle') === false){
                board[`${playerOne + width * i}`].classList.add('cross')
                window.removeEventListener('keypress', enterOne)
                window.addEventListener('keypress', enterTwo)
                document.getElementById('player-turn').innerHTML = 'Player Two\'s Turn!'
                return
              }
            }
            if (board[`${playerOne + width}`].classList.contains('cross')
            || board[`${playerOne + width}`].classList.contains('circle') ){
              board[playerOne].classList.add('cross')
              window.removeEventListener('keypress', enterOne)
              window.addEventListener('keypress', enterTwo)
              document.getElementById('player-turn').innerHTML = 'Player Two\'s Turn!'
              return
            }
          }
          if (playerOne === 3){
            for(i = 5; i > 0; i-- ){
              if (board[`${playerOne + width * i}`].classList.contains('cross') === false && board[`${playerOne + width * i}`].classList.contains('circle') === false){
                board[`${playerOne + width * i}`].classList.add('cross')
                window.removeEventListener('keypress', enterOne)
                window.addEventListener('keypress', enterTwo)
                document.getElementById('player-turn').innerHTML = 'Player Two\'s Turn!'
                return
              }
            }
            if (board[`${playerOne + width}`].classList.contains('cross')
            || board[`${playerOne + width}`].classList.contains('circle') ){
              board[playerOne].classList.add('cross')
              window.removeEventListener('keypress', enterOne)
              window.addEventListener('keypress', enterTwo)
              document.getElementById('player-turn').innerHTML = 'Player Two\'s Turn!'
              return
            }
          }
          if (playerOne === 4){
            for(i = 5; i > 0; i-- ){
              if (board[`${playerOne + width * i}`].classList.contains('cross') === false && board[`${playerOne + width * i}`].classList.contains('circle') === false){
                board[`${playerOne + width * i}`].classList.add('cross')
                window.removeEventListener('keypress', enterOne)
                window.addEventListener('keypress', enterTwo)
                document.getElementById('player-turn').innerHTML = 'Player Two\'s Turn!'
                return
              }
            }
            if (board[`${playerOne + width}`].classList.contains('cross')
            || board[`${playerOne + width}`].classList.contains('circle') ){
              board[playerOne].classList.add('cross')
              window.removeEventListener('keypress', enterOne)
              window.addEventListener('keypress', enterTwo)
              document.getElementById('player-turn').innerHTML = 'Player Two\'s Turn!'
              return
            }
          }
          if (playerOne === 5){
            for(i = 5; i > 0; i-- ){
              if (board[`${playerOne + width * i}`].classList.contains('cross') === false && board[`${playerOne + width * i}`].classList.contains('circle') === false){
                board[`${playerOne + width * i}`].classList.add('cross')
                window.removeEventListener('keypress', enterOne)
                window.addEventListener('keypress', enterTwo)
                document.getElementById('player-turn').innerHTML = 'Player Two\'s Turn!'
                return
              }
            }
            if (board[`${playerOne + width}`].classList.contains('cross')
            || board[`${playerOne + width}`].classList.contains('circle') ){
              board[playerOne].classList.add('cross')
              window.removeEventListener('keypress', enterOne)
              window.addEventListener('keypress', enterTwo)
              document.getElementById('player-turn').innerHTML = 'Player Two\'s Turn!'
              return
            }
          }
          if (playerOne === 6){
            for(i = 5; i > 0; i-- ){
              if (board[`${playerOne + width * i}`].classList.contains('cross') === false && board[`${playerOne + width * i}`].classList.contains('circle') === false){
                board[`${playerOne + width * i}`].classList.add('cross')
                window.removeEventListener('keypress', enterOne)
                window.addEventListener('keypress', enterTwo)
                document.getElementById('player-turn').innerHTML = 'Player Two\'s Turn!'
                return
              }
            }
            if (board[`${playerOne + width}`].classList.contains('cross')
              || board[`${playerOne + width}`].classList.contains('circle')) {
              board[playerOne].classList.add('cross')
              window.removeEventListener('keypress', enterOne)
              window.addEventListener('keypress', enterTwo)
              document.getElementById('player-turn').innerHTML = 'Player Two\'s Turn!'
              return
            }
          }
          

          break
          default:
      }
    }

    //PlayerTwo submit
    function enterTwo(e){
      switch(e.keyCode){
        case 44:
          if (playerTwo === 0) {
            for (i = 5; i > 0; i--) {
              if (board[`${playerTwo + width * i}`].classList.contains('circle') === false && board[`${playerTwo + width * i}`].classList.contains('cross') === false) {
                board[`${playerTwo + width * i}`].classList.add('circle')
                window.removeEventListener('keypress', enterTwo)
                window.addEventListener('keypress', enterOne)
                document.getElementById('player-turn').innerHTML = 'Player One\'s Turn!'
                return
              }
            }
            if (board[`${playerTwo + width}`].classList.contains('cross')
              || board[`${playerTwo + width}`].classList.contains('circle')) {
              board[playerTwo].classList.add('circle')
              window.removeEventListener('keypress', enterTwo)
              window.addEventListener('keypress', enterOne)
              document.getElementById('player-turn').innerHTML = 'Player One\'s Turn!'
              return
            }
          }
          if (playerTwo === 1) {
            for (i = 5; i > 0; i--) {
              if (board[`${playerTwo + width * i}`].classList.contains('circle') === false && board[`${playerTwo + width * i}`].classList.contains('cross') === false) {
                board[`${playerTwo + width * i}`].classList.add('circle')
                window.removeEventListener('keypress', enterTwo)
              window.addEventListener('keypress', enterOne)
              document.getElementById('player-turn').innerHTML = 'Player One\'s Turn!'
                return
              }
            }
            if (board[`${playerTwo + width}`].classList.contains('cross')
              || board[`${playerTwo + width}`].classList.contains('circle')) {
              board[playerTwo].classList.add('circle')
              window.removeEventListener('keypress', enterTwo)
              window.addEventListener('keypress', enterOne)
              document.getElementById('player-turn').innerHTML = 'Player One\'s Turn!'
              return
            }
          }
          if (playerTwo === 2) {
            for (i = 5; i > 0; i--) {
              if (board[`${playerTwo + width * i}`].classList.contains('circle') === false && board[`${playerTwo + width * i}`].classList.contains('cross') === false) {
                board[`${playerTwo + width * i}`].classList.add('circle')
                window.removeEventListener('keypress', enterTwo)
              window.addEventListener('keypress', enterOne)
              document.getElementById('player-turn').innerHTML = 'Player One\'s Turn!'
                return
              }
            }
            if (board[`${playerTwo + width}`].classList.contains('cross')
              || board[`${playerTwo + width}`].classList.contains('circle')) {
              board[playerTwo].classList.add('circle')
              window.removeEventListener('keypress', enterTwo)
              window.addEventListener('keypress', enterOne)
              document.getElementById('player-turn').innerHTML = 'Player One\'s Turn!'
              return
            }
          }
          if (playerTwo === 3) {
            for (i = 5; i > 0; i--) {
              if (board[`${playerTwo + width * i}`].classList.contains('circle') === false && board[`${playerTwo + width * i}`].classList.contains('cross') === false) {
                board[`${playerTwo + width * i}`].classList.add('circle')
                window.removeEventListener('keypress', enterTwo)
              window.addEventListener('keypress', enterOne)
              document.getElementById('player-turn').innerHTML = 'Player One\'s Turn!'
                return
              }
            }
            if (board[`${playerTwo + width}`].classList.contains('cross')
              || board[`${playerTwo + width}`].classList.contains('circle')) {
              board[playerTwo].classList.add('circle')
              window.removeEventListener('keypress', enterTwo)
              window.addEventListener('keypress', enterOne)
              document.getElementById('player-turn').innerHTML = 'Player One\'s Turn!'
              return
            }
          }
          if (playerTwo === 4) {
            for (i = 5; i > 0; i--) {
              if (board[`${playerTwo + width * i}`].classList.contains('circle') === false && board[`${playerTwo + width * i}`].classList.contains('cross') === false) {
                board[`${playerTwo + width * i}`].classList.add('circle')
                window.removeEventListener('keypress', enterTwo)
              window.addEventListener('keypress', enterOne)
              document.getElementById('player-turn').innerHTML = 'Player One\'s Turn!'
                return
              }
            }
            if (board[`${playerTwo + width}`].classList.contains('cross')
              || board[`${playerTwo + width}`].classList.contains('circle')) {
              board[playerTwo].classList.add('circle')
              window.removeEventListener('keypress', enterTwo)
              window.addEventListener('keypress', enterOne)
              document.getElementById('player-turn').innerHTML = 'Player One\'s Turn!'
              return
            }
          }
          if (playerTwo === 5) {
            for (i = 5; i > 0; i--) {
              if (board[`${playerTwo + width * i}`].classList.contains('circle') === false && board[`${playerTwo + width * i}`].classList.contains('cross') === false) {
                board[`${playerTwo + width * i}`].classList.add('circle')
                window.removeEventListener('keypress', enterTwo)
                window.addEventListener('keypress', enterOne)
                document.getElementById('player-turn').innerHTML = 'Player One\'s Turn!'
                return
              }
            }
            if (board[`${playerTwo + width}`].classList.contains('cross')
              || board[`${playerTwo + width}`].classList.contains('circle')) {
              board[playerTwo].classList.add('circle')
              window.removeEventListener('keypress', enterTwo)
              window.addEventListener('keypress', enterOne)
              document.getElementById('player-turn').innerHTML = 'Player One\'s Turn!'
              return
            }
          }
          if (playerTwo === 6) {
            for (i = 5; i > 0; i--) {
              if (board[`${playerTwo + width * i}`].classList.contains('circle') === false && board[`${playerTwo + width * i}`].classList.contains('cross') === false) {
                board[`${playerTwo + width * i}`].classList.add('circle')
                window.removeEventListener('keypress', enterTwo)
                window.addEventListener('keypress', enterOne)
                document.getElementById('player-turn').innerHTML = 'Player One\'s Turn!'
                return
              }
            }
            if (board[`${playerTwo + width}`].classList.contains('cross')
              || board[`${playerTwo + width}`].classList.contains('circle')) {
              board[playerTwo].classList.add('circle')
              window.removeEventListener('keypress', enterTwo)
              window.addEventListener('keypress', enterOne)
              document.getElementById('player-turn').innerHTML = 'Player One\'s Turn!'
              return
            }
          }
          break
        default:
      }
    }

    window.addEventListener('keypress', enterOne)

  
    window.addEventListener('keypress', handleKeyDown)

})