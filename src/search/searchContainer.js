import React from 'react'
import { connect } from 'react-redux'
import fetchSearchItem from '../actions/fetchSearchItem'
import './search.scss'

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

    handleKeyPress = (e) => {
        if (e.key == "Enter") {
            // fetching items based on search input
            this.props.fetchSearchItem(e)
        }
    }


    render() {
        // const 
        return (
            <div className="search-bar-container">
                <div className="search-icon">
                    <img className="magnifying-glass-icon" src="https://process.fs.grailed.com/rdmZ5l2mQBGvdtVr2xCG" />
                </div>
                <div className="global-search">
                    <div className="search-bar-input">
                        <form onSubmit={this.searchItem}>
                            <input className="navbar-search-item" onKeyPress={this.handleKeyPress} type="search" name="search" onChange={this.handleOnChange} placeholder='Search for items...' value={this.state.search} />
                            <button onSubmit={this.handleSearch} id="global-search-item-button" />
                        </form>
                    </div>
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
        fetchSearchItem: (e) => dispatch(fetchSearchItem(e))
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