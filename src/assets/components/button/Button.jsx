import React from 'react'

const Button = ({direction = 'next', handle}) => {
  return (
    <button className='btn btn--dir' onClick={handle}>
        {
            direction !== 'next' ? '⏪': '⏩'
        }
    </button>
  )
}

export default Button