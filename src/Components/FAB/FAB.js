import React from 'react'
import './FAB.css'

const FAB = ({ onClick }) => {
  return (
    <button className='FAB-btn' title='Add Task' onClick={onClick}>
        <span className='FAB-icon'>+</span>
    </button>
  )
}

export default FAB