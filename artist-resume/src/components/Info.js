import React from 'react'


class Info extends React.Component{
  constructor(){
    super()

    this.state = {}
  }

  render(){
    return(
      <div>
        <ul>
          <li><textarea placeholder='Name'></textarea></li>
          <li><textarea placeholder='Stage Name'></textarea></li>
          <li><textarea placeholder='Address'></textarea></li>
          <li><textarea placeholder='Email'></textarea></li>
          <li><textarea placeholder='Telephone Number'></textarea></li>
          <li><textarea placeholder='Skills'></textarea></li>
          <li><textarea placeholder='Languages'></textarea></li>
          <li><textarea placeholder='Biography'></textarea></li>
        </ul>
      </div>
    )
  }
}

export default Info