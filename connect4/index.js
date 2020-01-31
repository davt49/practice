document.addEventListener('DOMContentLoaded', () =>{

  const grid = document.querySelector('.grid')
  const board = []
  const height = 6
  const width = 7
  

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

  grid.style.margin = '50px 10px 10px 30px'
  document.querySelector('.player-one-title').style.color = 'black'
  document.querySelector('.player-two-title').style.color = 'yellow'
  
  let playerOne
  let playerTwo


  function startbox(){
    playerOne = 0
    playerTwo = 6

    board[playerOne].classList.add('active')
    board[playerTwo].classList.add('active2')
  }
  startbox()


  
  
  function handleKeyDown(e){
 
    switch(e.keyCode){
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
    console.log(playerOne)
    console.log(e.keyCode)
    }


    window.addEventListener('keypress', handleKeyDown)

})