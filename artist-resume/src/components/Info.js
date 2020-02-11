import React from 'react'


class Info extends React.Component{
  constructor(){
    super()

    this.state = {
      data:{}
    }
  }

  handleChange(){}

  render(){
    return(
      <div>
        <form className='form'>
          <input type='text' placeholder='Name'></input>
          <input type='text' placeholder='Stage Name'></input>
          <input type='text' placeholder='Address'></input>
          <input type='text' placeholder='Email'></input>
          <input type='text' placeholder='Telephone Number'></input>
          <input type='text' placeholder='Skills'></input>
          <input type='text' placeholder='Languages'></input>
          <div className='text-area'>
            <textarea placeholder='Biography' className='big-input'></textarea>
          </div>
        </form>
      </div>
    )
  }
}

export default Info