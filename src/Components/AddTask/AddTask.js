import React, {useState} from 'react'
import './AddTask.css'
import Confirmation from '../Confimation/Confirmation';

function AddTask({isOpen, onClose, initialTasks, onAddTask}){

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('')
    const [add, setAdd] = useState(false)

    if(!isOpen) return null;

    const handleSubmit = () => {
        if (!title.trim() || !description.trim()) {
            alert('Fill all fields');
            return;
        }
        setAdd(true);
    }

    const finalSubmissionConfirmation = () => {
        onAddTask(title,description);
        setTitle('');
        setDescription('');
        setAdd(false);
        onClose();
    }

    return (
        <div className='add-task-overlay' onClick={onClose}>
            <div className='add-task-container' onClick={(e) => e.stopPropagation()}>
                <h2>Add New Task</h2>
                <input 
                    className='add-task-title' 
                    placeholder='Enter Task title'
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                <input 
                    className='add-task-description' 
                    placeholder='Enter Task description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                
                <button className='add-task-btn' onClick={handleSubmit}>Add Task</button>
                
                <button 
                type="button" 
                style={{ background: 'none', color: '#666', border: 'none', cursor: 'pointer' }} 
                onClick={onClose}
                >
                Cancel
                </button>
                {add && (
                    <Confirmation
                        onConfirm={finalSubmissionConfirmation}
                        onCancel={(e) => {
                            if (e) e.stopPropagation(); 
                            setAdd(false);
                        }}
                        message={'add'}
                    />
                )}
            </div>
        </div>
    )
}

export default AddTask