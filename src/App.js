import React from 'react'
require('./App.css')

const App = () => {
  return (
    <div>
      <h1>Tic Tac Toe!</h1>
      <div className='board'>
        <div className='square' />
        <div className='square' />
        <div className='square' />
        <div className='square' />
        <div className='square' />
        <div className='square' />
        <div className='square' />
        <div className='square' />
        <div className='square' />
        <div className='square' />
        <div className='square' />
        <div className='square' />
      </div>
    </div>
  )
}
export default App
