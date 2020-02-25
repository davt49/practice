document.addEventListener('DOMContentLoaded', ()=>{

const cw = ['Cardiff West', 11014, 'C', 17803, 'L', 4923, 'UKIP', 2069, 'LD']
const isf = ['Islington South & Finsbury', 22547, 'L', 9389, 'C', 4829, 'LD', 3375, 'UKIP', 3371, 'G', 309, 'Ind']
let total = 0

function calculate(info){
  
  // for(i=0; i < info.length; i++){
  //   i = i++
  //   total = total + info[i] 
  // }
  // console.log(total)

  console.log(info[1] + info[3] + info[5] +info[7] + info[9])
}


function printIt(info){
  console.log('++'+info[0]+'++')
  for(i=0; i < info.length; i++){


    if(info[i] === 'C'){
      console.log('Conservative Party '+info[i-1])
    }
    if(info[i] === 'L'){
      console.log('Labour Party '+info[i-1])
    }
    if(info[i] === 'UKIP'){
      console.log('UKIP '+info[i-1])
    }
    if(info[i] === 'LD'){
      console.log('Liberal Democrats '+info[i-1])
    }
    if(info[i] === 'G'){
      console.log('Green Party '+info[i-1])
    }
    if(info[i] === 'Ind'){
      console.log('Independent '+info[i-1])
    }
  }
}

// printIt(cw)
calculate(cw)

// printIt(isf)



})