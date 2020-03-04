document.addEventListener('DOMContentLoaded', ()=>{

  const colors = ['black', 'white', 'green', 'yellow']

  function pick(){
        
    for(i=0;i<colors.length;i++){
      
      // let choice = colors[Math.floor(Math.random() * 4)]
      console.log(colors[Math.floor(Math.random() * 4)])
    }
  }

  pick()

})