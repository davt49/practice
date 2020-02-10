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
          <li>Name</li>
          <li>Stage Name</li>
          <li>Address</li>
          <li>Email</li>
          <li>Telephone Number</li>
          <li>Skills</li>
          <li>Languages</li>
          <li>Biography</li>
        </ul>
      </div>
    )
  }
}

export default Info