import React from 'react'


class Info extends React.Component{
  constructor(){
    super()

    this.state = {
    }

    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.checkValue = this.checkValue.bind(this)
  }

  handleChange({target: {name, value}}){
    const data = {...this.state.value, [name]: value}
    this.setState({data})
    console.log(this.state)
  }

  // handleSubmit(event){
  //   this.setState({saved: this.state})
  //   event.preventDefault()
  // }
  
  // checkValue(){
  //   console.log(this.state)
  // }
  // componentDidMount(){
  //   setInterval(this.checkValue, 4000)
  // }

  render(){
    return(
      <div>
        <form className='form'>
          <input type='text' placeholder='Name' name='Name' onChange={this.handleChange}></input>
          <input type='text' placeholder='Stage Name' name='Stage Name' onChange={this.handleChange}></input>
          <input type='text' placeholder='Address' name='Address' onChange={this.handleChange}></input>
          <input type='text' placeholder='Email' name='Email' onChange={this.handleChange}></input>
          <input type='text' placeholder='Telephone Number' name='Telephone' onChange={this.handleChange}></input>
          <input type='text' placeholder='Skills' name='Skills' onChange={this.handleChange}></input>
          <input type='text' placeholder='Languages' name='Languages' onChange={this.handleChange}></input>
          <div className='text-area'>
            <textarea placeholder='Biography' className='big-input'></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Info