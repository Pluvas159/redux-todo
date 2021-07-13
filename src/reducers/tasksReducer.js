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



            

        
        default:
            return state
    }
}


export default tasksReducer