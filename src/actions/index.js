import { getToDosReq, createTaskPost } from "../BEConnection"
import { v4 as uuidv4 } from 'uuid';


export const add_task = (text) => {
    let newTask = {Name: text,
        State:false, Cancel:false, 
        Description: text,
        Note: text,
        } 
    return async (dispatch) => {
        try {
            dispatch(addToDoRequest())
            let task = await createTaskPost(newTask)
            dispatch(addToDoSuccess(task.Data))
        } catch {
            dispatch(addToDoFailure())
        }
    }
    
    return {
        type: 'ADD_TASK',
        payload: text
    }
}

export const remove_task = (taskId) => {
    return {
        type: 'REMOVE_TASK',
        payload: taskId
    }
}


export const edit_task = (taskId) => {
    return {
        type: 'EDIT_TASK',
        payload: taskId
    }
}

export const reverse_task = (taskId, changedText) => {
    return {
        type: 'REVERSE_TASK',
        payload: { taskId, changedText }
    }
}

export const change_task = (taskId, changeTo) => {
    return {
        type: 'CHANGE_TASK',
        payload: { taskId, changeTo }
    }
}

export const change_filter = (changeTo) => {
    return {
        type: 'CHANGE_FILTER',
        payload: { changeTo }
    }
}

export const addTasks = (tasks) => {
    console.log(tasks)
    return {
        type: 'ADD_TASKS',
        payload: { tasks }
    }
}

const addToDoRequest = () => ({
    type: 'ADD_TODO_REQUEST'
});

const addToDoSuccess = (newTask) => ({
        type: 'ADD_TASK_SUCCESS',
        payload: {newTask}
});

const addToDoFailure = () => ({
    type: 'ADD_TASK_FAILURE'
});

const getToDoRequest = () => ({
    type: 'GET_TODO_REQUEST'
});
const getToDoSuccess = () => ({
    type: 'GET_TASK_SUCCESS'
});
const getToDoFailure = () => ({
    type: 'GET_TASK_FAILURE'
});

const getToDosRequest = () => ({
    type: 'GET_TODOS_REQUEST'

});

const getToDosSuccess = (todos) => ({
    type: 'GET_TODOS_SUCCESS',
    payload: {
        todos: todos||[]
    }

});

const getToDosFailure = () => ({
    type: 'GET_TODOS_FAILURE'

});


export const getToDos = () => {
    return async (dispatch) => {
        try {
            dispatch(getToDosRequest())
            let todos = await getToDosReq()
            dispatch(getToDosSuccess(todos.Data))
        } catch (e) {
            dispatch(getToDosFailure())
        }
    }
}