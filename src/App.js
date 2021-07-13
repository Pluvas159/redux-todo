import React from 'react'
import Task from './Task.js'
import { v4 as uuidv4 } from 'uuid';
import TaskForm from './TaskForm.js'
import { connect } from 'react-redux';


class App extends React.Component {
  constructor(props){
    super()
  }


  render() {
    return (
      <div className="h-screen overflow-hidden">
        <header className="bg-yellow-400 grid place-items-center" >
          <h1 className="font-mono font-bold text-4xl">TO-DO LIST</h1>
          <h4>by Pluvas</h4>
        </header>
        <div className="grid place-items-center bg-gray-900 h-full w-screen break-words">
          <div className="h-3/5 w-4/5 lg:w-2/5 sm:3/5 bg-gray-200 overflow-y-auto">
            <TaskForm />
            {this.props.tasks.map(task => <Task text={task.text} status={task.status} id={task.id} key={uuidv4()} />)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
})


export default connect(
  mapStateToProps,
  null
)(App);
