export const getToDosReq = async (userId) => {
    try {
        const response = await fetch(`http://localhost/todos-api/api/ToDos/?UserId=3`,
            {
                method: "GET",
                mode: "cors"
            });
        return  await response.json()

        
        } catch {
                console.error("chyba")
            }
            
    }
    
export const createTaskPost = async (task) => {
    try {
        const response = await fetch(`http://localhost/todos-api/api/ToDos`,
        {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });
        return await response.json()
    } catch {
        console.error("chyba")
    }
}
    
export const deleteTask = (Id) => {
    try {
        fetch(`http://localhost/todos-api/api/ToDos/${Id}`,
        {
            method: "DELETE",
            
        });
    } catch {
        console.error("chyba")
    }

}    

export const updateTaskPut = async (Id, task) => {
    try {
        const response = await fetch(`http://localhost/todos-api/api/ToDos/${Id}`,
        {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });
        return await response.json()
    } catch (e){
        console.error("chyba" + e)
    }
}