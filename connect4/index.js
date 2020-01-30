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
      // square.style.backgroundColor = 'rgba(217, 217, 217, 0.5)'
      // square.style.height = '14vh'
      // square.style.width = '13vw'
      // square.style.margin = '1px 2px 1px 2px'
      // square.style.display = 'inline-block'
      board.push(square)
      grid.append(square)
    }
  }

  makeGrid()

  grid.style.margin = '50px 10px 10px 30px'
  
  
  document.querySelector('.player-one-title').style.color = 'black'
  document.querySelector('.player-two-title').style.color = 'yellow'
  
  let playerOne = 0
  let playerOneHover = board[playerOne]
  playerOneHover.classList.add('active')
  
  let playerTwo = 6
  let playerTwoHover = board[playerTwo]
  playerTwoHover.classList.add('active2')

  console.log(board[0])
  console.log(playerOne)
  console.log(board[playerOne + 1])
  test = board[playerOne + 1]
  test.classList.add('active')

  function handleKeyDown(e){

      if (e.keyCode === 97 && playerOne > 0){
        
        playerOne--
        console.log(e.keyCode + ' ' + playerOne)
        
      }

      else if (e.keyCode === 115 && playerOne < 6){

        playerOne++
        console.log(e.keyCode + ' ' + playerOne)
        
      } return 
    }


    window.addEventListener('keypress', handleKeyDown)

})