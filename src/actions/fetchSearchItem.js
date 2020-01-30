

const fetchSearchItem = (e) => {
    e.preventDefault()

    return (dispatch) => {
        const searchTerm = e.target.value  
        fetch('http://localhost:3001/api/v1/items/${searchTerm}')

        // where we filter the results according to the user input 
        
    }
}

export default fetchSearchItem