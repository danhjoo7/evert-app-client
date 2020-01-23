const signUpUser = (e, state, history) => {
    e.preventDefault();

    const {name, username, password, location} = state

    return (dispatch) => {
        fetch('http://localhost:3000/users',{
            method: "POST",
            headers: {
                "Authorization": `${localStorage.getItem('jwt')}`,
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user: {
                    name: name,
                    location: location,
                    username: username,
                    password: password
                }
            })
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: "SET_CURRENT_USER", user: data.user })
            dispatch({ type: "ADD_USER", user: data.user })
            localStorage.setItem('jwt', data.jwt)
            history.push('/home')
        })
    }

 
}

export default signUpUser