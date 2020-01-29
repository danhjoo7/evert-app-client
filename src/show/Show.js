import React from 'react'
import { connect } from 'react-redux'
import ItemImagesContainer from './itemImagesContainer'
import ItemDetails from './itemDetails'

const Show = () => {
    return (
        <div className="item-show-display-page">
            <div className="item-show-display-page-item-details">
                <ItemDetails />
            </div>
            <div className="item-show-display-page-item-images">
                <ItemImagesContainer />
            </div>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        
    }
}

export default connect(mapStatetoProps, null)(Show)