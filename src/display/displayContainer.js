import React from 'react'
import { connect } from 'react-redux'
import ItemCard from './itemCard'
import './itemCard.scss'



class Display extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="display-container">
                <div className="main-app-image-container">
                    <img className="main-app-image" alt="ecommerce and vintage items" src="https://thesunpapers.com/wp-content/uploads/sites/19/2019/04/fashion-1031469__340.jpg" />
                </div>
                <div>
                    <h2 className="display-header">Featured</h2>
                </div>
                <div className="display-item-cards">
                    {/* <hr size="2" align="center"></hr> */}
                    {this.props.items.filter((item) => item.name.toLowerCase().startsWith(this.props.search.toLowerCase()) ||
                        item.brand.toLowerCase().startsWith(this.props.search.toLowerCase())).map(item => {
                            return (<ItemCard key={item.id} item={item} />)
                        }
                        )}
                </div>
            </div >
        )
    }
}


const mapStatetoProps = state => {
    return {
        items: state.items,
        search: state.search
    }
}

export default connect(mapStatetoProps, null)(Display)

