import React from 'react'
import ItemImagesContainer from './ItemImagesContainer'
import ItemDetails from './ItemDetails'

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

export default Show