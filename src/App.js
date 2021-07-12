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
    <div className="grid justify-center bg-gray-900 h-screen w-screen">
      <form onSubmit={(e) => {e.preventDefault(); dispatch(add_task(textInForm)); set_textInForm('')}}>
        <input type="Text" placeholder='What to do next?' value={textInForm} onChange = {(e) => set_textInForm(e.target.value)}></input>
      </form>
      {tasks.map(task => <Task text={task.text} status={task.status} id={task.id} key={uuidv4()}/>)}
    </div>
  );
}

export default App;
