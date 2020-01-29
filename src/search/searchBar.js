import React from 'react'

const SearchBar = (props) =>

    <div className="global-search-bar">
            <div className="search-icon">
                <img src="https://process.fs.grailed.com/rdmZ5l2mQBGvdtVr2xCG" />
            </div>
            <div className="global-search">
                <input
                    className="navbar-search-item"
                    name="search"
                    onChange={props.onChange}
                    placeholder='Search'
                    value={this.props.search}
                    onChange={this.props.handleChange}
                />
                <button id="global-search-item-button">Search</button>
            </div>
    </div>

export default SearchBar