import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer/Footer";
import FAB from "./Components/FAB/FAB.js"
import AddTask from './Components/AddTask/AddTask.js';

function App() {
  const [task,setTask] =useState(()=>{
    const savedTasks = localStorage.getItem('task')
    return savedTasks ? JSON.parse(savedTasks): []
  }) 

  const [currentFilter, setCurrentFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(()=>{
    localStorage.setItem('task', JSON.stringify(task))
  },[task]);

  const handleTaskAdd = (newTitle, newDescription) =>{
    const newTask ={
      id: task.length + 1,
      title: newTitle,
      description: newDescription,
      status: 'pending',
    }
    setTask([...task, newTask]);
  }

  const onDelete = (Todo) => {
    setTask(task.filter((e)=>{
      return e!==Todo;
    }))
  }

  const onClick = (Todo) => {
    setTask(
      task.map((t)=>{
        if (t.id === Todo){
          return{
            ...t,
            status: t.status === 'pending'? 'active': t.status === 'active'? 'completed':'active'
          };
        }
        return t;
      })
    )
  }

  return (
    <div className="App">
      <>
        <NavBar setFilter={setCurrentFilter} currentFilter={currentFilter} />
        <Todos initialTasks = {task} currentFilter= {currentFilter} onDelete = {onDelete} onClick={onClick}/>
        <FAB onClick={() => setIsModalOpen(true)} />
        <Footer/>
        <AddTask 
          initialTasks= {task}
          setTasks = {setTask}
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          onAddTask = {handleTaskAdd}
        />
      </>
    </div>
  );
}

export default App;
