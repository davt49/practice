import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
import Info from './components/Info.js'

const App = () => {
    return (
      <Info/>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)