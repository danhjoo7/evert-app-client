import React from 'react'

const ItemCard = (props) => {
    const { brand, name, price, size } = props.item
    return (
        <div className="item-card">
            <div className="item-card-header">
                <h3>{brand}</h3>
                <h4>{name}</h4>
            </div>
            <div className="item-card-details-size">
                <h6>{size}</h6>
            </div>
            <div className="item-card-details-price">
                <h6>{price}</h6>
            </div>
        </div>
    )
}

export default ItemCard 