import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"


const App = () => {
  const [showAddTask, setShowAddTask] = useState
  (false)
  const [tasks, setTasks] = useState([ ])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //fetch tasks

  const fetchTasks = async () => {
    const response = await 
    fetch(`http://localhost:5000/tasks`)

    const data = await response.json()
    return data
  }

  

//Add-Task
const addTask = async (task) => {
  const response = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  const data = await response.json()

  setTasks([...tasks, data])

  // const id = Math.floor(Math.random() * 
  // 10000) +1
  // const newTask = {id, ...task}
  // setTasks([...tasks, newTask])
}

//Delete task
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE'
  })

  setTasks(tasks.filter((task) => task.id !==
   id))
}
//Toggle Remainder
const toggleRemainder = (id) => {
  setTasks(tasks.map((task) => task.id === id
  ? {...task, reminder: !task.reminder} : task))
}
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd= {addTask}/>}
      {tasks.length > 0 ?
        <Tasks tasks={tasks} 
        onDelete={deleteTask}
         onToggle ={toggleRemainder}/>: 
        ("No Tasks Added")}
    </div>
  );
}

export default App;
