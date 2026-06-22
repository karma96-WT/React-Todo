import React, { memo, useEffect, useState } from 'react'
import './Todo.css'
import Confirmation from '../Confimation/Confirmation'

function Todo({task, onDelete, onClick}) {

  const [doDelete, setDoDelete] = useState(false);
  const [doStatusChange, setDoStatusChange] =useState(false)
  const [msg, setMsg] = useState('')

  let msg = 'Active';
  if (task.status === 'active') {
    msg = 'Completed';
  } else if (task.status === 'pending') {
    msg = 'Active';
  }

  return (
    <>
        <div id={task.id} className='todo-container' onClick={()=>{setDoStatusChange(true)}}>
          <h3 className='todo-title'>{task.title} 
            <span className={`todo-status ${task.status}`}>({task.status})</span>
          </h3>
          <div className='todo-element-container'>
            <div className='todo-checkbox-and-description-container'>
              <p className='todo-description'>{task.description}</p>
            </div>
            <button className='todo-btn' onClick={ (e)=> {
              e.stopPropagation();
              setDoDelete(true)
              }}>Delete</button>

            {doDelete && 
              <Confirmation onConfirm={() => {onDelete(task);setDoDelete(false)}} onCancel={()=> setDoDelete(false)} message={'delete'} />
            }
            {doStatusChange && 
              <Confirmation onConfirm={()=> {onClick(task.id);setDoStatusChange(false)}} onCancel={()=> setDoStatusChange(false)} message={`mark as ${msg}`}/>
            }
          </div>
        </div>
    </>
  )
}

export default Todo
