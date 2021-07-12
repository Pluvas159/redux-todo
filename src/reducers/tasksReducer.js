import { v4 as uuidv4 } from 'uuid';

const tasksReducer = (state = [], action) => {
    let newTask = {}
    let index;
    switch(action.type){
        case 'ADD_TASK':
            return [...state, {status:'new', text: action.payload, id: uuidv4()}] 

        case 'CHANGE_TASK':
            newTask = state.find(task => task.id === action.payload.taskId)
            newTask.status = action.payload.changeTo
     
            return [...state.filter(task => task.id !== action.payload.taskId), newTask]

        case 'REMOVE_TASK':
            return state.filter(task => task.id !== action.payload)

        case 'EDIT_TASK':
            newTask = state.find(task => task.id === action.payload)
            newTask.laststatus = newTask.status
            newTask.status = 'edit'
    
            index = state.indexOf(newTask)

            return [...state.slice(0,index), newTask, ...state.slice(index+1, state.length)]

        case 'REVERSE_TASK':
            newTask = state.find(task => task.id === action.payload.taskId)
            newTask.status = newTask.laststatus
            newTask.text = (action.payload.changedText==null) ? newTask.text : action.payload.changedText
            
            index = state.indexOf(newTask)

            return [...state.slice(0,index), newTask, ...state.slice(index+1, state.length)]

            

        
        default:
            return state
    }
}

export default tasksReducer