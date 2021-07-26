import React from 'react'
import Task from './Task.js'
import { v4 as uuidv4 } from 'uuid';
import TaskForm from './TaskForm.js'
import { connect } from 'react-redux';
import { getToDos } from './actions'
import { getToDosReq } from './BEConnection'

class App extends React.Component {
  constructor(props){
    super()
  }

 componentDidMount() {
  this.props.getToDos()
 }




  render() {
    return (
      <div className="h-screen overflow-hidden">
        <header className="bg-yellow-400 grid place-items-center" >
          <a href={window.location.hostname}>
            <h1 className="font-mono font-bold text-4xl">TO-DO LIST</h1>
          </a>
          <h4>by Pluvas</h4>
        </header>
        <div className="grid place-items-center bg-gray-900 h-full w-screen break-words">
          <div className="h-3/5 w-4/5 lg:w-2/5 sm:3/5 bg-gray-200 overflow-y-auto">
            <TaskForm />
            {console.log(this.props.tasks)}
            {this.props.tasks.map(task =>{if(task!==null){return <Task text={task.text} status={task.status} id={task.id} key={uuidv4()} />}})}
          </div>
        </div>
      </div>
    );
  }
}
 
const mapStateToProps = state => ({
  tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
  getToDos: (userId = 3) => dispatch(getToDos(userId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
