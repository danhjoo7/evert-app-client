const fetchSearchItem = (e) => {
    e.preventDefault()
    return { type: "SEARCH", search: e.target.value }
}

export default fetchSearchItem