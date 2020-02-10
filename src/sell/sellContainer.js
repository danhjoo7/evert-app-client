import React from 'react'
import { connect } from 'react-redux'
import submitSellItem from '../actions/submitSellItem'

class Sell extends React.Component {
    constructor() {
        super()

        this.state = {}
        //     item: {
        //         item_name: '',
        //         brand: '',
        //         price: '',
        //         size: '',
        //         description: '',
        //         images: []
        //     }
        // }
    }

    handleChange = (e, { value }) => {
        this.setState({ value })
    }

    render() {
        const { value } = this.state
        // Brand , item_name, size, price, item_description
        return (
            <div>

            </div>
        )
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        submitSellItem: (() => submitSellItem())
    }
}

export default connect(null, mapDispatchtoProps)(Sell) 