import React from 'react'
import SearchBar from './searchBar'
import { connect } from 'react-redux'
import navbar from './navbar'


class navBarContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            search: ''
        }
    }

    handleChange = (e) => {
         this.setState({
            search: e.target.value
        })
    }

    render() {
        return (
            <div>
                <SearchBar search={this.state.search} onChange={this.handleChange} />
                <navBar />
            </div>
        )
    }
}



export default navBarContainer