import React from 'react'
import { remove_task, edit_task, reverse_task, change_task } from './actions'
import './index.css';
import { connect } from 'react-redux';


class Task extends React.Component{
    constructor({ status, text, id, filterOfTasks }) {
        super()
        this.state = {
            editOfTask : ''
        }
    }
    ifNothing = () => {
        return (
            <div className="w-full font-semibold text-black pb-8 pl-1">
                <p>{this.props.text}</p>
                <button onClick={e => { e.preventDefault(); this.props.change_task(this.props.tasks.find(task => task.Id === this.props.Id), false) }}
                    className="float-right pl-1 pr-1 p-px rounded-lg text-black font-semibold bg-green-500 mr-2 hover:text-white " >complete</button>
                <button class = "edit_button" onClick={e => { e.preventDefault(); this.props.edit_task(this.props.Id) }}
                     >edit</button>
            </div>
        )

    }


    ifCompleted = () => {
        return (
            <div className="w-full text-green-600 font-semibold pb-8 pl-1">
                <p>{this.props.text}</p>
                <button onClick={e => { e.preventDefault(); this.props.change_task(this.props.tasks.find(task => task.Id === this.props.Id), 'softdeleted') }}
                    className="float-right p-px pl-1 pr-1 rounded-lg text-black font-semibold mr-4 bg-red-500 hover:text-white" >delete</button>
                <button class = "edit_button" onClick={e => { e.preventDefault(); this.props.edit_task(this.props.Id) }}
                     >edit</button>
            </div>
        )
    }


    ifSoftDeleted = () => {
        return (
            <div className="w-full font-semibold text-black pb-8 pl-1 pr-2">
                <p className="line-through text-red-600">{this.props.text}</p>
                <button onClick={e => { e.preventDefault(); this.props.remove_task(this.props.Id) }}
                    className="float-right hover:text-white bg-purple-700 rounded-lg font-semibold p-px pl-2 pr-2" >remove</button>
                <button class = "edit_button" onClick={e => { e.preventDefault(); this.props.edit_task(this.props.Id) }}
                     >edit</button>
            </div>
        )


    }
    componentDidMount(){
    if(this.props.status=='edit'){
        this.nameInput.focus(); 
        } 
     }

    ifEditing = () => {
        return(
            <form onSubmit={e => {e.preventDefault(); this.props.reverse_task(this.props.Id, (this.state.editOfTask=='') ? null : this.state.editOfTask)}} className = "text-black">
                <input type='text' onChange={(e) => this.setState({editOfTask: e.target.value})} value = {this.state.editOfTask} ref={(input)=>{this.nameInput = input}} className="rounded-lg outline-none mt-1 pl-1 focus:ring-2 focus:ring-red-600"/>
            </form>
 
        )

    }





    renderTask = () => {
        if (this.props.status === true && this.props.cancel!==true) {
            if(this.props.filterOfTasks!=='SoftDeleted' && this.props.filterOfTasks!=='To do'){
                return (
                    this.ifCompleted())
                }

        } else if (this.props.cancel === true) {
            if(this.props.filterOfTasks!=='Completed' && this.props.filterOfTasks!=='To do'){
            return (
                this.ifSoftDeleted())
            }

        } else if (this.props.status === 'edit') {
            return(
                this.ifEditing()
                )

        } else {
            if (this.props.filterOfTasks==='All' || this.props.filterOfTasks==='To do'){
            return (
                this.ifNothing())
        }
    }
}
    render(){
    return (
        <div>
        {this.renderTask()}
        </div>
    )
    }
}

const mapStateToProps = state => ({
    tasks : state.tasks,
    filterOfTasks : state.filterOfTasks
  })

  
const mapDispatchToProps = dispatch => ({
    remove_task: taskId => dispatch(remove_task(taskId)),
    reverse_task: (taskId, changedText) => dispatch(reverse_task(taskId, changedText)),
    edit_task: taskId => dispatch(edit_task(taskId)),
    change_task: (taskId, changeTo) => dispatch(change_task(taskId, changeTo)),
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Task);
  