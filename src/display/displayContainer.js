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
                <h2>Discover new items.</h2>
                <hr size="2" align="center"></hr>
                <div className="display-item-cards">
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

