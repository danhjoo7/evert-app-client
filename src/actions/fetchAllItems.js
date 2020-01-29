const fetchAllItems = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/items')
            .then(res => res.json())
            .then(items => {
                dispatch({ type: "GET_ALL_ITEMS", items: items })
            })
    }
}

export default fetchAllItems

// fetch('http://localhost:3001/api/v1/items', {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//         "Authorization": `Bearer ${localStorage.getItem('jwt')}`
//     }
//         .then(res => res.json())
//         .then(items => {
//             dispatch({ type: "GET_ALL_ITEMS", items: items })
//         })
// })