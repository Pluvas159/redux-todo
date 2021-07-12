export const add_task = (text) => {
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
        payload: {taskId, changedText}
    }
}

export const change_task = (taskId, changeTo) => {
    return {
        type: 'CHANGE_TASK',
        payload: {taskId, changeTo}
    }
}