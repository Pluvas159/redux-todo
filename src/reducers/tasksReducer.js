import { v4 as uuidv4 } from 'uuid';
import { createTaskPost, deleteTask } from '../BEConnection'
//
const tasksReducer = (state =  [], action) => {
    let newTask = {}
    let task;
    switch (action.type){
        case 'ADD_TASK_SUCCESS':
            //console.log(state)
            //localStorage.setItem('tasks', JSON.stringify([...state, newTask]))
            return [...state, action.payload.newTask] 

        case 'UPDATE_TODO_SUCCESS':
            //newTask = state.find(task => task.id === action.payload.taskId)
            //console.log(action.payload.changeTo)
            //action.payload.changeTo ? newTask.Cancel = true : newTask.State = true

            //localStorage.setItem('tasks', JSON.stringify(JSON.parse(localStorage.getItem('tasks')).filter(task => task.id !== action.payload.taskId)))
            //localStorage.setItem('tasks', JSON.stringify([...JSON.parse(localStorage.getItem('tasks')), newTask]))
            //return [...state.filter(task => task.id !== action.payload.taskId), newTask]

            return state.map(task => {
                //console.log(task.Id, action.payload.taskId)
                if (task.Id === action.payload.oldTask.Id){
                    return action.payload.task
                    //action.payload.changeTo ? task.Cancel = true : task.State = true
                }
                return task
            })

        case 'REMOVE_TASK':
            //localStorage.setItem('tasks', JSON.stringify(JSON.parse(localStorage.getItem('tasks')).filter(task => task.id !== action.payload)))
            deleteTask(action.payload)
            return state.filter(task => task.Id !== action.payload)

        case 'EDIT_TASK':
            return state.map(task => {
                if(task.id === action.payload){
                    task.laststatus = task.status
                    task.status = 'edit'
                    //localStorage.setItem('tasks', JSON.stringify(JSON.parse(localStorage.getItem('tasks')).filter(x => x.id !== action.payload)))
                    return task
                } 
                return task;
             })


        case 'REVERSE_TASK':
            return state.map(task => {
                if (task.id === action.payload.taskId){
                    task.status = task.laststatus
                    task.text = (action.payload.changedText==null) ? newTask.text : action.payload.changedText
                    //localStorage.setItem('tasks', JSON.stringify([...JSON.parse(localStorage.getItem('tasks')), task]))
                    return task
                }

                return task;
            })

        case 'GET_TODOS_SUCCESS':
            return action.payload.todos
        
        case 'ADD_TASKS':
            return action.payload.tasks



            

        
        default:
            return state
    }
}


export default tasksReducer