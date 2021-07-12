import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove_task, edit_task, reverse_task, change_task } from './actions'
import './index.css';


function Task({ status, text, id }) {
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    const [editOfTask, set_editOfTask] = useState('')

    const ifNothing = () => {
        return (
            <div className="w-full">
                <p>{text}</p>
                <button onClick={e => { e.preventDefault(); dispatch(change_task(id, 'completed')) }}
                    className="float-right pl-1 pr-1 p-px rounded-lg text-black font-semibold bg-green-500 mr-2 hover:text-white " >complete</button>
                <button class = "edit_button" onClick={e => { e.preventDefault(); dispatch(edit_task(id)) }}
                     >edit</button>
            </div>
        )

    }


    const ifCompleted = () => {
        return (
            <div className="w-full text-green-600">
                <p>{text}</p>
                <button onClick={e => { e.preventDefault(); dispatch(change_task(id, 'softdeleted')) }}
                    className="float-right p-px pl-1 pr-1 rounded-lg text-black font-semibold mr-4 bg-red-500 hover:text-white" >delete</button>
                <button class = "edit_button" onClick={e => { e.preventDefault(); dispatch(edit_task(id)) }}
                     >edit</button>
            </div>
        )
    }


    const ifSoftDeleted = () => {
        return (
            <div className="w-full">
                <p className="line-through text-red-600">{text}</p>
                <button onClick={e => { e.preventDefault(); dispatch(remove_task(id)) }}
                    className="float-right hover:text-white bg-purple-700 rounded-lg font-semibold p-px pl-2 pr-2" >remove</button>
                <button class = "edit_button" onClick={e => { e.preventDefault(); dispatch(edit_task(id)) }}
                     >edit</button>
            </div>
        )


    }

    const useFocus = () => {
        const htmlElRef = useRef(null)
        const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}
    
        return [ htmlElRef, setFocus ] 
    }
    const [inputRef, setInputFocus] = useFocus()

    useEffect(() => {
        if(status==='edit'){setInputFocus()}
    })

    const ifEditing = () => {
        return(
            <form onSubmit={e => {e.preventDefault(); dispatch(reverse_task(id, (editOfTask=='') ? null : editOfTask))}} className = "text-black">
                <input type='text' onChange={(e) => set_editOfTask(e.target.value)} value = {editOfTask} ref={inputRef} className="rounded-lg outline-none mt-1 pl-1 focus:ring-2 focus:ring-red-600"/>
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
                ifEditing()
                )

        } else {
            return (
                ifNothing())
        }

    }

    return (
        <div className = "font-semibold text-black pb-8 pl-1">
        {renderTask()}
        </div>
    )
}


export default Task