import React from 'react'
require('./App.css')

import { Square } from './Square.js'

const App = () => {
  const board = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]
  return (
    <div>
      <h1>Tic Tac Toe!</h1>
      <div className='board'>
        {board.map((square, index) => <Square key={index} />)}
      </div>
    </div>
  )
}
export default App
