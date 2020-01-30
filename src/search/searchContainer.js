import React from 'react'
import { connect } from 'react-redux'
// import SearchBar from './searchBar'
import fetchSearchItem from '../actions/fetchSearchItem'

class Search extends React.Component {
    constructor() {
        super()

        this.state = {
            search: ''
        }
    }

    handleOnChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleSearch = (e) => {
        e.preventDefault()

        const searchResult = this.props.items.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    }


    render() {
        // const 
        return (
            <div className="search-bar-container">
                <div className="search-icon">
                    <img src="https://process.fs.grailed.com/rdmZ5l2mQBGvdtVr2xCG" />
                </div>
                <div className="global-search">
                    <form className="search-bar-input-form" onSubmit={this.searchItem}>
                        <input className="navbar-search-item" type="search" name="search" onChange={this.handleOnChange} placeholder='Search...' value={this.state.search} />
                        <button onSubmit={this.handleSearch} id="global-search-item-button" />
                    </form>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        items: state.items
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        fetchSearchItem: () => dispatch(fetchSearchItem())
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Search)


// alterPlants = (e) => {

//     //     const newArr = this.props.plants.filter(plant => plant.attributes.name.toLowerCase().includes(e.target.value.toLowerCase()) || plant.attributes.species.name.toLowerCase().includes(e.target.value.toLowerCase()))
//     //     this.setState({
//     //       alteredPlants: newArr
//     //     }, () => {
//     //       console.log(newArr[0])
//     //     })
//     //   }