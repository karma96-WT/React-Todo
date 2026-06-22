import React from 'react'
import './NavBar.css'

function NavBar(props) {
  return (
    <nav className = "navbar"> 
        <div className='navbar-logo' >
            <img className="logo" src='logo.png' alt="Logo"/>
        </div>
        <div className='navbar-links'>
          <button 
            className={props.currentFilter === 'all' ? 'nav-btn active-tab' : 'nav-btn'} 
            onClick={() => props.setFilter('all')}>
              All
          </button>
          <button 
            className={props.currentFilter === 'completed' ? 'nav-btn active-tab' : 'nav-btn'} 
            onClick={() => props.setFilter('completed')}>
              Completed
            </button>
          <button 
            className={props.currentFilter === 'pending' ? 'nav-btn active-tab' : 'nav-btn'} 
            onClick={() => props.setFilter('pending')}>
              Pending
          </button>
          <button 
            className={props.currentFilter === 'active' ? 'nav-btn active-tab' : 'nav-btn'} 
            onClick={() => props.setFilter('active')}>
              Active
          </button>
        </div>
    </nav>
    
  )
}
export default NavBar