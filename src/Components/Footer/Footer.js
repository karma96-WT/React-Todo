import React from 'react'
import './Footer.css'


function Footer(props) {
  return (
    <>
        <footer className='footer'>
            <div className='logo-container'>
                <img className='logo' src='logo.png'/>
            </div>
            <p className='end-para'>&copy; {new Date().getFullYear()} KMT. All rights reserved.</p>
        </footer>
    </>
  )
}

export default Footer