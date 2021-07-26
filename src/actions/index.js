import { getToDosReq, createTaskPost, updateTaskPut } from "../BEConnection"



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

export const change_task = (task, changeTo) => {
    let newTask = task;
    changeTo ? newTask.Cancel = true: newTask.State = true;
    
    return async (dispatch) => {
        try {
            dispatch(updateToDoRequest())
            newTask = await updateTaskPut(task.Id, newTask)
            dispatch(updateToDoSuccess(newTask.Data, task))
        } catch {
            dispatch(updateToDoFailure())
        }
    }
}

export const change_filter = (changeTo) => {
    return {
        type: 'CHANGE_FILTER',
        payload: { changeTo }
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


const updateToDoRequest = () => ({
    type: 'UPDATE_TODO_REQUEST'
});

const updateToDoSuccess = (task, oldTask) => ({
    type: 'UPDATE_TODO_SUCCESS',
    payload: {
        task, oldTask
    }
});

const updateToDoFailure = () => ({
    type: 'UPDATE_TODO_FAILURE'
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