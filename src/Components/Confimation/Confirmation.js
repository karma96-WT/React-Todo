import React from 'react'
import './Confirmation.css'

function Confirmation({onConfirm, onCancel, message}) {
    if (!onConfirm) return null;
    return (
        <div className='confirmation-box-overlay'>
            <div className='confirmation-box-container'>
                <h3 className='confirmation-h1'>
                    Confirmation
                </h3>
                <p className='confirmation-message'>Are you sure you want to {message} this task?</p>
                <div className='confirmation-btn-container'>
                    <button className='confirmation-btn-no' onClick={(e) => { e.stopPropagation(); onCancel(); }}>No</button>
                    <button className='confirmation-btn-yes' onClick={(e) => { e.stopPropagation(); onConfirm(); }}>Yes</button>
                </div>
            </div>
        </div>
    )
}

export default Confirmation