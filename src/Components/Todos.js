import React from 'react';
import Todo from './Todo/Todo'
import './todos.css'

function Todos(props) {
  const tasksToRender = props.initialTasks;
  return (
    <div className='todos-container'>
        {tasksToRender.length ===0? ("No Todo created yet"): 
                (props.initialTasks.filter((task) => {
                    if (props.currentFilter ==='all') {
                        return true;
                    }
                    return task.status === props.currentFilter;
                    
                }).map((task) => (
                    <Todo
                        task = {task}
                        onDelete = {props.onDelete
                        }
                        onClick = {props.onClick}
                    />
                )))
        }
    </div>
  )
}

export default Todos