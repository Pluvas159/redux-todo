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
    
    
    
    
    /*.then((response) => {
        if (response.status === 200) {
            //console.log(response)
            return response.json().then((data) => {/*add_Taskas(dta.Data)})
        } else {
            alert("Message failed to send.")
        }
    })*/