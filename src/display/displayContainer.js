import React from 'react'
import { connect } from 'react-redux'
import ItemCard from './itemCard'

class DisplayContainer extends React.Component {
    render() {
        return (
            <div className="display-container">
                <div className="item-list">
                    {this.props.items.map(item => {
                        return <ItemCard key={item.id} item={item} />
                    }
                    )}
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

export default connect(mapStatetoProps, null)(DisplayContainer)
