import React from 'react'
import { add_task, change_filter } from './actions' 
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { connect } from 'react-redux';

class TaskForm extends React.Component {
    constructor(props) {
        super()
        this.state = {
            textInForm: ''
        }
    }

    render() {
        return(
        <div>
            <form onSubmit={(e) => { e.preventDefault(); this.props.add_task(this.state.textInForm); this.setState({textInForm : ''});}} className="w-full bg-yellow-400">
                <input type="Text" placeholder='What to do next?' value={this.state.textInForm} onChange={(e) => this.setState({textInForm : e.target.value})} id='task_input' autocomplete="off" ></input>
            </form>
            <div className="bg-yellow-400 ">
                <DropdownButton title={this.props.filterOfTasks} menuAlign="left" id="filter_dropdown" variant=" pl-1 font-semibold hover:text-white">
                    <Dropdown.Item as="button" className=" pl-1 pr-1 bg-yellow-400 font-semibold hover:text-white" onClick={e => { this.props.change_filter(e.target.innerHTML ) }}>All</Dropdown.Item>
                    <Dropdown.Item as="button" className="pr-1 bg-yellow-400 text-green-600 font-semibold hover:text-white" onClick={e => { this.props.change_filter(e.target.innerHTML ) }}>Completed</Dropdown.Item>
                    <Dropdown.Item as="button" className="bg-yellow-400 font-semibold line-through hover:text-white text-red-600" onClick={e => { this.props.change_filter(e.target.innerHTML ) }}>SoftDeleted</Dropdown.Item>
                    <Dropdown.Item as="button" className="bg-yellow-400 pl-1 text-purple-600 font-semibold  hover:text-white" onClick={e => { this.props.change_filter(e.target.innerHTML ) }}>To do</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>)
    }
}

const mapStateToProps = state => ({
    filterOfTasks: state.filterOfTasks
  })
  
  const mapDispatchToProps = dispatch => ({
    add_task: text => dispatch(add_task(text)),
    change_filter: text => dispatch(change_filter(text))
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TaskForm);
  