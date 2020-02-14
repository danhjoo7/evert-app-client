import React from 'react'
import Button from '@material-ui/core/Button';
import 'typeface-roboto'

const ItemCard = (props) => {
    const { brand, name, price, size } = props.item
    return (
        <div className="item-card">
            <div className="item-image">
                <a href="/items/">

                </a>
                {/* <img className="item-main-picture" alt="item-main-picture" src="https://gearmoose.com/wp-content/uploads/2019/09/peter-millar-mountainside-shirt-jacket.jpg" className="item-card-main-picture"></img> */}
            </div>
            <div className="item-card-details">
                <div className="item-brand-size">
                    <div className="item-brand">
                        <h4>{brand.toUpperCase()}</h4>
                    </div>
                    <div className="item-size">
                        <h5>{size}</h5>
                    </div>
                </div>
                <div className="item-brand-name-price-favorites">
                    <div className="item-name">
                        <h4>{name}</h4>
                    </div>
                    <div className="item-price">
                        <h5>${price}</h5>
                    </div>
                    <div className="item-favorites-button">
                        <Button size="small" color="secondary">Add to Favorites</Button>
                    </div>
                </div>
            </div>

        </div>



    )
}

export default ItemCard 