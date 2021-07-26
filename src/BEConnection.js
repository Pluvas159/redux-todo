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
    
export const createTaskPost = (task) => {
    try {
        fetch(`http://localhost/todos-api/api/ToDos`,
        {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
    } catch {
        console.error("chyba")
    }
}
    
    