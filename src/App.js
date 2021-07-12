import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add_task } from './actions'
import Task from './Task.js'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [textInForm, set_textInForm] = useState('')
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  return (
    <div className = "h-screen overflow-hidden">
      <header className = "bg-yellow-400 grid place-items-center" >
        <h1 className = "font-mono font-bold text-4xl">TO-DO LIST</h1>
        <h4>by Pluvas</h4>
      </header>
      <div className="grid place-items-center bg-gray-900 h-full w-screen">
        <div className="h-3/5 w-4/5 sm:w-2/5 bg-gray-200">
          <form onSubmit={(e) => { e.preventDefault(); dispatch(add_task(textInForm)); set_textInForm('') }} className="w-full bg-yellow-400">
            <input type="Text" placeholder='What to do next?' value={textInForm} onChange={(e) => set_textInForm(e.target.value)} id = 'task_input' autocomplete="off" ></input>
          </form>
          {tasks.map(task => <Task text={task.text} status={task.status} id={task.id} key={uuidv4()} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
