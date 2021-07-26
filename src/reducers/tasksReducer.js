import {  deleteTask } from '../BEConnection'
// by Pluvas

const tasksReducer = (state =  [], action) => {
    let newTask = {}
    let task;
    switch (action.type){
        case 'ADD_TASK_SUCCESS':
            return [...state, action.payload.newTask] 

        case 'UPDATE_TODO_SUCCESS':
            return state.map(task => {
                if (task.Id === action.payload.oldTask.Id){
                    return action.payload.task
                }
                return task
            })

        case 'REMOVE_TASK':
            deleteTask(action.payload)
            return state.filter(task => task.Id !== action.payload)

        case 'EDIT_TASK':
            return state.map(task => {
                if(task.id === action.payload){
                    task.laststatus = task.status
                    task.status = 'edit'

                    return task
                } 
                return task;
             })


        case 'REVERSE_TASK':
            return state.map(task => {
                if (task.id === action.payload.taskId){
                    task.status = task.laststatus
                    task.text = (action.payload.changedText==null) ? newTask.text : action.payload.changedText
                 
                    return task
                }
                return task;
            })

        case 'GET_TODOS_SUCCESS':
            return action.payload.todos
        

    
        default:
            return state
    }
}

export default tasksReducer