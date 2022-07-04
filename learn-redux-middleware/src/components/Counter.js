import React from 'react'

const Counter = ({ number, onIncreaseAsync, onDecreaseAsync }) => {
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={onIncreaseAsync}>+1</button>
      <button onClick={onDecreaseAsync}>-1</button>
    </div>
  )
}

export default Counter