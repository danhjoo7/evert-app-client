import React from 'react'
import { connect } from 'react-redux'
import submitSellItem from '../actions/submitSellItem'
import './sell.scss'

class Sell extends React.Component {
    constructor() {
        super()

    }


    render() {
        // Brand , item_name, size, price, item_description
        return (
            <div className="sell-item-form">
                <form>
                    <div className="form-group">
                        <div className="form-header">
                            <h2>Sell an item</h2>
                        </div>
                        <div className="form-comment">
                            <p>
                                Selling an item is pretty easy...just fill in a few details and images, and you'll be all set!
                            </p>
                        </div>
                        <label for="exampleInputEmail1">Brand Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <div className="item-description-text-area">
                        <textarea>
                            Item description (item condition, size, pricing, comments, etc.)
                        </textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            )
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        submitSellItem: (e) => dispatch(submitSellItem(e))
    }
}
                

export default connect(null, mapDispatchtoProps)(Sell)