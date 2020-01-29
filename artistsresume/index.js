document.addEventListener('DOMContentLoaded', () => {

  const page = document.getElementById('root')

  artist = {
    name: 'George Eskimo',
    stageName: 'Eski',
    address: '12 Shoreditch Street',
    email: 'geskimo@email',
    telephoneNumber: '09876352738',
    skills: 'dancing, singing',
    languagesSpoken: 'english',
    biography: 'loremlorem'
  }
  console.log(artist)
  console.log(artist.name)
  const keys = Object.keys(artist)
  // console.log(keys)
  const values = Object.values(artist)
  // console.log(values)
  const entries = Object.entries(artist)
  // console.log(entries)

  //answer input
  for (i = 0; i < entries.length; i++) {
    const question = document.createElement('input')
    question.classList.add('question')
    question.style.height = '20px'
    question.style.width = '40vw'
    question.placeholder = `${keys[i]}`
    question.setAttribute('id', `${i}`)
    page.appendChild(question)
  }
  //user input
  for (i = 0; i < entries.length; i++){
    const userInput = document.getElementById(`${i}`).value

    console.log(userInput)
  }
  //submit button
  const submit = document.querySelector('button')
  
  submit.onclick = function(){
    console.log(document.getElementById('0').value)
    console.log(document.getElementById('1').value)
    console.log(document.getElementById('2').value)
    console.log(document.getElementById('3').value)
    console.log(document.getElementById('4').value)
    console.log(document.getElementById('5').value)
    console.log(document.getElementById('6').value)
    console.log(document.getElementById('7').value)
  }
  
  //display data
  for (i = 0; i < entries.length; i++) {
    const displayData = document.createElement('p')
    displayData.innerHTML = `${values[i]}`
    page.appendChild(displayData)
  }
})