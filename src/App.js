import React from 'react'
require('./App.css')

class App extends React.Component {
  handleClick (index) {
    console.log(index)
  }
  render () {
    const board = [ '', '', '', '', '', '', '', '', '' ]

    return (
      <div>
        <h1>Tic Tac Toe!</h1>
        <div className='board'>
          {board.map((square, index) => (
            <div className='square' key={index} onClick={() => this.handleClick(index)} />
        ))}
        </div>
      </div>
    )
  }
}

export default App
