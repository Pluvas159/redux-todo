import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove_task, edit_task, reverse_task, change_task } from './actions'


function Task({ status, text, id }) {
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    const [editOfTask, set_editOfTask] = useState('')

    const ifNothing = () => {
        return (
            <div className="w-full ">
                <p>{text}</p>
                <button onClick={e => { e.preventDefault(); dispatch(change_task(id, 'completed')) }}
                    className="float-right" >complete</button>
                <button class = "edit_button" onClick={e => { e.preventDefault(); dispatch(edit_task(id)) }}
                    className="float-right" >edit</button>
            </div>
        )

    }


    const ifCompleted = () => {
        return (
            <div className="w-full text-green-400">
                <p>{text}</p>
                <button onClick={e => { e.preventDefault(); dispatch(change_task(id, 'softdeleted')) }}
                    className="float-right" >delete</button>
                <button class = "edit_button" onClick={e => { e.preventDefault(); dispatch(edit_task(id)) }}
                    className="float-right" >edit</button>
            </div>
        )
    }


    const ifSoftDeleted = () => {
        return (
            <div className="w-full">
                <p className="line-through text-red-600">{text}</p>
                <button onClick={e => { e.preventDefault(); dispatch(remove_task(id)) }}
                    className="float-right" >remove</button>
                <button class = "edit_button" onClick={e => { e.preventDefault(); dispatch(edit_task(id)) }}
                    className="float-right" >edit</button>
            </div>
        )


    }

    const ifEditing = () => {
        return(
            <form onSubmit={e => {e.preventDefault(); dispatch(reverse_task(id, (editOfTask=='') ? null : editOfTask))}} className = "text-black">
                <input type='text' onChange={(e) => set_editOfTask(e.target.value)} value = {editOfTask}></input>
            </form>
 
        )

    }


    const renderTask = () => {
        if (status == 'completed') {
            return (
                ifCompleted())

        } else if (status == 'softdeleted') {
            return (
                ifSoftDeleted())

        } else if (status == 'edit') {
            return(
                ifEditing())

        } else {
            return (
                ifNothing())
        }

    }

    return (
        <div className = "font-semibold text-white h-20">
        {renderTask()}
        </div>
    )
}


export default Task