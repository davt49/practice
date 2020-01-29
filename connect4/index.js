document.addEventListener('DOMContentLoaded', () =>{

  const grid = document.querySelector('.grid')
  const height = 6
  const width = 7

  function makeGrid(){
    for (i = 0; i < height * width; i++){
      const square = document.createElement('div')
      square.classList.add('grid-item')
      square.setAttribute('id', `${i}`)
      square.style.backgroundColor = 'teal'
      square.style.height = '14vh'
      square.style.width = '13vw'
      square.style.margin = '1px 2px 1px 2px'
      square.style.display = 'inline-block'
      grid.append(square)
    }
  }

  makeGrid()
  
  const playerOneMO
  const playerTwoMO


  function playerOne(e){
    switch(e.keyCode){
      case 65://A

      case 53://S

    }
  }

})